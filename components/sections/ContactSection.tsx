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
          labelSizeClass="font-ui text-[1.2rem] font-extrabold lg:text-[2.6rem]"
          labelLineClass="h-[0.22rem] w-9 lg:h-[0.31rem] lg:w-[3.63rem]"
          labelIconClass="size-7 lg:size-[2.75rem]"
          labelGapClass="gap-3 lg:gap-[1.4rem]"
          titleClassName="!font-ui !tracking-[-0.01em] lg:mt-[0.75rem] lg:text-[4.84rem] lg:leading-[5.25rem]"
          descriptionClass="font-ui text-[var(--color-text-soft)] lg:mt-[0.7rem] lg:text-[1.89rem] lg:leading-[2.56rem]"
        />

        <div
          data-reveal
          className="mx-auto mt-8 max-w-[48rem] rounded-2xl bg-[var(--color-white)] px-4 pb-6 pt-5 shadow-[0_1.2rem_2.5rem_-1.2rem_var(--color-shadow-strong)] sm:mt-10 sm:px-7 sm:pb-8 sm:pt-7 lg:mt-[3.1rem] lg:w-[91.31rem] lg:max-w-none lg:rounded-[1.75rem] lg:px-[2.88rem] lg:pb-[1.75rem] lg:pt-[2.63rem]"
        >
          <ContactForm data={form} courseOptions={courseOptions} />
        </div>
      </div>
    </section>
  );
};
