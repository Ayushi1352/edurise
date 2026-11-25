import { getImageProps } from "next/image";
import type { HeroData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { buttonArrow, buttonClass, outlineButtonClass } from "@/components/ui/buttonStyles";
import { scrollMargin } from "@/components/ui/sectionSpace";

/** Plays once on load (CSS @starting-style), so the hero never waits for JavaScript */
const enter = "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-6 starting:opacity-0";

const button =
  "h-[3.25rem] gap-3 rounded-[0.375rem] px-6 font-heading text-[1rem] font-bold sm:h-14 sm:px-8 sm:text-[1.1rem] lg:h-[4.81rem] lg:gap-[1.1rem] lg:px-0 lg:text-[1.625rem]";

/*
  From 1024px up the hero is the design's 745px tall picture: the student on the right and the navy shade on the
  left with the title, the gold line, two lines of text and the two buttons (1 design pixel = 0.0625rem).
  Phones and tablets show the text on navy first and the photo of the student under it.
  One <picture> serves both: each screen downloads only its own photo.
*/
export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  const common = { alt: data.imageAlt, sizes: "100vw", quality: 90 };
  const {
    props: { srcSet: desktopSet },
  } = getImageProps({ ...common, src: data.image, width: data.imageWidth, height: data.imageHeight });
  const {
    props: { srcSet: mobileSet, ...imageProps },
  } = getImageProps({ ...common, src: data.mobileImage, width: data.mobileImageWidth, height: data.mobileImageHeight, loading: "eager", fetchPriority: "high" });

  return (
    <section id={data.id} className={`relative flex flex-col bg-[var(--color-navy-deep)] lg:block lg:h-[46.56rem] ${scrollMargin}`}>
      {/* the side rail of social links */}
      <ul aria-label={data.socialLabel} className="absolute left-0 top-[9.81rem] z-20 hidden lg:block">
        {data.socialLinks.map((social) => (
          <li key={social.id}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{ background: social.background }}
              className="grid h-[3.56rem] w-[3.56rem] place-items-center text-[var(--color-white)] transition-[width] duration-300 hover:w-[4.5rem]"
            >
              <Icon name={social.icon} className="size-[1.65rem]" />
            </a>
          </li>
        ))}
      </ul>

      <div className={`relative z-10 px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-16 lg:px-0 lg:pb-0 lg:pl-[7.06rem] lg:pt-[11.46rem] ${enter}`}>
        <h1 className="font-display text-[length:min(2.6rem,calc((100vw-2.5rem)/10))] font-extrabold leading-[1.15] tracking-[-0.005em] text-[var(--color-white)] sm:text-[3.4rem] lg:text-[4.19rem] lg:leading-[4.88rem]">
          {data.titleTop} <span className="text-[var(--color-gold)]">{data.titleAccent}</span>
          <span className="block">{data.titleBottom}</span>
        </h1>
        <span aria-hidden="true" className="mt-5 block h-[0.3rem] w-24 rounded-full bg-[var(--color-gold)] lg:mt-[1.13rem] lg:h-[0.44rem] lg:w-[9.5rem]" />
        <p className="mt-5 max-w-[36rem] font-sans text-[1rem] leading-[1.6] text-[var(--color-white)] sm:text-[1.1rem] lg:mt-[1.69rem] lg:max-w-none lg:text-[1.485rem] lg:leading-[2.25rem]">
          {data.descriptionLines.map((line) => (
            <span key={line} className="lg:block">
              {line}{" "}
            </span>
          ))}
        </p>
        <div className="mt-7 flex flex-wrap gap-3 sm:gap-4 lg:mt-[2rem] lg:gap-[2.25rem]">
          <a href={data.primaryButton.url} className={`${buttonClass} ${button} lg:w-[18.81rem]`}>
            {data.primaryButton.label}
            <Icon name="LuArrowRight" className={`${buttonArrow} size-[1.15em]`} strokeWidth={2.2} />
          </a>
          <a href={data.secondaryButton.url} className={`${outlineButtonClass} ${button} lg:w-[18.94rem]`}>
            {data.secondaryButton.label}
            <Icon name="LuArrowRight" className={`${buttonArrow} size-[1.15em]`} strokeWidth={2.2} />
          </a>
        </div>
      </div>

      {/* phones and tablets: the student under the text, fading in from the navy; from 1024px up the whole hero's
          background (the navy shade on its left is part of the desktop photo) */}
      <div className="relative aspect-[1024/921] max-h-[36rem] w-full overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto lg:max-h-none">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopSet} />
          <img {...imageProps} srcSet={mobileSet} alt={data.imageAlt} className="absolute inset-0 h-full w-full object-cover object-top lg:object-right" />
        </picture>
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[var(--color-navy-deep)] to-transparent lg:hidden" />
      </div>
    </section>
  );
};
