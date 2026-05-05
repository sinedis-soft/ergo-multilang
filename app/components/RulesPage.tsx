import type { RulesDictionary } from "@/app/dictionaries/rules";

function Paragraphs({ items }: { items: string[] }) {
  const blocks: Array<{ type: "spacer"; key: string } | { type: "p"; key: string; text: string } | { type: "ul"; key: string; items: string[] }> = [];
  let buf: string[] = [];
  const flush = (key: string) => { if (buf.length) { blocks.push({ type: "ul", key, items: buf }); buf = []; } };
  items.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) { flush(`u-${i}`); blocks.push({ type: "spacer", key: `s-${i}` }); return; }
    if (/^•\s+/.test(trimmed)) { buf.push(trimmed.replace(/^•\s+/, "")); return; }
    flush(`u-${i}`); blocks.push({ type: "p", key: `p-${i}`, text: line });
  });
  flush("u-end");
  return <div>{blocks.map((b) => b.type === "spacer" ? <div key={b.key} style={{ height: 8 }} /> : b.type === "ul" ? <ul key={b.key} className="cp-ul" style={{ margin: "0 0 12px 20px" }}>{b.items.map((it, idx) => <li key={`${b.key}-${idx}`} style={{ marginBottom: 6 }}>{it}</li>)}</ul> : <p key={b.key} style={{ margin: "0 0 12px" }}>{b.text}</p>)}</div>;
}

export default function RulesPage({ t }: { t: RulesDictionary }) {
  return (
    <main id="main" className="cp-page">
      <section className="section">
        <div className="container cp-container">
          <h1 className="section__title cp-h1">{t.pageTitle}</h1>
          <p className="cp-p" style={{ marginBottom: 6 }}>{t.subtitle}</p>
          <p className="cp-updated" style={{ marginBottom: 20 }}>Дата обновления: {t.updatedAt}</p>
          <div className="panel cp-card"><div className="panel__body">
            {t.sections.map((s, idx) => (
              <div key={idx} style={{ marginBottom: 20 }}>
                <h2 className="cp-h2">{s.title}</h2>
                <Paragraphs items={s.paragraphs} />
              </div>
            ))}
          </div></div>
        </div>
      </section>
    </main>
  );
}
