import Link from "next/link";
import rawData from "@/data/templates.json";
import type { EduRiseTemplateData } from "@/types/templates.types";
import { buttonClass } from "@/components/ui/buttonStyles";

const templateData: EduRiseTemplateData = rawData;
const notFound = templateData.common.metadata.notFound;

/** The 404 page between the header and the footer; every text comes from templates.json */
export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
      <h1 className="font-heading text-7xl font-extrabold text-[var(--color-navy)] sm:text-9xl">{notFound.title}</h1>
      <h2 className="mt-4 font-heading text-2xl font-bold text-[var(--color-text-dark)] sm:text-4xl">{notFound.subtitle}</h2>
      <p className="mt-3 max-w-md font-ui text-base text-[var(--color-text)]">{notFound.description}</p>
      <Link href={notFound.buttonUrl} className={`mt-8 ${buttonClass} h-12 rounded-full px-6 font-bold`}>
        {notFound.buttonLabel}
      </Link>
    </section>
  );
}
