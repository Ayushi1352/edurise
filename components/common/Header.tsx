import Image from "next/image";
import type { AnnouncementData, CompanyData, HeaderData } from "@/types/templates.types";

export function Header({
  announcement,
  company,
  data,
}: {
  announcement: AnnouncementData;
  company: CompanyData;
  data: HeaderData;
}) {
  return (
    <>
      <div className="announcement">
        {announcement.text} <a href={announcement.linkUrl}>{announcement.linkText}</a>
      </div>
      <header className="site-header" id="top">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label={`${company.name} ${data.homeLabel}`}>
            <Image
              src={company.logo}
              alt={company.logoAlt}
              width={500}
              height={160}
              priority
            />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {data.navLinks.map((link) => (
              <a href={link.url} key={link.id}>
                {link.label}
              </a>
            ))}
            <a className="nav-cta" href={data.contactButton.url}>
              {data.contactButton.label} <span aria-hidden="true">→</span>
            </a>
          </nav>
          <details className="mobile-nav">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation">
              {data.navLinks.map((link) => (
                <a href={link.url} key={link.id}>
                  {link.label}
                </a>
              ))}
              <a href={data.contactButton.url}>{data.contactButton.label}</a>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
