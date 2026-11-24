import type { SectionHeadingData } from "@/types/templates.types";

export function SectionHeading({
  data,
  icon = "◆",
}: {
  data: Pick<SectionHeadingData, "eyebrow" | "titleTop" | "titleAccent" | "description">;
  icon?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-eyebrow">
        <span />
        <span className="eyebrow-icon" aria-hidden="true">
          {icon}
        </span>
        {data.eyebrow}
        <span />
      </div>
      <h2>
        {data.titleTop} <em>{data.titleAccent}</em>
      </h2>
      {data.description && <p>{data.description}</p>}
    </div>
  );
}
