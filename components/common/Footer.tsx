import Image from "next/image";
import type { CompanyData, FooterData } from "@/types/templates.types";

export function Footer({ company, data }: { company: CompanyData; data: FooterData }) {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-shell">
        <div className="footer-about">
          <a className="brand brand--footer" href="#top" aria-label={`${company.name} home`}>
            <Image src={company.logo} alt={company.logoAlt} width={500} height={160} />
          </a>
          <p>{data.description}</p>
          <nav className="footer-links" aria-label="Footer navigation">
            {data.links.map((link) => (
              <a href={link.url} key={link.id}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-contact">
          <h2>Contact Info</h2>
          {company.contactItems.map((item) => {
            const content = (
              <>
                <span aria-hidden="true">{item.icon}</span>
                {item.text}
              </>
            );

            return item.url ? (
              <a href={item.url} key={item.id}>
                {content}
              </a>
            ) : (
              <p key={item.id}>{content}</p>
            );
          })}
          <h3>Follow Us:</h3>
          <div className="footer-socials">
            {data.socialLinks.map((social) => (
              <a href={social.url} aria-label={social.label} key={social.id}>
                {social.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="copyright">{data.copyrightText}</p>
    </footer>
  );
}
