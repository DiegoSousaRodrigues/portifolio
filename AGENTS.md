# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 15 portfolio project using the App Router. Route-level files live in `src/app`: `layout.tsx` defines the root shell, `page.tsx` composes the homepage, and `globals.css` holds global CSS. Reusable UI lives in `src/components`, usually as one folder per component with the component file, optional `.styles.ts`, `.types.ts`, and an `index.ts` barrel. Shared style constants are in `src/styles`. Static assets belong in `public`, including profile imagery and technology icons under `public/svg`. Font notes are kept in `src/assets/fonts`.

## Build, Test, and Development Commands

- `yarn dev`: starts the local Next.js development server at `http://localhost:3000`.
- `yarn build`: creates a production build and validates TypeScript/Next.js compilation.
- `yarn start`: serves the production build after `yarn build`.
- `yarn lint`: runs ESLint with `next/core-web-vitals` and `next/typescript`.

This project uses Yarn only. Keep `yarn.lock` as the single package-manager lockfile.

## Coding Style & Naming Conventions

Write TypeScript and React function components. Keep components in PascalCase folders and files, for example `src/components/CardTechnology/CardTechnology.tsx`. Use PascalCase for exported components and types, camelCase for local variables and arrays, and descriptive names for asset paths. Imports may use the `@/*` alias for `src/*`.

Follow the existing formatting style: two-space indentation, single quotes, no semicolons, and trailing commas in multiline objects/arrays. Styling is split between Tailwind utility classes and `windstitch` wrappers in `.styles.ts` files.

## Testing Guidelines

There is currently no test framework configured. Before opening a pull request, run `yarn lint` and `yarn build`. For future tests, colocate them near the component or feature they cover using names such as `ComponentName.test.tsx`, and prefer React Testing Library for component behavior.

## Commit & Pull Request Guidelines

Recent commits use short imperative summaries, sometimes with a Conventional Commit prefix such as `feat:`. Keep messages concise and action-oriented, for example `feat: add contact section` or `fix: correct technology icon alt text`.

Pull requests should include a brief description, screenshots for visual changes, testing notes with the commands run, and linked issues when applicable. Keep changes focused; separate content, styling, and structural refactors when possible.

## Agent-Specific Instructions

Do not edit generated or dependency folders such as `.next` and `node_modules`. Preserve existing user changes, keep edits scoped, and update this guide when project tooling or structure changes.
