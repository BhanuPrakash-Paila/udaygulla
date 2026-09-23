# Cinematic Photographer Portfolio

**Status**: Approved
**Created**: 2026-09-23
**Mode**: Plan

## 1. Project Summary

Build a premium, cinematic photographer and videographer portfolio from the existing Next.js 16 TypeScript starter. The public experience will make the work the first-viewport signal, support fast browsing across curated projects, and provide a reliable inquiry flow. A separate TypeScript Express API will own contact submissions, portfolio content, testimonials, and protected admin CRUD. MongoDB Atlas will persist application content and Azure Blob Storage will host durable portfolio media.

The implementation will preserve the existing `ug` repository root and add a clearly separated `server/` API workspace. The frontend remains deployable to Vercel; the API deploys to Render or Heroku; MongoDB Atlas and Blob Storage are managed external services.

## 2. Goals & Scope

### Goals

- Present photography and film work through a distinctive, editorial visual system with responsive layouts and deliberate motion.
- Organize the public site around selected work, service context, about information, testimonials, and a contact/inquiry conversion path.
- Provide typed Express endpoints for public content, contact submissions, testimonials, and admin-managed portfolio records.
- Store portfolio metadata in MongoDB/Mongoose and media in Blob Storage, with seed data for local development and preview environments.
- Protect admin operations without requiring visitor accounts.
- Ship an accessible, SEO-ready frontend with optimized images, stable loading states, and usable keyboard/mobile interactions.

### Out of Scope

- Public user accounts, visitor dashboards, payments, booking calendar synchronization, or a full CMS UI.
- Directly storing large binary media in MongoDB.
- Treating Instagram as the source of truth; integration is an optional import/display boundary with graceful fallback.

## 3. Information Architecture & User Flows

### Public routes

- `/`: Full-bleed featured reel/hero, selected projects, short positioning statement, testimonial highlight, and a direct inquiry CTA. The first viewport identifies the photographer and shows actual work rather than a generic landing-page explanation.
- `/work`: Filterable portfolio index grouped by category such as photography, film, weddings, editorial, and commercial.
- `/work/[slug]`: Project detail with hero media, narrative, credits, gallery/video embeds, services, and related projects.
- `/about`: Biography, approach, services, location/availability, and supporting portrait or studio imagery.
- `/journal`: Optional editorial list for behind-the-scenes stories and Instagram-adjacent updates; hide navigation when no entries exist.
- `/contact`: Inquiry form with project type, date, budget range, message, name, email, and consent. Submit success and failure states remain inline and accessible.

### Shared frontend structure

Use the App Router with server-rendered data reads where practical, route-level loading/error boundaries, a persistent header/footer, skip link, responsive navigation, and a media lightbox implemented as a focused client component. Keep the public route hierarchy shallow and make project cards linkable, keyboard-operable, and meaningful without images.

### Admin boundary

Admin CRUD is API-only in the first delivery. The protected endpoints support portfolio items, testimonials, and inquiry status; a future admin UI can consume the same contract without changing public routes.

## 4. Technical Architecture & Services

### Frontend service

- Next.js 16 App Router with TypeScript.
- Tailwind CSS v4 for layout tokens and component styling.
- Framer Motion for restrained page transitions, staggered reveals, and lightbox transitions; respect `prefers-reduced-motion`.
- `next/image` for responsive image sizing, remote-host allowlisting, blur placeholders, and priority loading only for the hero/LCP media.
- `next/font` with a display serif paired with a clean sans-serif body face; avoid default starter typography.
- A small typed API client in `lib/api/` reads `NEXT_PUBLIC_API_URL`, normalizes errors, and keeps server/client usage explicit.

### Backend service

- TypeScript Node.js service in `server/`, built with Express, Mongoose, Zod (or an equivalent schema validator), Nodemailer, and a structured logger.
- `server/src/app.ts` configures middleware and routes; `server/src/index.ts` loads environment variables, connects to MongoDB, and starts the listener.
- `server/src/config/` validates environment variables at boot.
- `server/src/models/`, `server/src/routes/`, `server/src/controllers/`, `server/src/services/`, `server/src/middleware/`, and `server/src/scripts/` keep persistence, HTTP, business logic, protection, and seed operations separate.
- Standard response envelope: `{ data, error, meta }`; centralized error middleware maps validation, not-found, rate-limit, and unexpected errors to stable status codes.

### API routes

