import type { FaqData } from "@/types/templates.types";

export function FaqSection({ data }: { data: FaqData }) {
  return (
    <section className="section faq-section" id={data.id}>
      <div className="faq-content">
        <p className="mini-heading"><span /> {data.eyebrow}</p>
        <h2>
          {data.titleTop} <em>{data.titleAccent}</em>
        </h2>
        <div className="faq-list">
          {data.items.map((item, index) => (
            <details className="faq-item" key={item.id} open={index === 0}>
              <summary>
                {item.question}
                <span aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <div
        className="faq-photo"
        role="img"
        aria-label={data.imageAlt}
        style={{ backgroundImage: `url("${data.image}")` }}
      />
    </section>
  );
}
