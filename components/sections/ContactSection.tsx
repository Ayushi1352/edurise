import type { CompanyData, ContactData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection({ data, company }: { data: ContactData; company: CompanyData }) {
  const { form } = data;
  const email = company.contactItems.find((item) => item.id === "email");

  if (!email) {
    throw new Error("EduRise contact configuration must include an email address.");
  }

  return (
    <section className="section contact-section" id={data.id}>
      <SectionHeading data={data} />
      <form className="contact-form" action={email.url} method="get">
        <label>
          <span aria-hidden="true">♙</span>
          <input
            aria-label={form.nameLabel}
            name="name"
            type="text"
            placeholder={form.nameLabel}
            required
          />
        </label>
        <label>
          <span aria-hidden="true">✉</span>
          <input
            aria-label={form.emailLabel}
            name="email"
            type="email"
            placeholder={form.emailLabel}
            required
          />
        </label>
        <label>
          <span aria-hidden="true">♧</span>
          <input
            aria-label={form.phoneLabel}
            name="phone"
            type="tel"
            placeholder={form.phoneLabel}
            required
          />
        </label>
        <label>
          <span aria-hidden="true">◇</span>
          <select aria-label={form.interestLabel} name="interest" defaultValue="" required>
            <option value="" disabled>{form.interestLabel}</option>
            {form.courseOptions.map((course) => (
              <option key={course}>{course}</option>
            ))}
          </select>
        </label>
        <label className="message-field">
          <span aria-hidden="true">◯</span>
          <textarea
            aria-label={form.messageLabel}
            name="message"
            placeholder={form.messageLabel}
            rows={3}
            required
          />
        </label>
        <button className="button button--gold submit-button" type="submit">
          {form.buttonLabel} <span aria-hidden="true">→</span>
        </button>
      </form>
    </section>
  );
}
