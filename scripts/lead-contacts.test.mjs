import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import ts from 'typescript';

const filename = path.resolve('app/api/lead/route.ts');
const previousWebhook = process.env.BITRIX_WEBHOOK_URL;
process.env.BITRIX_WEBHOOK_URL = 'https://bitrix.invalid/rest/1/test';
const loaded = new Module(filename);
loaded.filename = filename;
loaded.paths = Module._nodeModulePaths(path.dirname(filename));
loaded._compile(ts.transpileModule(readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, filename);
if (previousWebhook === undefined) delete process.env.BITRIX_WEBHOOK_URL;
else process.env.BITRIX_WEBHOOK_URL = previousWebhook;
const { POST } = loaded.exports;

function request(overrides = {}) {
  const values = {
    contact_firstNameLat: 'Ada', contact_lastNameLat: 'Example',
    contact_phone: '+371 207-702-44', contact_email: ' ADA@example.invalid ',
    policyholder_birthDate: '1980-01-02', policyholder_address: 'Riga',
    'vehicles[0][plate]': 'TEST123', ...overrides,
  };
  const form = new FormData();
  for (const [key, value] of Object.entries(values)) form.set(key, value);
  return new Request('http://localhost/api/lead', { method: 'POST', body: form });
}
function mock(t, options = {}) {
  const calls = [];
  const matching = {
    ID: '9', NAME: 'Ada', LAST_NAME: 'Example', BIRTHDATE: '1980-01-02T00:00:00+03:00',
    PHONE: [{ VALUE: '+37120770244' }], EMAIL: [{ VALUE: 'ada@example.invalid' }],
  };
  t.mock.method(globalThis, 'fetch', async (url, init) => {
    assert(String(url).startsWith('https://bitrix.invalid/rest/1/test/'));
    const method = String(url).split('/').pop().replace('.json', '');
    const payload = JSON.parse(init.body); calls.push({ method, payload });
    let result;
    if (method === 'crm.duplicate.findbycomm') {
      assert.equal(payload.entity_type, 'CONTACT');
      assert.deepEqual(payload.values, [payload.type === 'EMAIL' ? 'ada@example.invalid' : '+37120770244']);
      if (options.lookupError) return Response.json({ error: 'ACCESS_DENIED' });
      const ids = payload.type === 'EMAIL' ? options.emailIds : options.phoneIds;
      result = ids?.length ? { CONTACT: ids } : [];
    } else if (method === 'crm.contact.get') result = { ...matching, ...options.contact };
    else if (method === 'crm.contact.add') result = options.createdId ?? 501;
    else if (method === 'crm.company.list') result = [{ ID: '55' }];
    else if (method === 'crm.company.update') result = true;
    else if (method === 'crm.deal.add') result = 801;
    else throw new Error(`Unexpected method ${method}: existing contacts must not be updated and real network is forbidden`);
    return Response.json({ result });
  });
  const payload = (method) => calls.find(c => c.method === method)?.payload;
  return { calls, payload };
}

test('new applicant fields stay in their correct positions and deal binds only that contact', async (t) => {
  const { calls, payload } = mock(t);
  const response = await POST(request());
  assert.equal(response.status, 200);
  const fields = payload('crm.contact.add').fields;
  assert.equal(fields.NAME, 'Ada'); assert.equal(fields.LAST_NAME, 'Example');
  assert.deepEqual(fields.PHONE, [{ VALUE: '+37120770244', VALUE_TYPE: 'WORK' }]);
  assert.deepEqual(fields.EMAIL, [{ VALUE: 'ada@example.invalid', VALUE_TYPE: 'WORK' }]);
  assert.equal(fields.BIRTHDATE, '1980-01-02'); assert.equal(fields.ADDRESS, 'Riga');
  assert.deepEqual(payload('crm.deal.add').fields.CONTACT_IDS, [501]);
  assert.equal(payload('crm.deal.add').fields.COMPANY_ID, 1817);
  assert(!calls.some(c => c.method === 'crm.contact.update' || c.method === 'crm.contact.list'));
});
for (const options of [
  { emailIds: [9], phoneIds: [] },
  { emailIds: [9], phoneIds: [10] },
  { emailIds: [9, 10], phoneIds: [9, 10] },
]) {
  test(`shared/ambiguous contact information never picks the first record: ${JSON.stringify(options)}`, async (t) => {
    const { payload } = mock(t, options);
    assert.equal((await POST(request())).status, 200);
    assert(payload('crm.contact.add'));
    assert.deepEqual(payload('crm.deal.add').fields.CONTACT_IDS, [501]);
  });
}
test('unique matching identity reuses the contact without replacing any existing field', async (t) => {
  const { calls, payload } = mock(t, {
    emailIds: [9], phoneIds: [9], contact: {
      NAME: ' ADA ', LAST_NAME: 'EXAMPLE',
      PHONE: [{ VALUE: '+10000000000' }, { VALUE: '+371 (207) 702-44' }],
      EMAIL: [{ VALUE: 'other@example.invalid' }, { VALUE: 'ADA@EXAMPLE.INVALID' }],
    },
  });
  assert.equal((await POST(request())).status, 200);
  assert.deepEqual(payload('crm.deal.add').fields.CONTACT_IDS, [9]);
  assert(!calls.some(c => c.method === 'crm.contact.add' || c.method === 'crm.contact.update'));
});
for (const contact of [
  { NAME: 'Another person' }, { LAST_NAME: 'Someone else' },
  { EMAIL: [{ VALUE: 'unrelated@example.invalid' }] }, { PHONE: [{ VALUE: '+10000000000' }] },
  { BIRTHDATE: '1970-01-02' },
]) {
  test(`read-back identity mismatch creates a separate contact: ${JSON.stringify(contact)}`, async (t) => {
    const { payload } = mock(t, { emailIds: [9], phoneIds: [9], contact });
    assert.equal((await POST(request())).status, 200);
    assert(payload('crm.contact.add'));
    assert.deepEqual(payload('crm.deal.add').fields.CONTACT_IDS, [501]);
  });
}
test('unexpected contact ID from Bitrix stops before contact/deal writes', async (t) => {
  const { payload } = mock(t, { emailIds: [9], phoneIds: [9], contact: { ID: 777 } });
  assert.equal((await POST(request())).status, 500);
  assert.equal(payload('crm.contact.add'), undefined); assert.equal(payload('crm.deal.add'), undefined);
});
for (const overrides of [{ contact_firstNameLat: '' }, { contact_phone: 'not a phone' }, { contact_email: 'not an email' }, { policyholder_isCompany: 'on', company_inn: '' }]) {
  test(`invalid contact/company input is rejected before API calls: ${JSON.stringify(overrides)}`, async (t) => {
    const { calls } = mock(t);
    assert.equal((await POST(request(overrides))).status, 400); assert.equal(calls.length, 0);
  });
}
test('company application uses its actual company rather than hardcoded company 1817', async (t) => {
  const { payload } = mock(t);
  const response = await POST(request({ policyholder_isCompany: 'on', company_inn: '12345', company_ceo_fullName: 'Director Example', company_ceo_title: 'Director' }));
  assert.equal(response.status, 200);
  assert.deepEqual(payload('crm.company.list').filter, { UF_CRM_COMPANY_1692911328252: '12345' });
  assert.equal(payload('crm.company.update').fields.UF_CRM_1709019759168, 'Director Example');
  assert.equal(payload('crm.company.update').fields.UF_CRM_1709019814756, 'Director');
  assert.equal(payload('crm.deal.add').fields.COMPANY_ID, 55);
  assert.deepEqual(payload('crm.deal.add').fields.CONTACT_IDS, [501]);
  assert.equal(payload('crm.contact.add').fields.BIRTHDATE, undefined);
});
test('duplicate-search errors never fall back to arbitrary contact selection', async (t) => {
  const { payload } = mock(t, { lookupError: true });
  assert.equal((await POST(request())).status, 500);
  assert.equal(payload('crm.deal.add'), undefined); assert.equal(payload('crm.contact.add'), undefined);
});
