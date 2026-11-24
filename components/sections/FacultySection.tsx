import type { FacultyData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FacultySection({ data }: { data: FacultyData }) {
  return (
    <section className="section faculty-section" id={data.id}>
      <SectionHeading data={data} />
      <div className="faculty-grid">
        {data.items.map((person) => (
          <article className="faculty-card" key={person.id}>
            <div
              className="faculty-photo"
              role="img"
              aria-label={`Portrait of ${person.name}`}
              style={{ backgroundImage: `url("${person.image}")` }}
            />
            <div className="faculty-info">
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <small>{person.focus}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