- `GET /api/health`: liveness/readiness response without database secrets.
- `GET /api/portfolio`: public published portfolio list with category/tag filtering and pagination.
- `GET /api/portfolio/:slug`: public published project detail.
- `GET /api/testimonials`: public approved testimonials.
- `POST /api/inquiries`: public contact submission with validation, rate limiting, honeypot/spam checks, persistence, and email notification.
- `GET /api/admin/portfolio`, `POST /api/admin/portfolio`, `PATCH /api/admin/portfolio/:id`, `DELETE /api/admin/portfolio/:id`: protected portfolio CRUD.
- `GET /api/admin/testimonials`, `POST /api/admin/testimonials`, `PATCH /api/admin/testimonials/:id`, `DELETE /api/admin/testimonials/:id`: protected testimonial CRUD.
- `GET /api/admin/inquiries`, `PATCH /api/admin/inquiries/:id`: protected inquiry review/status management.
- `POST /api/admin/media/signature`: protected short-lived upload/signature endpoint for Blob Storage; never expose storage credentials to the browser.
- `GET /api/instagram`: optional server-side integration boundary with timeout, caching, and an empty-state fallback when credentials or the provider are unavailable.

## 5. Data Model, Seed Data & Storage

### Mongoose schemas

- `PortfolioItem`: `title`, unique `slug`, `category`, `excerpt`, `description`, `coverMedia`, `media[]`, `featured`, `published`, `sortOrder`, `services[]`, `location`, `shootDate`, `credits[]`, `seo`, `createdAt`, and `updatedAt`. Index `slug`, `published`, `featured`, `category`, and `sortOrder` for public listing queries.
- `Testimonial`: `quote`, `clientName`, `clientRole`, `projectSlug` reference or denormalized label, `image`, `featured`, `approved`, `sortOrder`, timestamps. Index `approved` and `featured`.
- `Inquiry`: `name`, `email`, `phone`, `projectType`, `eventDate`, `budget`, `message`, `consent`, `status` (`new`, `reviewing`, `replied`, `archived`), `source`, `emailDeliveryStatus`, timestamps. Index `status`, `createdAt`, and `email`.
- `AdminAuditLog` (recommended): `action`, `resource`, `resourceId`, `requestId`, `ipHash`, timestamp, and non-sensitive actor label to support basic operational traceability without storing raw credentials.

Media fields store Blob URLs, alt text, width, height, aspect ratio, poster URL, and optional focal-point metadata. MongoDB stores metadata and relationships only; Blob Storage stores originals/derivatives under controlled containers and immutable or versioned keys.

### Seed data

Add `server/src/scripts/seed.ts` and a repeatable `npm run seed` command. Seed at least six published portfolio projects spanning multiple categories, three approved testimonials, one draft project, and representative inquiries in each status. Use stable slugs and placeholder media URLs from the configured media base URL so local and preview environments render predictably. The script must be idempotent using upserts and must refuse production unless an explicit confirmation variable is set.

## 6. Design System & UI

**Component Library**: Tailwind CSS v4 with accessible custom React primitives; use Radix UI primitives only where a dependable dialog, focus trap, or disclosure behavior is needed.

**Visual Direction**: Art-directed editorial minimalism: near-black ink, warm ivory, muted stone, and one restrained rust/cobalt accent. Use a high-contrast display serif for titles, a neutral grotesk for navigation and metadata, generous negative space, and image-led composition. Avoid generic dashboard cards, purple gradients, and decorative blobs. Sections should be full-width bands with constrained inner layouts; repeated projects may use simple framed tiles with no nested cards.

**Core Components**: `SiteHeader`, `MobileNav`, `SkipLink`, `HeroMedia`, `ProjectGrid`, `ProjectCard`, `FilterBar`, `ProjectGallery`, `LightboxDialog`, `TestimonialQuote`, `InquiryForm`, `Button`, `Field`, `StatusMessage`, `SiteFooter`, `SkeletonProjectCard`, and `ErrorState`.

**Interaction Rules**: Use icon buttons for lightbox controls and menu actions with tooltips/accessible labels; use text buttons only for clear commands. Keep controls at stable dimensions, provide visible focus states, make filters keyboard accessible, and use motion for sequencing rather than constant decoration. Every image has deliberate alt text or an empty alt when purely decorative.

## 7. Security, Admin Protection & Environment

Admin access does not require public authentication. Protect `/api/admin/*` with a server-side `ADMIN_API_KEY` compared using a timing-safe method, require the key in a dedicated header, apply strict CORS origin checks, rate limit admin and inquiry routes, validate every body/query/param, and write audit records for mutations. In production, place the API behind HTTPS and optionally add an IP allowlist or platform access control. Never log the admin key, SMTP credentials, MongoDB URI, or raw inquiry contents beyond operational need.

