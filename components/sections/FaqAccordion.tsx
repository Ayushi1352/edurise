"use client";

import { useState } from "react";
import type { FaqItem } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

/** One answer open at a time (the first one to start with); the open question gets a gold line under its answer */
export const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [open, setOpen] = useState(items[0]?.id ?? "");

  return (
    <ul className="mt-6 lg:mt-[2.5rem]">
      {items.map((item, index) => {
        const isOpen = open === item.id;
        return (
          <li
            key={item.id}
            data-reveal
            data-reveal-delay={index * 80}
            className={`border-b-[0.125rem] transition-colors duration-300 lg:border-b-[0.25rem] ${isOpen ? "border-[var(--color-gold)]" : "border-[var(--color-line-soft)]"}`}
          >
            <h3>
              <button
                type="button"
                id={`faq-question-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                onClick={() => setOpen(isOpen ? "" : item.id)}
                className={`group flex w-full items-center justify-between gap-4 text-left font-ui text-[1.05rem] font-bold leading-snug text-[var(--color-navy)] transition-colors duration-300 hover:text-[var(--color-gold-dark)] sm:text-[1.2rem] lg:text-[1.74rem] lg:leading-[2.2rem] ${
                  index === 0 ? "pb-4 pt-1 lg:pb-[1rem] lg:pt-0" : "py-5 lg:py-[1.75rem]"
                }`}
              >
                {item.question}
                <span className="grid size-7 shrink-0 place-items-center lg:mr-0 lg:size-[2.5rem]">
                  {isOpen ? (
                    <Icon name="LuX" className="size-5 text-[var(--color-navy)] lg:size-[1.6rem]" strokeWidth={2.4} />
                  ) : (
                    <Icon name="LuPlus" className="size-6 text-[var(--color-gold)] transition-transform duration-300 group-hover:rotate-90 lg:size-[2.5rem]" strokeWidth={2.8} />
                  )}
                </span>
              </button>
            </h3>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="pb-6 pr-8 font-ui text-[0.95rem] font-medium leading-[1.6] text-[var(--color-text-muted)] sm:text-[1.05rem] lg:pb-[2.5rem] lg:pr-0 lg:text-[1.405rem] lg:leading-[2.25rem]">
                  {item.answerLines.map((line) => (
                    <span key={line} className="lg:block">
                      {line}{" "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
