/**
 * Space between sections. On phones and tablets every section keeps the same empty space between its content and
 * the next section's content (two white sections each add half of it). From 1024px up each section takes the gap
 * the 1920px design has above it (1 design pixel = 0.0625rem), so the page lines up with the design.
 */
export const sectionSpace = "py-8 sm:py-10";

/** The sticky header's height, so a menu link scrolls its section to just below the header */
export const scrollMargin = "scroll-mt-[4.5rem] sm:scroll-mt-[5rem] lg:scroll-mt-[5.25rem]";

/** Side space of the content on phones and tablets (from 1024px up each section follows the design) */
export const sidePadding = "px-4 sm:px-6 md:px-8 lg:px-0";
