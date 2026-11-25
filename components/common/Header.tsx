"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CompanyData, HeaderData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { buttonArrow, buttonClass } from "@/components/ui/buttonStyles";
import { sectionId, useActiveSection } from "@/components/ui/useActiveSection";

/** Desktop link with the gold underline of the current section */
const linkClass = (current: boolean) =>
  `relative whitespace-nowrap py-[0.4rem] font-sans text-[1.4rem] font-medium leading-none transition-colors after:absolute after:inset-x-0 after:-bottom-[0.35rem] after:h-[0.1875rem] after:rounded-full after:bg-[var(--color-gold)] after:transition-transform after:duration-300 ${
    current ? "text-[var(--color-gold)] after:scale-x-100" : "text-[var(--color-white)] after:scale-x-0 hover:text-[var(--color-gold)]"
  }`;

/*
  The thin white announcement line scrolls away with the page; the navy bar under it stays on top (sticky).
  From 1024px up the sizes come from the 1920px design (1 design pixel = 0.0625rem).
*/
export const Header = ({ data, company }: { data?: HeaderData; company: CompanyData }) => {
  const [ids] = useState(() => {
    const list = data?.navLinks.map((link) => sectionId(link.url)) ?? [];
    if (data?.buttonUrl?.startsWith("#")) {
      const btnId = sectionId(data.buttonUrl);
      if (!list.includes(btnId)) list.push(btnId);
    }
    return list;
  });
  const { active, scrolled } = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!data) return null;
  const { announcement } = data;

  /** The logo scrolls back to the top and drops any "#section" from the address bar, without reloading the page */
  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    window.scrollTo({ top: 0 });
    if (window.location.hash) history.pushState(null, "", window.location.pathname + window.location.search);
  };

  // at the top of the page the bar is the design's height; once the page scrolls it gets compact with a shadow
  const compact = scrolled || open;

  return (
    <>
      <p className="flex min-h-[2.5rem] items-center justify-center gap-2 bg-[var(--color-white)] px-4 py-2 text-center font-sans text-[0.8rem] font-medium leading-snug text-[var(--color-text-dark)] sm:text-[0.9rem] lg:h-[3.375rem] lg:gap-[0.75rem] lg:p-0 lg:text-[1.375rem]">
        <Icon name={announcement.icon} className="size-[1.1rem] shrink-0 text-[var(--color-navy)] max-sm:hidden lg:size-[2.25rem]" />
        <span>
          {announcement.text}{" "}
          <a href={announcement.linkUrl} className="text-[var(--color-link)] underline underline-offset-2 transition-colors hover:text-[var(--color-navy)]">
            {announcement.linkText}
          </a>
          .
        </span>
      </p>

      <header
        className={`sticky top-0 z-40 bg-[var(--color-navy-header)] transition-shadow duration-300 ${
          compact ? "shadow-[0_0.5rem_1.75rem_-1rem_var(--color-shadow-strong)]" : ""
        }`}
      >
        <div
          className={`flex items-center gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:gap-0 lg:pl-[5.375rem] lg:pr-[2.5rem] ${
            compact ? "h-[4.5rem] sm:h-[5rem] lg:h-[5.25rem]" : "h-[4.5rem] sm:h-[5rem] lg:h-[6.625rem]"
          }`}
        >
          <Link href={data.logoUrl} onClick={goHome} aria-label={data.homeLabel} className="shrink-0">
            <Image
              src={company.logo}
              alt={company.logoAlt}
              width={company.logoWidth}
              height={company.logoHeight}
              preload
              quality={90}
              sizes="(min-width: 1024px) 360px, 176px"
              className={`h-auto transition-[width] duration-300 ${compact ? "w-[9.5rem] sm:w-[11rem] lg:w-[16rem]" : "w-[9.5rem] sm:w-[11rem] lg:w-[22.5rem]"}`}
            />
          </Link>

          <nav aria-label={data.mainNavLabel} className="ml-auto hidden items-center gap-[2.94rem] lg:flex">
            {data.navLinks.map((link) => {
              const current = sectionId(link.url) === active;
              return (
                <a key={link.id} href={link.url} aria-current={current ? "location" : undefined} className={linkClass(current)}>
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3 lg:ml-[2.94rem]">
            <a
              href={data.buttonUrl}
              className={`${buttonClass} h-11 gap-2 rounded-full px-5 font-sans text-[0.95rem] font-bold max-sm:hidden lg:h-[3.69rem] lg:w-[13.19rem] lg:gap-[1rem] lg:px-0 lg:text-[1.5rem]`}
            >
              {data.buttonText}
              <Icon name="LuArrowRight" className={`${buttonArrow} size-[1.15em]`} strokeWidth={2.2} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? data.closeMenuLabel : data.openMenuLabel}
              className="grid size-11 place-items-center rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] lg:hidden"
            >
              <Icon name={open ? "LuX" : "LuMenu"} className="size-6" />
            </button>
          </div>
        </div>

        {/* phones and tablets: a card under the bar, only as tall as its links */}
        <nav
          id="mobile-menu"
          aria-label={data.mobileNavLabel}
          className={`absolute inset-x-4 top-full mt-2 grid max-h-[calc(100dvh-5.5rem)] overflow-hidden rounded-2xl bg-[var(--color-white)] shadow-[0_1.25rem_3.125rem_-1.25rem_var(--color-shadow-menu)] transition-[grid-template-rows,opacity] duration-500 sm:inset-x-6 lg:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none invisible grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-y-auto">
            <ul className="flex flex-col px-5 py-4 sm:px-6">
              {data.navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-[var(--color-line-soft)] py-3.5 font-sans text-lg font-semibold transition-colors hover:text-[var(--color-gold-dark)] ${
                      sectionId(link.url) === active ? "text-[var(--color-gold-dark)]" : "text-[var(--color-navy)]"
                    }`}
                  >
                    {link.label}
                    <Icon name="LuChevronRight" className="size-4 text-[var(--color-gold-dark)]" strokeWidth={2.2} />
                  </a>
                </li>
              ))}
              <li className="pt-5 sm:hidden">
                <a href={data.buttonUrl} onClick={() => setOpen(false)} className={`${buttonClass} h-12 w-full gap-2 rounded-full font-sans text-base font-bold`}>
                  {data.buttonText}
                  <Icon name="LuArrowRight" className={`${buttonArrow} size-[1.15em]`} strokeWidth={2.2} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
