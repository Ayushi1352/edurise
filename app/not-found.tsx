import Link from "next/link";
import rawData from "@/data/templates.json";
import { buttonClass } from "@/components/ui/buttonStyles";

export default function NotFound() {
  const notFound = rawData.common.metadata.notFound ?? {
    title: "404",
    subtitle: "Page Not Found",
    description: "The page you are looking for does not exist or has been moved.",
    buttonLabel: "Back to Home",
    buttonUrl: "/",
  };

  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
      <h1 className="font-heading text-7xl font-extrabold text-[var(--color-navy)] sm:text-9xl">
        {notFound.title}
      </h1>
      <h2 className="mt-4 font-heading text-2xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
        {notFound.subtitle}
      </h2>
      <p className="mt-3 max-w-md font-ui text-base text-[var(--color-text)]">
        {notFound.description}
      </p>
      <Link href={notFound.buttonUrl} className={`mt-8 ${buttonClass} h-12 px-6 rounded-full font-bold`}>
        {notFound.buttonLabel}
      </Link>
    </section>
  );
}
