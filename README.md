# Portfolio Next.js

Repositorio que contiene el portfolio personal hecho con Next.js 16, React 19, TypeScript y TailwindCSS (App Router).

## Descripción

Proyecto minimalista y responsive con pequeñas animaciones usando Framer Motion. Incluye secciones:

- Hero
- Tech Stack
- Projects
- About Me
- Footer

## Estructura principal

- `src/app/` — App Router y páginas
- `src/components/` — Componentes reutilizables (Hero, TechStack, Projects, ProjectCard, AboutMe, Footer)
- `src/data/` — Archivos de datos estáticos (`projects.ts`, `technologies.ts`)
- `src/styles/` — CSS adicional

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Notas

- Se eliminaron los assets genéricos que trae el template `create-next-app` (logos/imagenes y ejemplos de página por defecto).
- Para personalizar, editá `src/data/projects.ts`, `src/data/technologies.ts` y los componentes en `src/components`.

## Estructura

- `src/app/` — App Router y páginas.
- `src/components/` — Componentes reutilizables.
- `src/data/` — Archivos de datos estáticos (`projects.ts`, `technologies.ts`).
- `src/styles/` — CSS adicional y animaciones.

Los datos de ejemplo están en `src/data/`. Modifícalos para personalizar el contenido.
