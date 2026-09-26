# Welldone Inspection website redesign

Rebuild for Welldone Inspection Inc. using TypeScript, the Next.js App Router,
Tailwind CSS, and reusable React components.

## Local development

```bash
pnpm install
pnpm dev
```

The development server prints the local preview URL. Before review or release:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## Contact form configuration

The form posts to `/api/inquiry`. Email delivery is server-side so no private
key is exposed to browser code. Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`: server-side Resend API key
- `CONTACT_FORM_TO_EMAIL`: destination address
- `CONTACT_FORM_FROM_EMAIL`: sender on a domain verified with Resend

If those variables are absent or delivery fails, the form presents a prepared
email draft so the visitor can still contact Welldone. Do not prefix any of
these variables with `NEXT_PUBLIC_`.

The form includes server-side validation, a hidden honeypot field, a minimum
completion-time check, request-size limits, and same-site request screening.
These are basic controls rather than a substitute for platform-level abuse
monitoring.

## Vercel preview and release

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the preview-deployment workflow,
environment variables, Resend domain verification, and final production
checklist. Vercel Preview deployments are automatically marked `noindex`; the
Production environment is indexable.

## Content and assets

- `public/welldone-logo.png` and `public/welldone-mark.png` are localized
  copies of the existing Welldone brand assets.
- `public/construction.png` is retained from the earlier local build but is
  not displayed in Phase 1 because it is not a verified Welldone project photo.
- Project names and descriptions come from the previous Welldone website.
  Third-party hotlinked project images were intentionally excluded. Add only
  owner-approved project photos under `public/projects/` in a later phase.

## Release safety

Redesign work belongs on the `redesign` branch. Do not merge it into the
production branch, attach the production domain, or change DNS until the site
owner approves the release.
