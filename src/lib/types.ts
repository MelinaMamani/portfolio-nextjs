export type MenuItem = {
  id: string;
  text: string;
  href: string;
};

export type Nav = {
  brand: string;
  menu: Array<MenuItem>;
  menuIconAlt: string;
  language: { en: string; es: string }
};

export type Hero = {
  greeting: string;
  cta: string;
  secondaryCta: string;
  secondaryLinkCta: string;
  profileImageAlt: string;
  aboutMe: string;
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
  imageSrc: string;
  links: Array<LinkItem>;
};

export type Projects = {
  title: string;
  items: Array<ProjectItem>;
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
  experience: Experience;
  footer: Footer;
};
