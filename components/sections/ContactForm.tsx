"use client";

import { useState } from "react";
import type { ContactFormData, FormField } from "@/types/templates.types";
import { useDummySubmit } from "@/components/ui/useDummySubmit";
import { Icon } from "@/components/ui/Icon";
import { FormSuccess, Spinner } from "@/components/ui/FormSuccess";
import { buttonArrow, buttonClass } from "@/components/ui/buttonStyles";

/** White fields with a light grey border and the design's navy outline icon in front (icon names come from templates.json) */
const base =
  "w-full appearance-none rounded-[0.6rem] border-[0.125rem] border-[var(--color-field-border)] bg-[var(--color-white)] pl-11 pr-4 font-ui text-[0.95rem] text-[var(--color-text-dark)] outline-none transition-colors placeholder:font-medium placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-gold)] sm:text-[1rem] lg:rounded-[0.63rem] lg:pl-[5rem] lg:pr-[1.5rem] lg:text-[1.3rem]";
const field = `${base} h-12 lg:h-[3.75rem]`;
const iconClass = "pointer-events-none absolute left-3.5 size-5 text-[var(--color-navy)] lg:left-[1.75rem] lg:size-[1.8rem]";

const Field = ({ name, type = "text", field: data, autoComplete }: { name: string; type?: string; field: FormField; autoComplete?: string }) => (
  <label className="relative flex items-center">
    <Icon name={data.icon} className={iconClass} strokeWidth={1.6} />
    <input name={name} type={type} required placeholder={data.placeholder} aria-label={data.placeholder} autoComplete={autoComplete} className={field} />
  </label>
);

const SelectField = ({ name, field: data, options }: { name: string; field: FormField; options: string[] }) => {
  const [value, setValue] = useState("");

  return (
    <label className="relative flex items-center">
      <Icon name={data.icon} className={iconClass} strokeWidth={1.6} />
      <select
        name={name}
        value={value}
        required
        onChange={(event) => setValue(event.target.value)}
        aria-label={data.placeholder}
        className={`${field} cursor-pointer pr-11 lg:pr-[4rem] ${value === "" ? "text-[var(--color-text-muted)]" : ""}`}
      >
        <option value="" disabled>
          {data.placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[var(--color-text-dark)]">
            {option}
          </option>
        ))}
      </select>
      <Icon name="LuChevronDown" className="pointer-events-none absolute right-3.5 size-5 text-[var(--color-navy)] lg:right-[1.6rem] lg:size-[1.6rem]" strokeWidth={2.2} />
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
      className="grid gap-x-5 gap-y-3 sm:grid-cols-2 sm:gap-y-4 lg:gap-x-[1.9rem] lg:gap-y-[1.5rem]"
    >
      <Field name="name" field={fields.name} autoComplete="name" />
      <Field name="email" type="email" field={fields.email} autoComplete="email" />
      <Field name="phone" type="tel" field={fields.phone} autoComplete="tel" />
      <SelectField name="course" field={fields.course} options={courseOptions} />
      <label className="relative block sm:col-span-2">
        <Icon name={fields.message.icon} className={`${iconClass} top-3.5 lg:top-[1.1rem]`} strokeWidth={1.6} />
        <textarea
          name="message"
          required
          rows={3}
          placeholder={fields.message.placeholder}
          aria-label={fields.message.placeholder}
          className={`${base} h-28 resize-y pt-3 lg:h-[7rem] lg:min-h-[7rem] lg:pt-[1.1rem]`}
        />
      </label>
      <div className="mt-1 flex justify-center sm:col-span-2 lg:mt-0">
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
            className={`${buttonClass} h-12 w-full max-w-[15rem] gap-2.5 rounded-full font-ui text-[1.05rem] font-bold disabled:cursor-wait disabled:opacity-80 lg:h-[3.75rem] lg:w-[19rem] lg:max-w-none lg:gap-[1rem] lg:text-[1.5rem]`}
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
