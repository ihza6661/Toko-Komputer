# Agent Guidelines for r-tech-landing

## Build Commands
- **Dev**: `npm run dev` (Vite dev server on port 8080)
- **Build**: `npm run build` (production) or `npm run build:dev` (dev mode)
- **Lint**: `npm run lint` (ESLint)
- **Preview**: `npm run preview` (preview production build)
- **Type Check**: `tsc --noEmit` (TypeScript validation)
- **Tests**: `npm test` (all tests) or `vitest <file>` (single test file)
- **Test UI**: `npm run test:ui` (Vitest UI), **Coverage**: `npm run test:coverage`

## Tech Stack
Vite + React 18 + TypeScript + shadcn-ui + Tailwind CSS + React Router + TanStack Query + Vitest

## Code Style

### Imports & Formatting
- Use `@/` alias: `import { Button } from "@/components/ui/button"`
- Group: external deps → @/components → @/lib → @/assets
- ESLint enforces: React hooks rules, prefer const exports, no-unused-vars off

### TypeScript
- **Relaxed**: `noImplicitAny: false`, `strictNullChecks: false` — implicit any acceptable
- Prefer typed components but not required; use `type` for props interfaces
- `eslint-plugin-react-hooks` enforces hook dependencies

### Components & Styling
- Functional components with arrow functions: `const Component = () => {...}`
- Export default at EOF (single default export per file)
- Use shadcn-ui from `@/components/ui/` + Tailwind CSS only (no CSS modules/styled-components)
- Use `cn()` from `@/lib/utils` for className merging via tailwind-merge + clsx
- Inline styles only for dynamic/computed values (e.g., `animationDelay`)

### Naming
- Files: `PascalCase` components (`HeroSection.tsx`), `camelCase` utils/hooks (`whatsapp.ts`, `useProducts.ts`)
- Variables/functions: `camelCase`, Types/Interfaces: `PascalCase`, CSS classes: `kebab-case`
- Constants: `UPPER_SNAKE_CASE` for config/environment (e.g., `COMPANY_INFO`)

### Error Handling
- Use Sonner toast for user-facing errors/feedback
- TanStack Query handles API errors; check `isError` state in components
- No try-catch required unless handling specific async logic
