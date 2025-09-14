// Types pour les projets
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: "fullstack" | "frontend" | "backend" | "mobile";
  githubFrontend: string;
  githubBackend?: string;
  demo?: string;
  featured: boolean;
  images?: string[];
  image?: string;
  
}

// Types pour les filtres de projets
export interface ProjectFilter {
  key: string;
  label: string;
  icon: React.ReactNode;
}

// Types pour les groupes de compétences
export interface SkillGroup {
  category: string;
  skills: string[];
}

// Types pour les données du formulaire de contact
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Types pour le statut du formulaire
export type FormStatus = "" | "sending" | "success" | "error";

// Types pour les props des composants
export interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

export interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export interface ProjectCardProps {
  project: Project;
}

// Types pour les API responses
export interface ApiResponse<T = Record<string, unknown>> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}

// Types pour l'email
export interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Types pour Nodemailer
export interface EmailAddress {
  name: string;
  address: string;
}

// Types pour les options d'email avec types stricts
export interface EmailOptions {
  from: EmailAddress | string;
  to: string;
  subject: string;
  html: string;
  text: string;
}
