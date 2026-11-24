import type { RecognitionData } from "@/types/templates.types";

export function RecognitionsSection({ data }: { data: RecognitionData }) {
  return (
    <section className="recognitions" aria-label={`${data.title} ${data.titleAccent}`}>
      <div className="divider-heading">
        <span />
        <h2>
          {data.title} <em>{data.titleAccent}</em>
        </h2>
        <span />
      </div>
      <div className="recognition-cards">
        {data.items.map((item) => (
          <div className={`recognition-card ${item.type}`} key={item.id}>
            <strong>{item.title}</strong>
            <span>{item.subtitle}</span>
            {item.footnote && <small>{item.footnote}</small>}
          </div>
        ))}
      </div>
    </section>
  );
}
