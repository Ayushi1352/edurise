import rawData from "@/data/templates.json";
import type { EduRiseTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { WhySection } from "@/components/sections/WhySection";
import { FacultySection } from "@/components/sections/FacultySection";
import { HiringSection } from "@/components/sections/HiringSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

const templateData: EduRiseTemplateData = rawData;
const sectionData = templateData.categories.Education.sections;
const coursesData = sectionData.Courses?.variants?.EduRiseCourses1;

// The form’s course list: every program card, by its full name
const courseOptions = (coursesData?.items ?? []).map((item) => item.formName);

/*
  One landing page built from the EduRise design. The course cards and the admissions banner lead to the contact form.
  Each section's id (templates.json) matches the header and footer links ("#about" → id="about").
*/
export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.EduRiseHero1} />
      <AboutSection data={sectionData.About?.variants?.EduRiseAbout1} />
      <CoursesSection data={coursesData} />
      <WhySection data={sectionData.Why?.variants?.EduRiseWhy1} />
      <FacultySection data={sectionData.Faculty?.variants?.EduRiseFaculty1} />
      <HiringSection data={sectionData.Hiring?.variants?.EduRiseHiring1} />
      <FaqSection data={sectionData.Faq?.variants?.EduRiseFaq1} />
      <ContactSection
        data={sectionData.Contact?.variants?.EduRiseContact1}
        form={sectionData.ContactForm?.variants?.EduRiseContactForm1}
        courseOptions={courseOptions}
      />
    </main>
  );
}
