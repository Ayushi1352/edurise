export interface ThemeFonts {
  primary: string;
  heading: string;
  ui: string;
  display: string;
  footer: string;
  serif: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  lang: string;
  /** the 404 page */
  notFound: {
    title: string;
    subtitle: string;
    description: string;
    buttonLabel: string;
    buttonUrl: string;
  };
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface ButtonData {
  label: string;
  url: string;
}

export interface ContactItem {
  id: string;
  /** a name from components/ui/Icon.tsx */
  icon: string;
  label: string;
  text: string;
  url: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface CompanyData {
  name: string;
  tagline: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  contactInfo?: {
    address: string;
    phone: string;
    email: string;
  };
  contactItems: ContactItem[];
}

export interface FooterData {
  backgroundImage: string;
  logoUrl: string;
  /** the paragraph under the logo, one entry per line of the design */
  descriptionLines: string[];
  linksLabel: string;
  links: LinkItem[];
  contactsTitle: string;
  /** which of the company contact details the footer lists, in order */
  contactIds: string[];
  socialTitle: string;
  socialLabel: string;
  socialLinks: SocialLink[];
  /** "{year}" is replaced by the current year */
  copyrightText: string;
}

export interface AnnouncementData {
  icon: string;
  text: string;
  linkText: string;
  linkUrl: string;
}

export interface HeaderData {
  announcement: AnnouncementData;
  logoUrl: string;
  homeLabel: string;
  navLinks: LinkItem[];
  buttonText: string;
  buttonUrl: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
}

/** A title with its highlighted words (titleAccent) in gold */
export interface SplitTitle {
  titleTop: string;
  titleAccent: string;
}

/** Centred section intro: icon and label between two gold lines, title, one line of text */
export interface SectionIntro extends SplitTitle {
  id: string;
  /** icon in front of the label (a name from components/ui/Icon.tsx) */
  icon: string;
  label: string;
  description: string;
}

export interface HeroData extends SplitTitle {
  id: string;
  titleBottom: string;
  /** the paragraph, one entry per line of the design */
  descriptionLines: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  /** the same photo cropped around the student, for phones and tablets */
  mobileImage: string;
  mobileImageWidth: number;
  mobileImageHeight: number;
  imageAlt: string;
  primaryButton: ButtonData;
  secondaryButton: ButtonData;
  socialLabel: string;
  socialLinks: SocialLink[];
}

export interface RecognitionItem {
  id: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
}

export interface AboutData extends SplitTitle {
  id: string;
  admissionIcon: string;
  admissionLabel: string;
  admissionText: string;
  admissionUrl: string;
  descriptionLines: string[];
  recognitionsTitleTop: string;
  recognitionsTitleAccent: string;
  recognitions: RecognitionItem[];
}

export interface CourseItem {
  id: string;
  title: string;
  icon: string;
  /** one entry per line of the card */
  descriptionLines: string[];
  /** the course's name in the contact form's list */
  formName: string;
  image: string;
  imageAlt: string;
  url: string;
}

export interface CoursesData extends SectionIntro {
  items: CourseItem[];
}

export interface WhyData extends SplitTitle {
  id: string;
  label: string;
  descriptionLines: string[];
  image: string;
  imageAlt: string;
}

export interface FacultyItem {
  id: string;
  name: string;
  role: string;
  /** one entry per line of the card */
  focusLines: string[];
  image: string;
  imageAlt: string;
}

export interface FacultyData extends SectionIntro {
  badgeIcon: string;
  previousLabel: string;
  nextLabel: string;
  items: FacultyItem[];
}

export interface EmployerItem {
  id: string;
  name: string;
  image: string;
  /** the logo's size in the 1920px design (its file is cut at that size) */
  width: number;
  height: number;
}

export interface HiringData extends SectionIntro {
  employers: EmployerItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  /** one entry per line of the design */
  answerLines: string[];
}

export interface FaqData extends SplitTitle {
  id: string;
  label: string;
  /** words at the start of the second title line that stay navy ("You") */
  titleAccentLead: string;
  image: string;
  imageAlt: string;
  items: FaqItem[];
}

export interface ContactData extends SplitTitle {
  id: string;
  icon: string;
  label: string;
  descriptionLines: string[];
}

/** A form field: its placeholder (also its accessible name) and the icon in front (a name from components/ui/Icon.tsx) */
export interface FormField {
  placeholder: string;
  icon: string;
}

export interface ContactFormData {
  fields: {
    name: FormField;
    email: FormField;
    phone: FormField;
    course: FormField;
    message: FormField;
  };
  button: string;
  sending: string;
  successTitle: string;
  success: string;
  closeLabel: string;
}

interface Variants<T> {
  variants: Record<string, T>;
}

export interface TemplateComponent {
  key: string;
  component: string;
}

export interface EduRiseTemplateData {
  common: {
    theme: ThemeData;
    metadata: SiteMetadataData;
    company: CompanyData;
    Footer: FooterData;
  };
  categories: {
    Education: {
      sections: {
        Header?: Variants<HeaderData>;
        Hero?: Variants<HeroData>;
        About?: Variants<AboutData>;
        Courses?: Variants<CoursesData>;
        Why?: Variants<WhyData>;
        Faculty?: Variants<FacultyData>;
        Hiring?: Variants<HiringData>;
        Faq?: Variants<FaqData>;
        Contact?: Variants<ContactData>;
        ContactForm?: Variants<ContactFormData>;
      };
      templateComponents: {
        [template: string]: {
          shared: Record<string, string>;
          pages: Record<string, { components: TemplateComponent[] }>;
        };
      };
    };
  };
}
