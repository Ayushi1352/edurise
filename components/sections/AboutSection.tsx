import Image from "next/image";
import type { CSSProperties } from "react";
import type { AboutData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { accentClass, titleClass } from "@/components/ui/SectionHeading";
import { scrollMargin, sectionSpace, sidePadding } from "@/components/ui/sectionSpace";

/** width of each recognition card in the 1920px design, by its place in the row (the logo inside keeps its own design size) */
const cardWidths = [395, 372, 394];
const rem = (px: number) => `${px / 16}rem`;

/** Admissions banner, the welcome text, then "Recognitions & Approvals" with the three logo cards (sizes from the 1920px design) */
export const AboutSection = ({ data }: { data?: AboutData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative bg-[var(--color-bg-soft)] ${sectionSpace} ${scrollMargin} ${sidePadding}`}>
      {/* admissions banner */}
      <a
        data-reveal
        href={data.admissionUrl}
        className="group mx-auto flex max-w-[100rem] items-center gap-3 rounded-2xl bg-[var(--color-navy)] px-4 py-4 text-[var(--color-white)] transition-shadow duration-300 hover:shadow-[0_0.8rem_2rem_-1rem_var(--color-shadow-strong)] sm:gap-4 sm:px-6 lg:h-[6rem] lg:justify-center lg:gap-0 lg:rounded-[1.375rem] lg:p-0"
      >
        <Icon name={data.admissionIcon} className="size-9 shrink-0 sm:size-10 lg:size-[4rem]" />
        <span aria-hidden="true" className="h-9 w-[0.125rem] shrink-0 bg-[var(--color-gold)] lg:ml-[1.44rem] lg:h-[2.69rem] lg:w-[0.1875rem]" />
        <p className="font-sans text-[0.95rem] font-semibold leading-snug sm:text-[1.1rem] lg:ml-[2.5rem] lg:whitespace-nowrap lg:text-[2.25rem] lg:leading-none">
          <strong className="font-bold text-[var(--color-gold)]">{data.admissionLabel}</strong> {data.admissionText}
        </p>
      </a>

      {/* welcome text */}
      <div data-reveal className="mt-8 text-center sm:mt-10 lg:mt-[2.1rem]">
        <h2 className={`${titleClass} text-balance text-[clamp(0.95rem,4.1vw,1.6rem)] sm:text-[clamp(1.55rem,2.6vw,2.1rem)] lg:text-[3.24rem] lg:leading-[3.6rem]`}>
          {data.titleTop} <span className={accentClass}>{data.titleAccent}</span>
        </h2>
        <span aria-hidden="true" className="mx-auto mt-3 flex h-[0.2rem] w-40 lg:mt-[1.25rem] lg:h-[0.25rem] lg:w-[17.56rem]">
          <span className="w-[32%] rounded-l-full bg-[var(--color-navy)]" />
          <span className="w-[36%] bg-[var(--color-gold)]" />
          <span className="w-[32%] rounded-r-full bg-[var(--color-navy)]" />
        </span>
        <p className="mx-auto mt-4 max-w-[60rem] font-ui text-[0.95rem] leading-[1.7] text-[var(--color-text-dark)] sm:text-[1.05rem] lg:mt-[1.6rem] lg:max-w-none lg:text-[1.61rem] lg:leading-[2.4rem]">
          {data.descriptionLines.map((line) => (
            <span key={line} className="lg:block">
              {line}{" "}
            </span>
          ))}
        </p>
      </div>

      {/* recognitions */}
      <div data-reveal className="mt-10 flex items-center justify-center gap-3 sm:mt-12 sm:gap-4 lg:mt-[2.6rem] lg:gap-[2.6rem]">
        <span aria-hidden="true" className="h-[0.125rem] w-8 shrink-0 bg-[var(--color-line)] sm:w-16 lg:h-[0.1875rem] lg:w-[11.5rem]" />
        <h2 className={`whitespace-nowrap ${titleClass} text-[clamp(0.95rem,3.2vw,1.4rem)] sm:text-[clamp(1.35rem,2.2vw,1.85rem)] lg:text-[3.07rem]`}>
          {data.recognitionsTitleTop} <span className={accentClass}>{data.recognitionsTitleAccent}</span>
        </h2>
        <span aria-hidden="true" className="h-[0.125rem] w-8 shrink-0 bg-[var(--color-line)] sm:w-16 lg:h-[0.1875rem] lg:w-[11.5rem]" />
      </div>

      <ul className="mx-auto mt-6 grid max-w-[40rem] grid-cols-3 gap-3 sm:mt-8 sm:gap-5 lg:mt-[2.9rem] lg:flex lg:max-w-none lg:justify-center lg:gap-[2.5rem]">
        {data.recognitions.map((item, index) => {
          const cardWidth = cardWidths[index] ?? cardWidths[0];
          const size = { "--card-w": rem(cardWidth), "--logo-w": rem(item.width), "--logo-pct": `${(item.width / cardWidth) * 100}%` } as CSSProperties;
          return (
            <li
              key={item.id}
              data-reveal
              data-reveal-delay={index * 100}
              style={size}
              className="grid aspect-[395/238] place-items-center rounded-xl border border-[var(--color-line-soft)] bg-[var(--color-white)] p-2 shadow-[0_0.5rem_1.5rem_-0.75rem_var(--color-shadow-strong)] transition-transform duration-300 hover:-translate-y-1 lg:aspect-auto lg:h-[14.875rem] lg:w-[var(--card-w)] lg:rounded-[0.875rem] lg:p-0"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={item.width}
                height={item.height}
                quality={90}
                sizes={`(min-width: 1024px) ${item.width}px, 30vw`}
                className="h-auto max-h-full w-[var(--logo-pct)] object-contain lg:w-[var(--logo-w)]"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
