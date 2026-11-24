import type { ImageSectionData } from "@/types/templates.types";

export function WhySection({ data }: { data: ImageSectionData }) {
  return (
    <section className="section why-section" id={data.id}>
      <div className="why-photo">
        <div className="photo-frame">
          <div
            className="photo-frame-image"
            role="img"
            aria-label={data.imageAlt}
            style={{ backgroundImage: `url("${data.image}")` }}
          />
        </div>
      </div>
      <div className="why-copy">
        <p className="mini-heading"><span /> {data.eyebrow}</p>
        <h2>
          {data.titleTop} <em>{data.titleAccent}</em>
        </h2>
        <p>{data.description}</p>
      </div>
    </section>
  );
}
