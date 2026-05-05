import type { Lang } from "@/app/dictionaries/header";
import type { CookiesPolicyDictionary, PolicyTable } from "@/app/dictionaries/privacyCookies";

type Props = {
  lang: Lang;
  t: CookiesPolicyDictionary;
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  if (!children) return null;
  return <h2 className="cp-h2">{children}</h2>;
}

function PolicyTableView({ table }: { table: PolicyTable }) {
  return (
    <div className="card card--pad" style={{ marginBottom: 16, overflowX: "auto" }}>
      <table className="cp-table" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {table.headers.map((h, idx) => (
              <th key={idx} className="cp-th" style={{ textAlign: "left", borderBottom: "1px solid #e5e7eb", padding: "8px" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx} className="cp-tr">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="cp-td" style={{ borderBottom: "1px solid #f1f5f9", padding: "8px" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  const blocks: Array<{ type: "spacer"; key: string } | { type: "p"; key: string; text: string } | { type: "ul"; key: string; items: string[] }> = [];
  let buf: string[] = [];

  const flush = (key: string) => {
    if (!buf.length) return;
    blocks.push({ type: "ul", key, items: buf });
    buf = [];
  };

  items.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flush(`ul-${i}`);
      blocks.push({ type: "spacer", key: `sp-${i}` });
      return;
    }

    if (/^•\s+/.test(trimmed)) {
      buf.push(trimmed.replace(/^•\s+/, ""));
      return;
    }

    flush(`ul-${i}`);
    blocks.push({ type: "p", key: `p-${i}`, text: line });
  });

  flush("ul-end");

  return (
    <div className="cp-text">
      {blocks.map((b) => {
        if (b.type === "spacer") return <div key={b.key} className="cp-spacer" style={{ height: 8 }} />;
        if (b.type === "ul") {
          return (
            <ul key={b.key} className="cp-ul" style={{ margin: "0 0 12px 20px" }}>
              {b.items.map((it, idx) => (
                <li key={`${b.key}-${idx}`} className="cp-li" style={{ marginBottom: 6 }}>
                  {it}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={b.key} className="cp-p" style={{ margin: "0 0 12px" }}>
            {b.text}
          </p>
        );
      })}
    </div>
  );
}

export default function CookiesPolicyPage({ t }: Props) {
  return (
    <main id="main" className="cp-page">
      <section className="section">
        <div className="container cp-container">
          <h1 className="section__title cp-h1">{t.pageTitle}</h1>

          {t.updatedAt ? (
            <p className="cp-updated">
              {t.updatedLabel}: {t.updatedAt}
            </p>
          ) : null}

          <div className="panel cp-card" style={{ marginTop: 20 }}>
            <div className="panel__body">
              {t.sections.map((s, idx) => (
                <div key={idx} className="cp-section" style={{ marginBottom: 20 }}>
                  <SectionTitle>{s.title}</SectionTitle>
                  {s.paragraphs?.length ? <Paragraphs items={s.paragraphs} /> : null}
                  {s.tables?.map((table, tIdx) => (
                    <PolicyTableView key={tIdx} table={table} />
                  ))}
                  {s.links?.length ? (
                    <div className="cp-links">
                      {s.links.map((l, i) => (
                        <p key={i} className="cp-linkRow" style={{ margin: "0 0 8px" }}>
                          <span className="cp-linkLabel">{l.label} </span>
                          <a href={l.href} className="cp-link" target="_blank" rel="noopener noreferrer">
                            {l.text}
                          </a>
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
