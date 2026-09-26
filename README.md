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

The static form sends through the existing Gmail-connected EmailJS service.
Copy `.env.example` to `.env.local` for local development. The browser build
uses these public EmailJS identifiers:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

The verified values were recovered from the latest implementation of the old
Welldone site. These are intentionally public identifiers embedded in browser
code, not private server credentials. If EmailJS is unavailable, the form
presents a prepared email draft so the visitor can still contact Welldone.

The form includes browser validation, a hidden honeypot field, a minimum
completion-time check, and EmailJS browser rate limiting.

## Static GitHub Pages release

See [`GITHUB_PAGES.md`](./GITHUB_PAGES.md) for the static-export workflow,
EmailJS configuration, custom-domain file, and release checklist. `pnpm build`
generates the complete site in `out/`.

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
production branch or deploy it until the site owner approves the release. The
existing Namecheap DNS remains unchanged.
