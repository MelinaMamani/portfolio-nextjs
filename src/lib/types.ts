export type Nav = {
  brand: string;
  menu: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    language: string
  };
  menuIconAlt: string;
  language: { en: string; es: string }
};

export type Hero = {
  greeting: string;
  subtitle: string;
  profileImageAlt?: string;
  see_projects?: string;
};

export type Tech = {
  title: string;
  description?: string;
  no_technologies?: string;
};

export type Projects = {
  title: string;
  description?: string;
  see_project?: string;
  items?: Array<{ id: string; name: string; imagesAlt?: string; links?: Record<string, string> }>;
  itemsById?: Record<string, { name: string; description?: string; imagesAlt?: string; links?: Record<string, string> }>;
};

export type About = {
  title: string;
  description?: string;
  paragraphs?: string[];
  images?: Record<string, string>;
};

export type Experience = {
  title: string;
  description?: string;
  no_experience?: string;
  items?: Array<{
    role: string;
    date: string;
    paragraphs: string[];
    links?: Record<string, string>;
  }>;
};

export type Footer = {
  copyright?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  contactEmailLabel?: string;
  linkedinLabel?: string;
  githubLabel?: string;
};

export type Translations = {
  nav: Nav
  hero: Hero;
  tech: Tech;
  projects: Projects;
  about: About;
  experience: Experience;
  footer: Footer;
};
