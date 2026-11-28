import Image from "next/image";
import type { FaqData } from "@/types/templates.types";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { scrollMargin, sectionSpace, sidePadding } from "@/components/ui/sectionSpace";

/** Label, two-line title and the questions on the left; the students' photo on the right (sizes from the 1920px design) */
export const FaqSection = ({ data }: { data?: FaqData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative bg-[var(--color-bg-soft)] ${sectionSpace} ${scrollMargin} ${sidePadding}`}>
      <div className="mx-auto grid max-w-[44rem] gap-10 lg:flex lg:max-w-none lg:items-start lg:gap-0 lg:pl-[7.88rem]">
        <div className="lg:w-[50.69rem] lg:shrink-0 lg:pt-[0.1rem]">
          <div data-reveal>
            <SectionLabel
              text={data.label}
              lines="before"
              sizeClass="font-ui text-[1.2rem] font-extrabold lg:text-[2.31rem]"
              lineClass="h-[0.22rem] w-10 lg:h-[0.31rem] lg:w-[4.06rem]"
              gapClass="gap-3 lg:gap-[1.38rem]"
            />
            {/* one line on phones and tablets where it fits, the design's two lines from 1024px up */}
            <h2 className="mt-3 text-balance font-ui text-[clamp(1.05rem,4.3vw,1.75rem)] font-extrabold leading-[1.15] tracking-[-0.01em] text-[var(--color-navy)] sm:text-[clamp(1.75rem,3.2vw,2.4rem)] lg:mt-[1.05rem] lg:text-[4.29rem] lg:leading-[4.88rem]">
              <span className="lg:block">{data.titleTop} </span>
              <span className="lg:block">
                {data.titleAccentLead} <span className="text-[var(--color-gold-text)]">{data.titleAccent}</span>
              </span>
            </h2>
          </div>
          <FaqAccordion items={data.items} />
        </div>

        <div data-reveal className="relative mx-auto aspect-[809/817] w-full max-w-[34rem] overflow-hidden lg:ml-[4.13rem] lg:w-[50.56rem] lg:max-w-none lg:shrink-0">
          <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 809px, (min-width: 640px) 34rem, 92vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
};
