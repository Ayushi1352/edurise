import type { FacultyData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FacultySlider } from "@/components/sections/FacultySlider";
import { scrollMargin, sectionSpace, sidePadding } from "@/components/ui/sectionSpace";

/** Centred heading, then the faculty cards between the two navy arrows (sizes from the 1920px design) */
export const FacultySection = ({ data }: { data?: FacultyData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative bg-[var(--color-bg-soft)] ${sectionSpace} ${scrollMargin} ${sidePadding}`}>
      <SectionHeading
        label={data.label}
        icon={data.icon}
        titleTop={data.titleTop}
        titleAccent={data.titleAccent}
        description={data.description}
        labelSizeClass="font-heading text-[1.15rem] font-extrabold lg:text-[2.54rem]"
        labelLineClass="h-[0.1875rem] w-10 lg:h-[0.1875rem] lg:w-[5.19rem]"
        labelIconClass="size-7 lg:size-[3rem]"
        labelGapClass="gap-3 lg:gap-[1.5rem]"
        titleClassName="lg:mt-[1rem] lg:text-[3.68rem] lg:leading-[4.4rem]"
        descriptionClass="font-heading lg:mt-[0.9rem] lg:text-[1.575rem] lg:leading-[2.1rem]"
      />
      <FacultySlider data={data} />
    </section>
  );
};
