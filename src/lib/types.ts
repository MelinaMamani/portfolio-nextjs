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
  description: string;
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
  hero: Hero;
  tech: Tech;
  projects: Projects;
  about: About;
  footer: Footer;
};
