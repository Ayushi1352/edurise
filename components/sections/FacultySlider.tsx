"use client";

import Image from "next/image";
import { useState } from "react";
import type { FacultyData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { roundNavyClass } from "@/components/ui/buttonStyles";

/** the card at this place in the row is shown on phones (1), tablets (2) or desktops (4) */
const visibleAt = ["", "max-sm:hidden", "max-lg:hidden", "max-lg:hidden"];

/**
 * Faculty cards: one on phones, two on tablets, four on desktop. The arrows move the row on by one card and it
 * wraps around, so every member can be the first one.
 */
export const FacultySlider = ({ data }: { data: FacultyData }) => {
  const { items } = data;
  const count = items.length;
  const [index, setIndex] = useState(0);
  const go = (step: number) => setIndex((current) => (current + step + count) % count);

  // the cards in their current order, starting from the selected one
  const ordered = items.map((_, place) => items[(index + place) % count]);

  return (
    <div className="relative lg:mt-[3.2rem]">
      <ul className="mx-auto mt-8 grid max-w-[22rem] gap-5 sm:mt-10 sm:max-w-[44rem] sm:grid-cols-2 lg:mt-0 lg:w-[108.75rem] lg:max-w-none lg:grid-cols-4 lg:gap-[1.75rem]" aria-live="polite">
        {ordered.slice(0, 4).map((person, place) => (
          <li
            key={`${person.id}-${index}`}
            className={`group relative aspect-[414/580] overflow-hidden rounded-[1.1rem] bg-[var(--color-line-soft)] shadow-[0_0.8rem_1.5rem_-0.9rem_var(--color-shadow-strong)] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-x-6 starting:opacity-0 lg:rounded-[1.375rem] ${visibleAt[place] ?? "max-lg:hidden"}`}
          >
            <Image src={person.image} alt={person.imageAlt} fill quality={90} sizes="(min-width: 1024px) 414px, (min-width: 640px) 22rem, 92vw" className="object-cover object-top" />

            {/* white panel with an arched top and a gold bottom edge (it sits over the bottom of the portrait) */}
            <div className="absolute inset-x-[2.9%] bottom-0 h-[37.5%] rounded-t-[50%_15%] border-b-[0.35rem] border-[var(--color-gold)] bg-[var(--color-white)] text-center shadow-[0_-0.5rem_1.5rem_-1rem_var(--color-shadow-strong)] lg:border-b-[0.5rem]">
              <span className="absolute left-1/2 top-0 grid size-[3.25rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[0.125rem] border-[var(--color-navy)] bg-[var(--color-white)] text-[var(--color-navy)] lg:size-[4.13rem]">
                <Icon name="FaGraduationCap" className="size-6 lg:size-[2.2rem]" />
              </span>
              <h3 className="mt-[13%] font-heading text-[1.3rem] font-bold leading-tight text-[var(--color-navy)] lg:mt-[2.6rem] lg:text-[1.8rem] lg:leading-[2.2rem]">{person.name}</h3>
              <p className="mt-0.5 font-heading text-[0.95rem] font-medium text-[var(--color-text)] lg:mt-[0.2rem] lg:text-[1.26rem] lg:leading-[1.9rem]">{person.role}</p>
              <span aria-hidden="true" className="mx-auto mt-2 block h-[0.2rem] w-16 rounded-full bg-[var(--color-gold)] lg:mt-[0.5rem] lg:h-[0.25rem] lg:w-[5.63rem]" />
              <p className="mt-2 font-heading text-[0.9rem] font-medium leading-snug text-[var(--color-text)] lg:mt-[0.55rem] lg:text-[1.31rem] lg:leading-[1.75rem]">
                {person.focusLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-5 lg:mt-0">
        <button type="button" aria-label={data.previousLabel} onClick={() => go(-1)} className={`${roundNavyClass} size-12 lg:absolute lg:left-[3.13rem] lg:top-[17.69rem] lg:size-[4.25rem]`}>
          <Icon name="LuChevronLeft" className="size-6 lg:size-[2rem]" strokeWidth={3} />
        </button>
        <button type="button" aria-label={data.nextLabel} onClick={() => go(1)} className={`${roundNavyClass} size-12 lg:absolute lg:right-[3.13rem] lg:top-[17.69rem] lg:size-[4.25rem]`}>
          <Icon name="LuChevronRight" className="size-6 lg:size-[2rem]" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};
