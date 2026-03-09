import type { Lang } from "@/dictionaries/config";
import { getDictionaries } from "@/dictionaries";

export function HomeProcess({ lang }: { lang: Lang }) {
  const dict = getDictionaries(lang).pages.home.sections;

  return (
    <section className="section container" id="process">
      <h2>{dict.processTitle}</h2>
      <p>{dict.processDescription}</p>
      <div className="cards">
        {dict.processItems.map((item, index) => (
          <article className="card glass" key={item.title + index}>
            <h3>
              {index + 1}. {item.title}
            </h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
