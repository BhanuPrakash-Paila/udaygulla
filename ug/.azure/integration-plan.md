# Integration Handoff

## Backend

- Folder: `server/`
- Install: `npm install`
- Run: `npm run dev` (port `4000`)
- Build: `npm run build`
- Health: `GET /api/health`
- Entry: `server/src/index.ts`

## Frontend

- Folder: repository root (`ug/`)
- Install: `npm install`
- Dev: `npm run dev` (port `3000`)
- Build: `npm run build`
- API base: `NEXT_PUBLIC_API_URL`
- Inquiry seam: `components/inquiry-form.tsx` currently posts to `/api/inquiries`; add the typed shared client under `lib/api/` when wiring portfolio/testimonial reads.
- Mock files to delete: none currently; seeded API content is the source of truth.

## API inventory

- `GET /api/health`
- `GET /api/portfolio`
- `GET /api/portfolio/:slug`
- `GET /api/testimonials`
- `POST /api/inquiries`
- `GET /api/instagram`
- `GET /api/admin/portfolio` (x-admin-api-key)
- `POST /api/admin/portfolio` (x-admin-api-key)
- `PATCH /api/admin/portfolio/:id` (x-admin-api-key)
- `DELETE /api/admin/portfolio/:id` (x-admin-api-key)
- `GET /api/admin/testimonials` (x-admin-api-key)
- `POST /api/admin/testimonials` (x-admin-api-key)
- `PATCH /api/admin/testimonials/:id` (x-admin-api-key)
- `DELETE /api/admin/testimonials/:id` (x-admin-api-key)
- `GET /api/admin/inquiries` (x-admin-api-key)
- `PATCH /api/admin/inquiries/:id` (x-admin-api-key)
- `POST /api/admin/media/signature` (x-admin-api-key)

## Database

- MongoDB/Mongoose; models live in `server/src/models/`.
- Seed command: `npm run seed` from `server/`; idempotent upserts, refuses production without confirmation.
- Migration directory: not applicable for MongoDB; indexes are declared in Mongoose schemas.
- Connection env: `MONGODB_URI`.
- Do not create seed data beyond the explicit repeatable `server/src/scripts/seed.ts` command.

## Shared types and services

- Shared types: colocated server schemas and frontend request shapes; introduce a shared package only if the live client needs cross-workspace generated types.
- Essential: Next.js frontend, Express API, MongoDB Atlas, SMTP inquiry delivery.
- Enhancement: Azure Blob Storage signing boundary, optional Instagram adapter, admin UI.
