# Agent Guidelines for r-tech-landing

## Build Commands
- **Dev**: `npm run dev` (Vite dev server)
- **Build**: `npm run build` (production) or `npm run build:dev` (dev mode)
- **Lint**: `npm run lint` (ESLint with auto-fix)
- **Preview**: `npm run preview`
- **Type Check**: `tsc --noEmit` (TypeScript validation)
- No test framework configured

## Tech Stack
Vite + React 18 + TypeScript + shadcn-ui + Tailwind CSS + React Router

## Code Style

### Imports & Formatting
- Use `@/` alias for src: `import { Button } from "@/components/ui/button"`
- Group: external deps → components → utils → assets
- ESLint enforces: no unused vars, React hooks rules, prefer const exports

### TypeScript
- **Relaxed**: `noImplicitAny: false`, `strictNullChecks: false` — implicit any acceptable
- Prefer typed components but not required
- `eslint-plugin-react-hooks` enforces hook dependencies

### Components & Styling
- Functional components with arrow functions: `const Component = () => {...}`
- Export default at EOF
- Use shadcn-ui from `@/components/ui/` + Tailwind CSS only (no CSS modules)
- Use `cn()` from `@/lib/utils` for className merging via tailwind-merge

### Naming
- Files: `PascalCase` components (`HeroSection.tsx`), `camelCase` utils (`whatsapp.ts`)
- Variables/functions: `camelCase`, Types: `PascalCase`, CSS: `kebab-case`

### Error Handling
- Use Sonner toast notifications for user feedback
- No try-catch required due to relaxed TypeScript
