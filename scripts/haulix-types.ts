export interface ThemeFonts {
  primary: string;
  heading: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
  lang: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface ContactItem {
  id: string;
  icon: string;
  title: string;
  lines: string[];
  url: string;
}

export interface CompanyData {
  name: string;
  logo: string;
  logoLight: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  contactItems: ContactItem[];
}

export interface SocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface FooterData {
  description: string;
  quickLinksTitle: string;
  contactTitle: string;
  socialLinks: SocialLink[];
  copyrightText: string;
  motto: string[];
}

export interface HeaderData {
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

export interface IconCard {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export interface HeroData {
  id: string;
  label: string;
  labelIcon: string;
  titleTop: string;
  titleAccent: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
  imageAlt: string;
  badge: {
    value: string;
    label: string;
  };
  reach: {
    icon: string;
    value: string;
    label: string;
  };
  features: IconCard[];
}

export interface StatItem {
  id: string;
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

export interface AboutData {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  paragraphs: string[];
  primaryImage: string;
  primaryImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  badge: {
    icon: string;
    value: string;
    label: string;
  };
  features: IconCard[];
  stats: StatItem[];
  why: {
    label: string;
    titleTop: string;
    titleAccent: string;
    description: string;
    image: string;
    imageAlt: string;
    items: IconCard[];
  };
}

export interface ServiceCard extends IconCard {
  image: string;
}

export interface ServicesData {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  cardButtonText: string;
  cardButtonUrl: string;
  cards: ServiceCard[];
  cta: {
    icon: string;
    label: string;
    titleTop: string;
    titleAccent: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    phoneLabel: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface TeamData {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  members: TeamMember[];
  socialLinks: SocialLink[];
  socialLabel: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export interface GalleryData {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  items: GalleryItem[];
  viewerLabel: string;
  openLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface TestimonialsData {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  badge: {
    value: string;
    label: string;
  };
  rating: number;
  ratingLabel: string;
  previousLabel: string;
  nextLabel: string;
  showLabel: string;
  items: TestimonialItem[];
}

export interface ContactData {
  id: string;
  label: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  benefits: string[];
  form: {
    label: string;
    title: string;
    description: string;
  };
}

export interface EnquiryFormData {
  fields: {
    name: string;
    phone: string;
    email: string;
    company: string;
    serviceType: string;
    shipmentType: string;
    origin: string;
    destination: string;
    message: string;
  };
  serviceOptions: string[];
  shipmentOptions: string[];
  cityOptions: string[];
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

export interface LogisticsTemplateData {
  common: {
    theme: ThemeData;
    metadata: SiteMetadataData;
    company: CompanyData;
    Footer: FooterData;
  };
  categories: {
    Logistics: {
      sections: {
        Header?: Variants<HeaderData>;
        Hero?: Variants<HeroData>;
        About?: Variants<AboutData>;
        Services?: Variants<ServicesData>;
        Team?: Variants<TeamData>;
        Gallery?: Variants<GalleryData>;
        Testimonials?: Variants<TestimonialsData>;
        Contact?: Variants<ContactData>;
        EnquiryForm?: Variants<EnquiryFormData>;
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
