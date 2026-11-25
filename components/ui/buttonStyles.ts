/** Gold button with navy text (header, hero, form): turns navy with white text on hover (a fading layer, so the colour changes smoothly) */
export const buttonClass =
  "group relative isolate inline-flex items-center justify-center overflow-hidden bg-[var(--color-gold)] text-[var(--color-navy)] shadow-[0_0.5rem_1.25rem_-0.75rem_var(--color-shadow-gold)] transition-[transform,color] duration-300 before:absolute before:inset-0 before:-z-10 before:bg-[var(--color-navy)] before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-0.5 hover:text-[var(--color-white)] hover:before:opacity-100";
/** White outlined button on the hero's navy: fills white with navy text on hover */
export const outlineButtonClass =
  "group inline-flex items-center justify-center border-2 border-[var(--color-white)] text-[var(--color-white)] transition-[transform,background-color,color] duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-white)] hover:text-[var(--color-navy)]";
/** arrow inside a button that turns up-right on hover */
export const buttonArrow = "shrink-0 transition-transform duration-300 group-hover:-rotate-45";
/** round navy slider arrows with a white ring (Our Faculty) */
export const roundNavyClass =
  "grid place-items-center rounded-full border-[0.25rem] border-[var(--color-white)] bg-[var(--color-navy)] text-[var(--color-white)] shadow-[0_0.4rem_1rem_-0.3rem_var(--color-shadow-strong)] transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)]";
