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

type LinkItem = {
  text: string;
  url: string;
};

export type ProjectItem = {
  id: string;
  name: string;
  imagesAlt: string;
  links: Array<LinkItem>;
};

export type Projects = {
  title: string;
  items: Array<ProjectItem>;
};

export type About = {
  title: string;
  description?: string;
  paragraphs?: string[];
  images?: Record<string, string>;
};

export type ExperienceItem = {
  place: string;
  date: string;
  paragraphs: string[];
};

export type Experience = {
  title: string;
  items: Array<ExperienceItem>;
  olderBtn: string;
  newerBtn: string;
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
