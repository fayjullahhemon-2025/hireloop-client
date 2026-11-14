# hireloop-frontend

Next.js 16 App Router app (React 19) for HireLoop auth/entry UI. Single package, no tests, no CI.

## Commands

- `npm run dev` — dev server on http://localhost:3000 (Turbopack is the default in Next 16; `next.config.ts` sets Turbopack-specific CSS loaders, so don't opt out to webpack)
- `npm run build` — production build
- `npm run lint` — `biome check` (Biome handles format + lint + import sorting; there is no ESLint/Prettier)
- `npm run format` — `biome format --write`
- No typecheck script; run `npx tsc --noEmit` before declaring work done
- No test framework installed

## Architecture

- `src/app` — App Router routes; `src/app/api/auth/[...all]/route.ts` is the better-auth catch-all handler
- `src/lib/auth.ts` — server better-auth instance: MongoDB database `hireloopDB` via `@better-auth/mongo-adapter`, email/password only (no OAuth configured)
- Users carry a `role` string field ("seeker" default, optional, client-settable) declared in better-auth `user.additionalFields`; forms pass it through `signUp.email`. The role values live in `ROLES` (`src/components/shared/SignUpForm.tsx`: seeker/recruiter/admin) — keep `src/lib/auth.ts` in sync when changing them
- `src/app/dashboard/{seeker,recruiter,admin}/page.tsx` — role-based dashboard routes; no session/role gating exists yet (`src/app/dashboard/layout.tsx` is an empty stub), so don't assume pages are protected
- `src/lib/auth-client.ts` exports both a configured `authClient` and a second unconfigured `createAuthClient()` destructured into `signIn/signUp/useSession/signOut` — existing code uses the destructured ones; don't mix them up when adding methods
- `src/components/ui` — shadcn/ui components; add new ones with `npx shadcn@latest add <name>` (style: `base-nova`, see `components.json`); shared UI in `src/components/shared`
- `@/*` → `./src/*`

## Gotchas

- Next config enables `cacheComponents` and `reactCompiler` — components render under stricter cache semantics than stock Next.js; read the bundled docs first (block below) before writing server components or data fetching
- Tailwind v4 with no `tailwind.config` — theme lives in `src/app/globals.css`
- `.env` is gitignored and not committed; running the app requires `MONGO_DB_URL`, `BETTER_AUTH_SECRET`, and `BETTER_AUTH_URL` (`localhost:3000` in dev, used as auth baseURL)

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
