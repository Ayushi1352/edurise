import Image from "next/image";
import type { WhyData } from "@/types/templates.types";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { scrollMargin, sectionSpace, sidePadding } from "@/components/ui/sectionSpace";

/*
  The photo sits over a navy square frame and reaches past its right side. Both are placed in % of their box
  (854 × 730 in the 1920px design), so the picture keeps the design's shape on every screen.
  From 1024px up the text sits on the right at the design's sizes (1 design pixel = 0.0625rem).
*/
export const WhySection = ({ data }: { data?: WhyData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative bg-[var(--color-bg-soft)] ${sectionSpace} ${scrollMargin} ${sidePadding}`}>
      <div className="mx-auto grid max-w-[40rem] gap-10 sm:gap-12 lg:flex lg:max-w-none lg:items-start lg:gap-0 lg:pl-[3.06rem]">
        <div data-reveal className="relative aspect-[854/730] w-full lg:w-[53.38rem] lg:shrink-0">
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[83.7%] border-[0.85rem] border-[var(--color-navy-deep)] sm:border-[1.4rem] lg:border-[2.25rem]" />
          <div className="absolute left-[7.49%] top-[10.68%] h-[80.4%] w-[92.5%] overflow-hidden shadow-[0_1rem_2rem_-1.2rem_var(--color-shadow-strong)]">
            <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 790px, (min-width: 640px) 37rem, 92vw" className="object-cover" />
          </div>
        </div>

        <div data-reveal className="lg:ml-[3.69rem] lg:pt-[6.9rem]">
          <SectionLabel
            text={data.label}
            lines="before"
            sizeClass="font-ui text-[1.2rem] font-extrabold lg:text-[2.64rem]"
            lineClass="h-[0.19rem] w-10 lg:h-[0.25rem] lg:w-[4.88rem]"
            gapClass="gap-3 lg:gap-[1.13rem]"
          />
          {/* one line on phones and tablets, the design's two lines from 1024px up */}
          <h2 className="mt-3 text-balance font-ui text-[clamp(1.05rem,4.5vw,1.75rem)] font-extrabold leading-[1.15] tracking-[-0.01em] text-[var(--color-navy)] sm:text-[clamp(1.75rem,3.2vw,2.4rem)] lg:mt-[1.6rem] lg:text-[5.46rem] lg:leading-[6rem]">
            <span className="lg:block">{data.titleTop} </span>
            <span className="text-[var(--color-gold-text)] lg:block">{data.titleAccent}</span>
          </h2>
          <p className="mt-4 font-ui text-[1.05rem] leading-[1.6] text-[var(--color-text-dark)] sm:text-[1.2rem] lg:mt-[1.9rem] lg:text-[2.22rem] lg:leading-[2.94rem]">
            {data.descriptionLines.map((line) => (
              <span key={line} className="lg:block">
                {line}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};
