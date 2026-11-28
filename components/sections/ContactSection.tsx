import type { ContactData, ContactFormData } from "@/types/templates.types";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { scrollMargin, sectionSpace, sidePadding } from "@/components/ui/sectionSpace";

type Props = {
  data?: ContactData;
  form?: ContactFormData;
  /** choices of the form’s course list (built in app/page.tsx from the Courses section) */
  courseOptions: string[];
};

/** Centred heading, then the message form on a white card over soft blue curves (sizes from the 1920px design) */
export const ContactSection = ({ data, form, courseOptions }: Props) => {
  if (!data) return null;

  return (
    <section id={data.id} className={`relative overflow-hidden bg-[var(--color-bg-soft)] ${sectionSpace} ${scrollMargin} ${sidePadding}`}>
      {/* the design's soft curves behind the card */}
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-[45%] -left-[30%] h-[85%] w-[75%] rounded-[50%] bg-[var(--color-bg-contact)] lg:-bottom-[24rem] lg:-left-[38rem] lg:h-[46rem] lg:w-[82rem]" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-[35%] top-[30%] h-[80%] w-[55%] rounded-[50%] bg-[var(--color-bg-contact)] lg:-right-[16rem] lg:top-[19rem] lg:h-[46rem] lg:w-[30rem]" />

      <div className="relative">
        <SectionHeading
          label={data.label}
          icon={data.icon}
          titleTop={data.titleTop}
          titleAccent={data.titleAccent}
          description={data.descriptionLines}
          labelSizeClass="font-ui text-[1.1rem] font-extrabold lg:text-[2.2rem]"
          labelLineClass="h-[0.2rem] w-8 lg:h-[0.28rem] lg:w-[3.2rem]"
          labelIconClass="size-6 lg:size-[2.35rem]"
          labelGapClass="gap-2.5 lg:gap-[1.2rem]"
          titleClassName="!font-ui !tracking-[-0.01em] lg:mt-[0.6rem] lg:text-[4rem] lg:leading-[4.4rem]"
          descriptionClass="font-ui text-[0.9rem] text-[var(--color-text-soft)] sm:text-[0.95rem] lg:mt-[0.6rem] lg:text-[1.6rem] lg:leading-[2.2rem]"
        />

        <div
          data-reveal
          className="mx-auto mt-6 max-w-[44rem] rounded-2xl bg-[var(--color-white)] px-4 pb-5 pt-4 shadow-[0_1.2rem_2.5rem_-1.2rem_var(--color-shadow-strong)] sm:mt-8 sm:px-6 sm:pb-6 sm:pt-6 lg:mt-[2.5rem] lg:w-[80rem] lg:max-w-none lg:rounded-[1.5rem] lg:px-[2.5rem] lg:pb-[2rem] lg:pt-[2.25rem]"
        >
          <ContactForm data={form} courseOptions={courseOptions} />
        </div>
      </div>
    </section>
  );
};
