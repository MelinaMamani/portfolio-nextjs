export type Tech = {
  id: string;
  name: string;
  color?: string;
};

const TECHS: Tech[] = [
  { id: "ts", name: "TypeScript", color: "#3178c6" },
  { id: "next", name: "Next.js", color: "#000" },
  { id: "react", name: "React", color: "#61dafb" },
  { id: "node", name: "Node.js", color: "#339933" },
  { id: "tailwind", name: "Tailwind", color: "#06B6D4" },
  { id: "apollo", name: "Apollo Client", color: "#311C87" },
  { id: "graphql", name: "GraphQL", color: "#E535AB" },
  { id: "postgres", name: "PostgreSQL", color: "#336791" },
];

export default TECHS;
