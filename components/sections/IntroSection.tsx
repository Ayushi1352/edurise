import type { IntroData } from "@/types/templates.types";

export function IntroSection({ data }: { data: IntroData }) {
  return (
    <section className="intro-section" id={data.id}>
      <div className="admission-banner">
        <span className="admission-cap" aria-hidden="true">✦</span>
        <strong>{data.admissionLabel}</strong>
        <span>{data.admissionText}</span>
      </div>
      <div className="intro-copy">
        <h2>
          {data.titleTop} <span>{data.titleAccent}</span>
        </h2>
        <div className="gold-rule gold-rule--center" />
        <p>{data.description}</p>
      </div>
    </section>
  );
}
