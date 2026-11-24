import type { HiringData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HiringSection({ data }: { data: HiringData }) {
  return (
    <section className="section hiring-section" id={data.id}>
      <SectionHeading data={data} />
      <div className="employer-grid" aria-label="Our hiring partners">
        {data.employers.map((employer, index) => (
          <div className={`employer-logo employer-logo--${index % 7}`} key={employer}>
            {employer}
          </div>
        ))}
      </div>
    </section>
  );
}
