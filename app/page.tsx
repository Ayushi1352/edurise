import rawData from "@/data/templates.json";
import type { EduRiseTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { RecognitionsSection } from "@/components/sections/RecognitionsSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { WhySection } from "@/components/sections/WhySection";
import { FacultySection } from "@/components/sections/FacultySection";
import { HiringSection } from "@/components/sections/HiringSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

const templateData: EduRiseTemplateData = rawData;
const companyData = templateData.common.company;
const sectionData = templateData.categories.Education.sections;

export default function Home() {
  return (
    <main className="landing-page">
      <HeroSection data={sectionData.Hero.variants.EduRiseHero1} />
      <IntroSection data={sectionData.Intro.variants.EduRiseIntro1} />
      <RecognitionsSection data={sectionData.Recognitions.variants.EduRiseRecognitions1} />
      <CoursesSection data={sectionData.Courses.variants.EduRiseCourses1} />
      <WhySection data={sectionData.Why.variants.EduRiseWhy1} />
      <FacultySection data={sectionData.Faculty.variants.EduRiseFaculty1} />
      <HiringSection data={sectionData.Hiring.variants.EduRiseHiring1} />
      <FaqSection data={sectionData.Faq.variants.EduRiseFaq1} />
      <ContactSection
        data={sectionData.Contact.variants.EduRiseContact1}
        company={companyData}
      />
    </main>
  );
}
