import Image from "next/image";
import type { CoursesData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { scrollMargin, sectionSpace, sidePadding } from "@/components/ui/sectionSpace";

/*
  Where each card sits: phones stack them; tablets put two side by side with PGDM and the certificate programs on
  their own row; from 1024px up every card has its size from the 1920px design (two rows of three).
*/
const cardPlaces = [
  "sm:col-span-2 sm:aspect-[2/1] lg:h-[27.56rem] lg:w-[55.19rem]",
  "sm:aspect-[426/438] lg:h-[27.56rem] lg:w-[26.81rem]",
  "sm:aspect-[426/438] lg:h-[27.56rem] lg:w-[26.25rem]",
  "sm:aspect-[470/440] lg:h-[26.56rem] lg:w-[29.56rem]",
  "sm:aspect-[470/440] lg:h-[26.56rem] lg:w-[29.63rem]",
  "sm:col-span-2 sm:aspect-[2/1] lg:h-[26.56rem] lg:w-[49rem]",
];
const imageSizes = [
  "(min-width: 1024px) 883px, 100vw",
  "(min-width: 1024px) 429px, (min-width: 640px) 50vw, 100vw",
  "(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw",
  "(min-width: 1024px) 473px, (min-width: 640px) 50vw, 100vw",
  "(min-width: 1024px) 474px, (min-width: 640px) 50vw, 100vw",
  "(min-width: 1024px) 784px, 100vw",
];

/** Centred heading, then the six program cards: photo, navy shade at the bottom, gold cap badge, title and subtitle */
export const CoursesSection = ({ data }: { data?: CoursesData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative bg-[var(--color-bg-soft)] ${sectionSpace} lg:pb-0 lg:pt-[10.75rem] ${scrollMargin} ${sidePadding}`}>
      <SectionHeading
        label={data.label}
        icon={data.icon}
        titleTop={data.titleTop}
        titleAccent={data.titleAccent}
        description={data.description}
        labelSizeClass="font-heading text-[1.15rem] font-extrabold lg:text-[2.54rem]"
        labelLineClass="h-[0.1875rem] w-10 lg:h-[0.1875rem] lg:w-[6.375rem]"
        labelIconClass="size-8 lg:size-[4rem]"
        labelGapClass="gap-3 lg:gap-[1.5rem]"
        titleClassName="lg:mt-[1.1rem] lg:text-[4.34rem] lg:leading-[4.9rem]"
        descriptionClass="font-heading lg:mt-[0.9rem] lg:text-[1.635rem] lg:leading-[2.2rem]"
      />

      <ul className="mx-auto mt-8 grid max-w-[34rem] gap-4 sm:mt-10 sm:max-w-none sm:grid-cols-2 sm:gap-5 lg:mt-[3.9rem] lg:flex lg:w-[111.375rem] lg:flex-wrap lg:gap-x-[1.56rem] lg:gap-y-[2.44rem]">
        {data.items.map((course, index) => (
          <li
            key={course.id}
            data-reveal
            data-reveal-delay={(index % 3) * 100}
            className={`group relative aspect-[4/3] overflow-hidden rounded-[1.1rem] bg-[var(--color-navy)] shadow-[0_0.9rem_1.4rem_-0.8rem_var(--color-shadow-strong)] lg:aspect-auto lg:rounded-[1.375rem] ${cardPlaces[index] ?? ""}`}
          >
            <a href={course.url} className="absolute inset-0 block">
              <Image
                src={course.image}
                alt={course.imageAlt}
                fill
                quality={90}
                sizes={imageSizes[index] ?? "(min-width: 640px) 50vw, 100vw"}
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* navy shade under the text */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-[var(--color-overlay-soft)] from-[38%] via-[rgba(1,29,71,0.55)] via-[62%] to-[var(--color-overlay)]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-4 pb-4 sm:gap-4 sm:px-5 sm:pb-5 lg:gap-0 lg:pb-[1.9rem] lg:pl-[1.625rem] lg:pr-[0.5rem]">
                <span className="grid size-[3.25rem] shrink-0 place-items-center rounded-[0.7rem] border-[0.09rem] border-[var(--color-gold)] bg-[rgba(1,20,48,0.35)] text-[var(--color-gold)] transition-colors duration-300 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-navy)] lg:size-[5.25rem] lg:rounded-[0.875rem] lg:border-[0.1rem]">
                  <Icon name="LuGraduationCap" className="size-7 lg:size-[3.1rem]" strokeWidth={1.7} />
                </span>
                <span aria-hidden="true" className="h-14 w-[0.125rem] shrink-0 self-center bg-[var(--color-gold)] lg:ml-[1.25rem] lg:h-[6.5rem]" />
                <span className="min-w-0 text-[var(--color-white)] lg:ml-[1.44rem]">
                  <span className="block font-heading text-[1.35rem] font-extrabold leading-[1.15] tracking-[-0.01em] sm:text-[1.5rem] lg:whitespace-nowrap lg:text-[2.5rem] lg:leading-[2.9rem]">
                    {course.title}
                  </span>
                  <span className="mt-1 block font-heading text-[0.9rem] font-medium leading-[1.35] sm:text-[1rem] lg:mt-[0.2rem] lg:whitespace-nowrap lg:text-[1.6rem] lg:leading-[2.13rem]">
                    {course.descriptionLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
