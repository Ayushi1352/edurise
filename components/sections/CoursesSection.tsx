import type { CoursesData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CoursesSection({ data }: { data: CoursesData }) {
  return (
    <section className="section courses-section" id={data.id}>
      <SectionHeading data={data} />
      <div className="course-grid">
        {data.items.map((course) => (
          <a
            className="course-card"
            href="#contact"
            key={course.id}
            style={{ backgroundImage: `url("${course.image}")` }}
          >
            <span className="course-info">
              <span className="course-seal" aria-hidden="true">◇</span>
              <span>
                <strong>{course.title}</strong>
                <small>{course.description}</small>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
