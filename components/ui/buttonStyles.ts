/** Gold button with navy text (header, hero, form): turns white with gold border and navy text on hover, remaining distinct and high-contrast on dark blue backgrounds */
export const buttonClass =
  "group relative isolate inline-flex items-center justify-center overflow-hidden border-2 border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-navy)] shadow-[0_0.5rem_1.25rem_-0.75rem_var(--color-shadow-gold)] transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:bg-[var(--color-white)] before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:text-[var(--color-navy)] hover:before:opacity-100 hover:shadow-[0_0.75rem_1.5rem_-0.5rem_rgba(0,0,0,0.25)]";

/** White outlined button on the hero's navy: fills gold with navy text on hover */
export const outlineButtonClass =
  "group inline-flex items-center justify-center border-2 border-[var(--color-white)] text-[var(--color-white)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] hover:shadow-[0_0.75rem_1.5rem_-0.5rem_var(--color-shadow-gold)]";
/** arrow inside a button that turns up-right on hover */
export const buttonArrow = "shrink-0 transition-transform duration-300 group-hover:-rotate-45";
/** round navy slider arrows with a white ring (Our Faculty) */
export const roundNavyClass =
  "grid place-items-center rounded-full border-[0.25rem] border-[var(--color-white)] bg-[var(--color-navy)] text-[var(--color-white)] shadow-[0_0.4rem_1rem_-0.3rem_var(--color-shadow-strong)] transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)]";
