import { Icon } from "@/components/ui/Icon";

/*
  Sizes from 1024px up are taken from the 1920px design: 1 design pixel = 0.0625rem
  (the root font is 100vw / 120 there, at most 16px, so a 1920px screen shows the design 1:1).
*/

/** Bold title in navy */
export const titleClass = "font-heading font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--color-navy)]";
/** the gold words of a title */
export const accentClass = "text-[var(--color-gold-text)]";

type LabelProps = {
  text: string;
  /** icon between the first line and the text (a name from components/ui/Icon.tsx) */
  icon?: string;
  /** a short gold line on both sides (centred headings) or only before the text (left headings) */
  lines?: "both" | "before";
  /** label font, size and weight */
  sizeClass?: string;
  /** length and thickness of the lines */
  lineClass?: string;
  /** size of the icon */
  iconClass?: string;
  /** space between the lines, the icon and the text */
  gapClass?: string;
  className?: string;
};

/** Navy label with gold lines: "—— 🎓 Our Courses ——" */
export const SectionLabel = ({
  text,
  icon,
  lines = "both",
  sizeClass = "font-heading text-[1.25rem] font-bold lg:text-[2.25rem]",
  lineClass = "w-10 h-[0.1875rem] lg:w-[6.375rem] lg:h-[0.1875rem]",
  iconClass = "size-7 lg:size-[3.5rem]",
  gapClass = "gap-3 lg:gap-[1.5rem]",
  className = "",
}: LabelProps) => {
  const line = <span aria-hidden="true" className={`shrink-0 rounded-full bg-[var(--color-gold)] ${lineClass}`} />;
  return (
    <p className={`flex items-center leading-none text-[var(--color-navy)] ${gapClass} ${sizeClass} ${className}`}>
      {line}
      {icon && <Icon name={icon} className={`shrink-0 ${iconClass}`} />}
      <span>{text}</span>
      {lines === "both" && line}
    </p>
  );
};

type HeadingProps = {
  label: string;
  icon?: string;
  titleTop: string;
  titleAccent: string;
  /** one paragraph, or one entry per line of the design */
  description?: string | string[];
  labelSizeClass?: string;
  labelLineClass?: string;
  labelIconClass?: string;
  labelGapClass?: string;
  /** title font size and the space above it */
  titleClassName?: string;
  descriptionClass?: string;
  className?: string;
};

/** Centred section intro: label between two lines, title, one or two lines of text */
export const SectionHeading = ({
  label,
  icon,
  titleTop,
  titleAccent,
  description,
  labelSizeClass,
  labelLineClass,
  labelIconClass,
  labelGapClass,
  titleClassName = "",
  descriptionClass = "",
  className = "",
}: HeadingProps) => (
  <div data-reveal className={`flex flex-col items-center text-center ${className}`}>
    <SectionLabel text={label} icon={icon} sizeClass={labelSizeClass} lineClass={labelLineClass} iconClass={labelIconClass} gapClass={labelGapClass} />
    {/* one line wherever it fits; a long title wraps into two even lines instead of one word on its own */}
    <h2 className={`mt-3 text-balance text-[clamp(1.05rem,4.6vw,1.55rem)] sm:text-[clamp(1.5rem,2.5vw,2.1rem)] lg:whitespace-nowrap ${titleClass} ${titleClassName}`}>
      {titleTop} <span className={accentClass}>{titleAccent}</span>
    </h2>
    {description && (
      <p className={`mx-auto mt-3 max-w-[46rem] text-[0.95rem] font-medium leading-relaxed text-[var(--color-text-muted)] sm:text-base lg:max-w-none ${descriptionClass}`}>
        {typeof description === "string"
          ? description
          : description.map((line) => (
              <span key={line} className="sm:block">
                {line}{" "}
              </span>
            ))}
      </p>
    )}
  </div>
);
