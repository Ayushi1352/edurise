export interface MetadataData {
  title: string;
  description: string;
  lang: string;
}

export interface TextLink {
  id: string;
  label: string;
  url: string;
}

export interface SocialLink {
  id: string;
  label: string;
  text: string;
  url?: string;
}

export interface CompanyData {
  name: string;
  logo: string;
  logoAlt: string;
  contactItems: {
    id: string;
    icon: string;
    text: string;
    url: string;
  }[];
}

export interface FooterData {
  description: string;
  copyrightText: string;
  links: TextLink[];
  socialLinks: SocialLink[];
}

export interface HeaderData {
  homeLabel: string;
  contactButton: TextLink;
  navLinks: TextLink[];
}

export interface AnnouncementData {
  text: string;
  linkText: string;
  linkUrl: string;
}

export interface ButtonData {
  label: string;
  url: string;
}

export interface HeroData {
  id: string;
  kicker: string;
  titleTop: string;
  titleAccent: string;
  titleBottom: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton: ButtonData;
  secondaryButton: ButtonData;
  socialLinks: Omit<SocialLink, "url">[];
}

export interface IntroData {
  id: string;
  admissionLabel: string;
  admissionText: string;
  titleTop: string;
  titleAccent: string;
  description: string;
}

export interface RecognitionItem {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  footnote?: string;
}

export interface RecognitionData {
  title: string;
  titleAccent: string;
  items: RecognitionItem[];
}

export interface SectionHeadingData {
  id: string;
  eyebrow: string;
  titleTop: string;
  titleAccent: string;
  description?: string;
}

export interface CoursesData extends SectionHeadingData {
  items: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
}

export interface ImageSectionData extends SectionHeadingData {
  image: string;
  imageAlt: string;
}

export interface FacultyData extends SectionHeadingData {
  items: {
    id: string;
    name: string;
    role: string;
    focus: string;
    image: string;
  }[];
}

export interface HiringData extends SectionHeadingData {
  employers: string[];
}

export interface FaqData extends SectionHeadingData {
  image: string;
  imageAlt: string;
  items: {
    id: string;
    question: string;
    answer: string;
  }[];
}

export interface ContactData extends SectionHeadingData {
  form: {
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    interestLabel: string;
    messageLabel: string;
    buttonLabel: string;
    courseOptions: string[];
  };
}

interface Variants<T> {
  variants: Record<string, T>;
}

export interface EduRiseTemplateData {
  common: {
    metadata: MetadataData;
    announcement: AnnouncementData;
    company: CompanyData;
    footer: FooterData;
  };
  categories: {
    Education: {
      sections: {
        Header: Variants<HeaderData>;
        Hero: Variants<HeroData>;
        Intro: Variants<IntroData>;
        Recognitions: Variants<RecognitionData>;
        Courses: Variants<CoursesData>;
        Why: Variants<ImageSectionData>;
        Faculty: Variants<FacultyData>;
        Hiring: Variants<HiringData>;
        Faq: Variants<FaqData>;
        Contact: Variants<ContactData>;
      };
    };
  };
}
