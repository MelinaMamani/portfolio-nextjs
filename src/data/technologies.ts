export type TechItem = {
  id: string;
  name: string;
  color: string;
  icon: string;
};

export const TECHS: Record<string, TechItem> = {
  html: { id: "html", name: "HTML", color: "#E34F26", icon: "SiHtml5" },
  css: { id: "css", name: "CSS", color: "#1572B6", icon: "SiCss3" },
  sass: { id: "sass", name: "Sass", color: "#CC6699", icon: "SiSass" },
  bootstrap: { id: "bootstrap", name: "Bootstrap", color: "#7952B3", icon: "SiBootstrap" },

  tailwind: { id: "tailwind", name: "TailwindCSS", color: "#06B6D4", icon: "SiTailwindcss" },
  styled: { id: "styled", name: "Styled Components", color: "#DB7093", icon: "SiStyledcomponents" },
  mantine: { id: "mantine", name: "Mantine", color: "#339AF0", icon: "SiMantine" },
  mui: { id: "mui", name: "Material UI", color: "#007FFF", icon: "SiMui" },

  js: { id: "js", name: "JavaScript", color: "#F7DF1E", icon: "SiJavascript" },
  ts: { id: "ts", name: "TypeScript", color: "#3178C6", icon: "SiTypescript" },
  rest: { id: "rest", name: "REST API", color: "#4B5563", icon: "SiJson" },
  
  react: { id: "react", name: "React", color: "#61DAFB", icon: "SiReact" },
  next: { id: "next", name: "Next.js", color: "#000000", icon: "SiNextdotjs" },

  graphql: { id: "graphql", name: "GraphQL", color: "#E535AB", icon: "SiGraphql" },
};

export default TECHS;
