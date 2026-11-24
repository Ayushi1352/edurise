import type { HeroData } from "@/types/templates.types";

export function HeroSection({ data }: { data: HeroData }) {
  return (
    <section className="hero" id={data.id} aria-label={`${data.titleTop} ${data.titleAccent} ${data.titleBottom}`}>
      <div
        className="hero-image"
        role="img"
        aria-label={data.imageAlt}
        style={{ backgroundImage: `url("${data.image}")` }}
      />
      <div className="hero-shade" />
      <div className="social-rail" aria-label="Follow us">
        {data.socialLinks.map((social) => (
          <a href="#footer" aria-label={social.label} key={social.id}>
            {social.text}
          </a>
        ))}
      </div>
      <div className="hero-content">
        <p className="hero-kicker">{data.kicker}</p>
        <h1>
          {data.titleTop} <span>{data.titleAccent}</span>
          <br />
          {data.titleBottom}
        </h1>
        <div className="gold-rule" />
        <p className="hero-copy">{data.description}</p>
        <div className="hero-actions">
          <a className="button button--gold" href={data.primaryButton.url}>
            {data.primaryButton.label} <span aria-hidden="true">→</span>
          </a>
          <a className="button button--outline" href={data.secondaryButton.url}>
            {data.secondaryButton.label} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