Required environment variables:

- Frontend: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_MEDIA_BASE_URL`, optional `NEXT_PUBLIC_INSTAGRAM_ENABLED`.
- Backend: `NODE_ENV`, `PORT`, `MONGODB_URI`, `ADMIN_API_KEY`, `FRONTEND_ORIGIN`, `PUBLIC_SITE_URL`, `BLOB_STORAGE_ACCOUNT`, `BLOB_STORAGE_CONTAINER`, `BLOB_STORAGE_CONNECTION_STRING` or managed-identity equivalent, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, optional `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_USER_ID`, `LOG_LEVEL`, and `RATE_LIMIT_WINDOW_MS`/`RATE_LIMIT_MAX`.

Provide `.env.example` files for both services, keep secrets in Vercel/Render/Heroku secret stores, and reject startup when required production variables are missing.

## 8. SEO, Accessibility & Quality

- Define metadata and Open Graph/Twitter cards per route, canonical URLs, descriptive project titles, and `app/sitemap.ts` plus `app/robots.ts`.
- Add JSON-LD for `Person`/`ProfessionalService`, `ImageObject` or `CreativeWork` project pages, and breadcrumbs where useful; never expose private inquiry data.
- Use semantic landmarks and heading order, skip navigation, keyboard navigation, focus trapping/restoration in the lightbox, `aria-live` form feedback, labels/errors associated with fields, adequate contrast, reduced-motion handling, and touch targets of at least 44px.
- Test responsive layouts at mobile, tablet, and wide desktop widths. Verify no layout shift from media by retaining dimensions/aspect ratios and using stable loading skeletons.
- Add unit tests for validators, Mongoose mapping, admin middleware, and inquiry service; API integration tests for public/admin route behavior; frontend tests for the inquiry form and lightbox keyboard flow; run lint, typecheck, build, and a production smoke check in CI.

## 9. CI/CD & Deployment

### CI

Use GitHub Actions on pull requests and pushes to the default branch. Install with the lockfile, run frontend lint/typecheck/build, run backend lint/typecheck/tests, validate `.env.example` consistency, and run a MongoDB service/container for API integration tests. Cache package-manager dependencies and fail on type or accessibility-critical test regressions.

### Frontend deployment

1. Create a Vercel project rooted at `ug` and connect the repository.
2. Configure `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SITE_URL`, and media variables per environment.
3. Allow the API domain and Blob media host in `next.config.ts` image configuration.
4. Configure preview deployments for pull requests and production deployment from the protected default branch.

### Backend deployment

1. Create a Render or Heroku Node service rooted at `ug/server` (or use a dedicated backend build workspace after scaffold generation).
2. Build with `tsc`, start with the compiled Express entry point, and expose `/api/health` for the platform health check.
3. Add all backend secrets to the platform secret manager, configure `FRONTEND_ORIGIN` to the Vercel production and preview origins as appropriate, and enable HTTPS.
4. Provision MongoDB Atlas network access, database user permissions, indexes, and backups. Provision Blob Storage container permissions with least privilege and lifecycle rules.
5. Run the idempotent seed command only for local/preview environments or with explicit production confirmation; run a post-deploy smoke test for health, public portfolio, inquiry validation, and protected admin rejection.

## 10. Implementation Sequence & Acceptance Criteria

1. Establish shared TypeScript/config conventions, install frontend and backend dependencies, and create the Express service skeleton.
2. Implement Mongoose schemas, indexes, seed script, config validation, error handling, and public/admin routes.
3. Implement the portfolio visual system, layout, route structure, API client, media components, inquiry form, and responsive states in the Next.js app.
4. Add Blob upload boundary, Nodemailer delivery, optional Instagram adapter, rate limits, admin protection, audit logging, and operational logging.
5. Add SEO/accessibility metadata, tests, GitHub Actions, deployment configuration, and documentation.
6. Verify `npm run lint`, frontend/backend typechecks, tests, `npm run build`, seeded local browsing, inquiry email behavior with a safe SMTP test account, admin authorization failures, and production health checks.

Acceptance requires a responsive public portfolio that renders seeded projects from the API, optimized media with meaningful alt text, a validated contact flow that persists and emails inquiries, rejected unauthenticated admin mutations, documented environment setup, passing CI, and successful Vercel plus Render/Heroku deployment against MongoDB Atlas and Blob Storage.
