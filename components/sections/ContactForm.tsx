"use client";

import { useState } from "react";
import type { ContactFormData } from "@/types/templates.types";
import { useDummySubmit } from "@/components/ui/useDummySubmit";
import { Icon } from "@/components/ui/Icon";
import { FormSuccess, Spinner } from "@/components/ui/FormSuccess";
import { buttonArrow, buttonClass } from "@/components/ui/buttonStyles";

/** White fields with a light grey border and a navy outline icon in front */
const base =
  "w-full appearance-none rounded-[0.6rem] border-[0.125rem] border-[var(--color-field-border)] bg-[var(--color-white)] pl-12 pr-4 font-ui text-[1rem] text-[var(--color-text-dark)] outline-none transition-colors placeholder:font-medium placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-gold)] sm:text-[1.05rem] lg:rounded-[0.63rem] lg:pl-[6rem] lg:pr-[1.5rem] lg:text-[1.5rem]";
const field = `${base} h-14 lg:h-[4.5rem]`;
/** the design's icon in front of each field */
const icons = {
  name: "LuUserRound",
  email: "LuMail",
  phone: "LuPhone",
  course: "LuGraduationCap",
  message: "LuMessageCircle",
};
const iconClass = "pointer-events-none absolute left-4 size-6 text-[var(--color-navy)] lg:left-[2rem] lg:size-[2.19rem]";

const Field = ({ name, type = "text", label, icon, autoComplete }: { name: string; type?: string; label: string; icon: string; autoComplete?: string }) => (
  <label className="relative flex items-center">
    <Icon name={icon} className={iconClass} strokeWidth={1.6} />
    <input name={name} type={type} required placeholder={label} aria-label={label} autoComplete={autoComplete} className={field} />
  </label>
);

const SelectField = ({ name, placeholder, icon, options }: { name: string; placeholder: string; icon: string; options: string[] }) => {
  const [value, setValue] = useState("");

  return (
    <label className="relative flex items-center">
      <Icon name={icon} className={iconClass} strokeWidth={1.6} />
      <select
        name={name}
        value={value}
        required
        onChange={(event) => setValue(event.target.value)}
        aria-label={placeholder}
        className={`${field} cursor-pointer pr-12 lg:pr-[4.5rem] ${value === "" ? "text-[var(--color-text-muted)]" : ""}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[var(--color-text-dark)]">
            {option}
          </option>
        ))}
      </select>
      <Icon name="LuChevronDown" className="pointer-events-none absolute right-4 size-6 text-[var(--color-navy)] lg:right-[1.9rem] lg:size-[1.9rem]" strokeWidth={2.2} />
    </label>
  );
};

/** The "Get in Touch" form; dummy submit with a thank-you message in place of the button */
export const ContactForm = ({ data, courseOptions }: { data?: ContactFormData; courseOptions: string[] }) => {
  const submit = useDummySubmit();
  if (!data) return null;
  const { fields } = data;

  // remounting the form (via key) after each send clears every field, including the select
  return (
    <form
      key={submit.round}
      onSubmit={submit.onSubmit}
      onInput={submit.onInput}
      aria-busy={submit.sending}
      className="grid gap-x-[2.31rem] gap-y-4 sm:grid-cols-2 sm:gap-y-5 lg:gap-y-[1.94rem]"
    >
      <Field name="name" label={fields.name} icon={icons.name} autoComplete="name" />
      <Field name="email" type="email" label={fields.email} icon={icons.email} autoComplete="email" />
      <Field name="phone" type="tel" label={fields.phone} icon={icons.phone} autoComplete="tel" />
      <SelectField name="course" placeholder={fields.course} icon={icons.course} options={courseOptions} />
      <label className="relative block sm:col-span-2">
        <Icon name={icons.message} className={`${iconClass} top-4 lg:top-[1.2rem]`} strokeWidth={1.6} />
        <textarea
          name="message"
          required
          rows={4}
          placeholder={fields.message}
          aria-label={fields.message}
          className={`${base} h-32 resize-y pt-4 lg:h-[8.44rem] lg:min-h-[8.44rem] lg:pt-[1.3rem]`}
        />
      </label>
      <div className="flex justify-center sm:col-span-2 lg:mt-[-0.06rem]">
        {submit.showMessage ? (
          <FormSuccess
            name={submit.name}
            title={data.successTitle}
            message={data.success}
            leaving={submit.status === "leaving"}
            visibleFor={submit.visibleFor}
            onClose={submit.dismiss}
            closeLabel={data.closeLabel}
            className="w-full max-w-[40rem]"
          />
        ) : (
          <button
            type="submit"
            disabled={submit.sending}
            className={`${buttonClass} h-14 w-full max-w-[18rem] gap-3 rounded-full font-ui text-[1.15rem] font-bold disabled:cursor-wait disabled:opacity-80 lg:h-[4.44rem] lg:w-[23rem] lg:max-w-none lg:gap-[1.1rem] lg:text-[1.81rem]`}
          >
            {submit.sending ? (
              <>
                <Spinner className="size-6" />
                {data.sending}
              </>
            ) : (
              <>
                {data.button}
                <Icon name="LuArrowRight" className={`${buttonArrow} size-[1.15em]`} strokeWidth={2.2} />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
};
