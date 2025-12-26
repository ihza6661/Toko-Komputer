# Agent Guidelines for Toko Komputer

This document outlines the guidelines and conventions for agents working on the Toko Komputer project. Adhering to these guidelines ensures consistency, maintainability, and high quality across the codebase.

## Key Project Values
Our development efforts are guided by the following core values:
- **Performance:** Deliver fast and responsive user experiences.
- **Maintainability:** Write clean, readable, and well-structured code that is easy to understand and extend.
- **User Experience (UX):** Prioritize intuitive and delightful user interactions.
- **Accessibility (A11y):** Ensure the application is usable by everyone, regardless of their abilities.
- **Security:** Implement secure coding practices to protect user data and system integrity.

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
- Adhere to Prettier/ESLint formatting rules.

### TypeScript
- **Strictness**: While `noImplicitAny: false` and `strictNullChecks: false` might be configured in `tsconfig` for legacy reasons, new code should strive for explicit types and null safety where possible. Aim to minimize `any` usage and ensure robust type checking.
- Prefer `type` for props interfaces and other object shapes.
- `eslint-plugin-react-hooks` enforces hook dependencies.

### Components & Styling
- Functional components with arrow functions: `const Component = () => {...}`
- Export default at EOF (single default export per file).
- Use shadcn-ui from `@/components/ui/` + Tailwind CSS only (no CSS modules/styled-components).
- Use `cn()` from `@/lib/utils` for className merging via tailwind-merge + clsx.
- Inline styles only for dynamic/computed values (e.g., `animationDelay`).
- Ensure all components are accessible (A11y) by following WAI-ARIA guidelines and using semantic HTML.

### Naming
- Files: `PascalCase` components (`HeroSection.tsx`), `camelCase` utils/hooks (`whatsapp.ts`, `useProducts.ts`)
- Variables/functions: `camelCase`, Types/Interfaces: `PascalCase`, CSS classes: `kebab-case`
- Constants: `UPPER_SNAKE_CASE` for config/environment (e.g., `COMPANY_INFO`)
- Commit Messages: Write clear, concise, and descriptive commit messages following the Conventional Commits specification (e.g., `feat: add user authentication`, `fix: correct tax calculation bug`).

### Documentation
- Add JSDoc comments for complex functions, components, and public APIs to explain their purpose, parameters, and return values.

## Error Handling
- Use Sonner toast for user-facing errors/feedback.
- TanStack Query handles API errors; check `isError` state in components.
- No `try-catch` required unless handling specific async logic or external integrations.
- Implement logging for critical errors and monitor them in production.

## Testing Strategy
- **Unit Tests:** Use Vitest for individual functions and small components. Focus on testing isolated logic.
- **Integration Tests:** Test the interaction between multiple components or modules.
- **End-to-End (E2E) Tests:** (If applicable) Use a framework like Playwright or Cypress to simulate user flows across the entire application.
- Strive for good test coverage, especially for critical business logic and UI components.

## Deployment
- The project is deployed via Vercel. Ensure all changes are compatible with the Vercel deployment environment.
- Production builds are triggered automatically on merges to the `main` branch.
