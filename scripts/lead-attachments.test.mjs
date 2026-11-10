import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import ts from 'typescript';

const filename = path.resolve('app/api/lead/route.ts');
const oldWebhook = process.env.BITRIX_WEBHOOK_URL;
process.env.BITRIX_WEBHOOK_URL = 'https://bitrix.invalid/rest/1/test///';
const compiled = ts.transpileModule(readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const loaded = new Module(filename);
loaded.filename = filename;
loaded.paths = Module._nodeModulePaths(path.dirname(filename));
loaded._compile(compiled, filename);
if (oldWebhook === undefined) delete process.env.BITRIX_WEBHOOK_URL;
else process.env.BITRIX_WEBHOOK_URL = oldWebhook;
const { POST } = loaded.exports;
const field = 'UF_CRM_1686154280439';

function request(uploads = [['first', 'second']]) {
  const form = new FormData();
  form.set('contact_firstNameLat', 'Test'); form.set('contact_lastNameLat', 'Applicant');
  form.set('contact_phone', '+10000000000'); form.set('contact_email', 'test@example.invalid');
  uploads.forEach((files, index) => {
    form.set(`vehicles[${index}][plate]`, `TEST${index}`);
    files.forEach((content, number) => form.append(`vehicles[${index}][docs]`, new File([content], `document-${index}-${number}.txt`, { type: 'text/plain' })));
  });
  return new Request('http://localhost/api/lead', { method: 'POST', body: form });
}
function mock(t, options = {}) {
  const calls = [], deals = [];
  t.mock.method(globalThis, 'fetch', async (url, init) => {
    assert(String(url).startsWith('https://bitrix.invalid/rest/1/test/'));
    assert(!String(url).includes('test//'));
    const method = String(url).split('/').pop().replace('.json', '');
    const payload = JSON.parse(init.body); calls.push({ method, payload });
    let result;
    if (method === 'crm.deal.fields') result = options.invalidField ? {} : {
      [field]: { type: 'file', isMultiple: options.multiple !== false, isReadOnly: false },
    };
    else if (method === 'crm.contact.list') result = [{ ID: '7' }];
    else if (method === 'crm.contact.update') result = true;
    else if (method === 'crm.deal.add') {
      if (options.addError) return Response.json({ error: 'ERROR_CORE', error_description: 'Attachment rejected' });
      deals.push(payload.fields); result = 100 + deals.length;
    } else if (method === 'crm.deal.get') {
      if (options.readError) return Response.json({ error: 'ACCESS_DENIED' });
      const upload = deals[payload.id - 101][field];
      const count = Array.isArray(upload) ? upload.length : 1;
      const saved = Array.from({ length: options.missing ? 0 : count }, (_, i) => ({ id: 1000 + i }));
      result = { [field]: options.multiple === false ? saved[0] : saved };
    } else throw new Error(`Unexpected method ${method}: real network requests are forbidden`);
    return Response.json({ result });
  });
  t.mock.method(console, 'error', () => {});
  return { calls, deals };
}

test('multiple files use fileData objects with intact names and Base64 contents', async (t) => {
  const { deals } = mock(t);
  const response = await POST(request());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true, fileProcessingIssue: false });
  assert.deepEqual(deals[0][field], [
    { fileData: ['document-0-0.txt', Buffer.from('first').toString('base64')] },
    { fileData: ['document-0-1.txt', Buffer.from('second').toString('base64')] },
  ]);
});
test('single file field receives one fileData object', async (t) => {
  const { deals } = mock(t, { multiple: false });
  const response = await POST(request([['one']]));
  assert.equal((await response.json()).fileProcessingIssue, false);
  assert.deepEqual(deals[0][field], { fileData: ['document-0-0.txt', Buffer.from('one').toString('base64')] });
});
test('multiple files for a single field fail before contact/deal writes', async (t) => {
  const { calls } = mock(t, { multiple: false });
  const response = await POST(request());
  assert.equal(response.status, 400);
  assert.deepEqual(calls.map(c => c.method), ['crm.deal.fields']);
});
test('missing file field fails before contact/deal writes', async (t) => {
  const { calls } = mock(t, { invalidField: true });
  assert.equal((await POST(request())).status, 500);
  assert.deepEqual(calls.map(c => c.method), ['crm.deal.fields']);
});
for (const options of [{ missing: true }, { readError: true }]) {
  test(`unverified saved files produce partial success: ${JSON.stringify(options)}`, async (t) => {
    const { deals } = mock(t, options);
    const response = await POST(request());
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true, fileProcessingIssue: true });
    assert.equal(deals.length, 1);
  });
}
test('Bitrix JSON errors do not report full success even with HTTP 200', async (t) => {
  mock(t, { addError: true });
  const response = await POST(request());
  assert.equal(response.status, 500);
  assert.equal((await response.json()).ok, false);
});
test('documents stay associated with the correct vehicle', async (t) => {
  const { deals } = mock(t);
  const response = await POST(request([['vehicle-one'], ['vehicle-two']]));
  assert.equal((await response.json()).fileProcessingIssue, false);
  assert.equal(deals.length, 2);
  assert.equal(Buffer.from(deals[0][field][0].fileData[1], 'base64').toString(), 'vehicle-one');
  assert.equal(Buffer.from(deals[1][field][0].fileData[1], 'base64').toString(), 'vehicle-two');
});
test('empty uploads are not submitted as null or invalid attachments', async (t) => {
  const { deals } = mock(t);
  const response = await POST(request([['']]));
  assert.deepEqual(await response.json(), { ok: true, fileProcessingIssue: true });
  assert.equal(deals[0][field], undefined);
});
