import type { IconType } from "react-icons";
import {
  FaBriefcase,
  FaFacebookF,
  FaGraduationCap,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  LuArrowRight,
  LuArrowUp,
  LuBookOpen,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuGraduationCap,
  LuMail,
  LuMenu,
  LuMessageCircle,
  LuPhone,
  LuPlus,
  LuUserRound,
  LuX,
} from "react-icons/lu";

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FaBriefcase,
  FaFacebookF,
  FaGraduationCap,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaXTwitter,
  FaYoutube,
  LuArrowRight,
  LuArrowUp,
  LuBookOpen,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuGraduationCap,
  LuMail,
  LuMenu,
  LuMessageCircle,
  LuPhone,
  LuPlus,
  LuUserRound,
  LuX,
};

type Props = {
  name: string;
  className?: string;
  // Line thickness of the outline icons (Lu); the filled icons keep their own shape.
  strokeWidth?: number;
};

export const Icon = ({ name, className, strokeWidth = 1.8 }: Props) => {
  const Component = icons[name] ?? LuChevronRight;
  const outline = name.startsWith("Lu");
  return <Component className={className} strokeWidth={outline ? strokeWidth : undefined} aria-hidden="true" />;
};
