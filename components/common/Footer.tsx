import Image from "next/image";
import type { CompanyData, FooterData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

const heading = "font-serif text-[1.6rem] font-bold leading-none text-[var(--color-white)] sm:text-[1.9rem] lg:text-[2.575rem]";

/*
  The dark library photo behind everything. Logo, text and links on the left; a thin line; contact details and
  social links on the right; the copyright line under a full-width rule (sizes from the 1920px design).
*/
export const Footer = async ({ data, company }: { data?: FooterData; company: CompanyData }) => {
  if (!data) return null;
  // the footer lists the company contact details in its own order
  const contactItems = data.contactIds.flatMap((id) => company.contactItems.filter((item) => item.id === id));
  const copyright = fill(data.copyrightText, { year: await currentYear() });

  return (
    <footer className="relative isolate overflow-hidden bg-[var(--color-footer-bg)] font-footer text-[var(--color-white)] lg:h-[51.25rem]">
      {/* clean high-resolution library photo */}
      <Image src={data.backgroundImage} alt="" fill quality={90} sizes="100vw" className="-z-20 object-cover object-center" />
      {/* deep, uniform navy overlay that matches the reference footer */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#00162f]/90" />

      <div className="px-5 pb-6 pt-12 sm:px-8 sm:pt-14 lg:flex lg:h-[42.94rem] lg:p-0">
        {/* logo, text and links */}
        <div className="lg:w-[50.31rem] lg:shrink-0 lg:pl-[7.88rem] lg:pt-[5.38rem]">
          <a href={data.logoUrl ?? "#home"} aria-label={company.logoAlt} className="inline-block">
            <Image src={company.logo} alt={company.logoAlt} width={company.logoWidth} height={company.logoHeight} quality={90} sizes="(min-width: 1024px) 512px, 272px" className="h-auto w-[14rem] sm:w-[17rem] lg:w-[32rem]" />
          </a>
          <p className="mt-5 max-w-[28rem] text-[1rem] leading-[1.55] text-[var(--color-white)] sm:text-[1.05rem] lg:mt-[0.6rem] lg:max-w-none lg:text-[1.69rem] lg:leading-[2.31rem]">
            {data.descriptionLines.map((line) => (
              <span key={line} className="lg:block">
                {line}{" "}
              </span>
            ))}
          </p>
          <nav aria-label={data.linksLabel} className="mt-7 lg:mt-[3.1rem]">
            <ul className="grid max-w-[24rem] grid-cols-2 gap-x-6 gap-y-3 lg:max-w-none lg:grid-cols-[21.31rem_auto] lg:gap-x-0 lg:gap-y-0">
              {data.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="inline-block text-[1rem] text-[var(--color-white)] transition-colors hover:text-[var(--color-gold)] sm:text-[1.05rem] lg:pl-[0.25rem] lg:text-[1.5rem] lg:leading-[3.33rem]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <span aria-hidden="true" className="hidden w-[0.125rem] shrink-0 bg-[var(--color-footer-divider)] lg:ml-[7.81rem] lg:mt-[6.5rem] lg:block lg:h-[33.63rem]" />

        {/* contact details and social links */}
        <div className="mt-10 border-t border-[var(--color-footer-divider)] pt-8 lg:ml-[10.94rem] lg:mt-0 lg:w-[42.31rem] lg:border-0 lg:pt-[6.9rem]">
          <h2 className={heading}>{data.contactsTitle}</h2>
          <ul className="mt-4 border-t border-[var(--color-footer-line)]/70 lg:mt-[1.6rem] lg:border-t-[0.125rem]">
            {contactItems.map((item) => {
              const external = item.url.startsWith("http");
              return (
                <li key={item.id} className="border-b border-[var(--color-footer-line)]/70 lg:border-b-[0.125rem]">
                  <a
                    href={item.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={`${item.label}: ${item.text}`}
                    className="group flex items-center gap-4 py-3.5 text-[0.98rem] text-[var(--color-white)] sm:text-[1.05rem] lg:h-[4.5rem] lg:gap-0 lg:py-0 lg:text-[1.65rem]"
                  >
                    <span className="grid w-8 shrink-0 place-items-center text-[var(--color-gold)] lg:w-[2.88rem]">
                      <Icon name={item.icon} className="size-6 transition-transform duration-300 group-hover:scale-110 lg:size-[2.4rem]" strokeWidth={2} />
                    </span>
                    <span className="min-w-0 break-words transition-colors group-hover:text-[var(--color-gold)] lg:ml-[2.75rem] lg:whitespace-nowrap">{item.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <h2 className={`mt-8 lg:mt-[3.4rem] ${heading} lg:!text-[2.39rem]`}>{data.socialTitle}</h2>
          <ul aria-label={data.socialLabel} className="mt-5 flex gap-4 lg:mt-[2.1rem] lg:gap-[2.19rem]">
            {data.socialLinks.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-12 place-items-center rounded-full border-[0.125rem] border-[var(--color-white)] text-[var(--color-white)] transition-colors duration-300 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] lg:size-[4.25rem]"
                >
                  <Icon name={social.icon} className="size-5 lg:size-[1.75rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-5 border-t border-[var(--color-footer-line)] py-5 sm:mx-8 lg:mx-[5.69rem] lg:border-t-[0.125rem] lg:py-0 lg:pt-[1.3rem]">
        <p className="text-center text-[0.9rem] text-[var(--color-white)] sm:text-right sm:text-[1rem] lg:text-[1.5rem]">{copyright}</p>
      </div>
    </footer>
  );
};
