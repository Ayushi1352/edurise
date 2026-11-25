import type { Metadata } from "next";
import { Albert_Sans, Figtree, Merriweather, Montserrat, Noto_Sans, Plus_Jakarta_Sans } from "next/font/google";
import rawData from "@/data/templates.json";
import type { EduRiseTemplateData, RootVariables } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./globals.css";

// The design's typefaces (all variable fonts, so each one is a single file)
const figtree = Figtree({ subsets: ["latin"], fallback: ["Arial", "sans-serif"], variable: "--font-figtree" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], fallback: ["Arial", "sans-serif"], variable: "--font-jakarta" });
const albertSans = Albert_Sans({ subsets: ["latin"], fallback: ["Arial", "sans-serif"], variable: "--font-albert" });
const montserrat = Montserrat({ subsets: ["latin"], fallback: ["Arial", "sans-serif"], variable: "--font-montserrat" });
const notoSans = Noto_Sans({ subsets: ["latin"], fallback: ["Arial", "sans-serif"], variable: "--font-noto-sans" });
const merriweather = Merriweather({ subsets: ["latin"], fallback: ["Georgia", "Times New Roman", "serif"], variable: "--font-merriweather" });

const templateData: EduRiseTemplateData = rawData;
const sectionData = templateData.categories.Education.sections;
const commonData = templateData.common;
const headerData = sectionData.Header?.variants?.EduRiseHeader1;

const rootVariables: RootVariables = {
  "--font-primary": commonData.theme.fonts.primary,
  "--font-heading": commonData.theme.fonts.heading,
  "--font-ui": commonData.theme.fonts.ui,
  "--font-display": commonData.theme.fonts.display,
  "--font-footer": commonData.theme.fonts.footer,
  "--font-serif": commonData.theme.fonts.serif,
};

const fontVariables = [figtree, jakarta, albertSans, montserrat, notoSans, merriweather].map((font) => font.variable).join(" ");

export const metadata: Metadata = {
  title: commonData.metadata.title,
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={commonData.metadata.lang}
      style={rootVariables}
      data-scroll-behavior="smooth"
      // Root font size: 16px, and from 1024px up it follows the 1920px design (1rem = 1/120 of the screen, at most 16px),
      // so a 1920px screen shows the design 1:1 and 1024px or 1440px show the same layout, only smaller. Every size on
      // the page is in rem, so it all scales together. Header and footer links scroll smoothly to their section.
      className={`${fontVariables} h-full text-[16px] lg:text-[length:min(16px,calc(100vw/120))] scroll-smooth antialiased [&_:where(a[href],button:not(:disabled),select,summary,[role=button])]:cursor-pointer motion-reduce:scroll-auto motion-reduce:[&_*]:!duration-[0.01ms]`}
    >
      <body className="min-h-full bg-[var(--color-bg-backdrop)] font-sans text-[var(--color-text)] selection:bg-[var(--color-gold)] selection:text-[var(--color-navy)]">
        {/*
          The whole site sits in one frame, at most 1920px wide and centred. Up to 1920px it fills the screen, so
          nothing changes; on wider screens or when the browser is zoomed out the page stays in the middle.
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[120rem] flex-col overflow-x-clip bg-[var(--color-bg-main)]">
          <Header data={headerData} company={commonData.company} />
          {children}
          <ScrollReveal />
          <Footer data={commonData.Footer} company={commonData.company} />
        </div>
      </body>
    </html>
  );
}
