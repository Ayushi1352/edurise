import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import rawData from "@/data/templates.json";
import type { EduRiseTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import "./globals.css";

const templateData: EduRiseTemplateData = rawData;
const commonData = templateData.common;
const sectionData = templateData.categories.Education.sections;
const headerData = sectionData.Header.variants.EduRiseHeader1;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: commonData.metadata.title,
  description: commonData.metadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={commonData.metadata.lang} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="site-frame">
          <Header
            announcement={commonData.announcement}
            company={commonData.company}
            data={headerData}
          />
          {children}
          <Footer company={commonData.company} data={commonData.footer} />
        </div>
      </body>
    </html>
  );
}
