import Image from "next/image";
import type { CSSProperties } from "react";
import type { HiringData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { scrollMargin, sectionSpace, sidePadding } from "@/components/ui/sectionSpace";

/** width of a logo tile in the 1920px design: every logo keeps its share of the tile on every screen */
const DEFAULT_TILE_WIDTH = 166.3;

/** Centred heading, then the employer logos on white tiles: 4 a row on phones, 5 on tablets, 10 from 1024px up */
export const HiringSection = ({ data }: { data?: HiringData }) => {
  if (!data) return null;
  const tileWidth = data.tileWidth ?? DEFAULT_TILE_WIDTH;

  return (
    <section id={data.id} className={`relative bg-[var(--color-bg-soft)] ${sectionSpace} ${scrollMargin} ${sidePadding}`}>
      <SectionHeading
        label={data.label}
        icon={data.icon}
        titleTop={data.titleTop}
        titleAccent={data.titleAccent}
        description={data.description}
        labelSizeClass="font-heading text-[1.2rem] font-extrabold lg:text-[2.68rem]"
        labelLineClass="h-[0.1875rem] w-10 lg:h-[0.1875rem] lg:w-[5.06rem]"
        labelIconClass="size-7 lg:size-[2.9rem]"
        labelGapClass="gap-3 lg:gap-[2rem]"
        titleClassName="lg:mt-[0.9rem] lg:text-[4.71rem] lg:leading-[5rem]"
        descriptionClass="font-heading lg:mt-[0.6rem] lg:text-[1.73rem] lg:leading-[2.2rem]"
      />

      <ul aria-label={data.label} className="mx-auto mt-8 flex max-w-[40rem] flex-wrap justify-center gap-2 sm:mt-10 sm:max-w-[48rem] sm:gap-3 lg:mt-[4.3rem] lg:w-[111.25rem] lg:max-w-none lg:gap-x-[0.81rem] lg:gap-y-[0.75rem]">
        {data.employers.map((employer, index) => (
          <li
            key={employer.id}
            data-reveal
            data-reveal-delay={(index % 10) * 40}
            style={{ "--logo-w": `${(employer.width / tileWidth) * 100}%` } as CSSProperties}
            className="grid aspect-[166/86] basis-[calc((100%-1.5rem)/4)] place-items-center rounded-lg bg-[var(--color-white)] px-1 shadow-[0_0.35rem_1rem_-0.4rem_var(--color-shadow-strong)] transition-transform duration-300 hover:-translate-y-1 sm:basis-[calc((100%-3rem)/5)] lg:aspect-auto lg:h-[5.4rem] lg:basis-[calc((100%-7.29rem)/10)] lg:rounded-[0.63rem] lg:px-0"
          >
            <Image
              src={employer.image}
              alt={employer.name}
              width={employer.width}
              height={employer.height}
              quality={90}
              sizes={`(min-width: 1024px) ${employer.width}px, 20vw`}
              className="h-auto max-h-[85%] w-[var(--logo-w)] object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
