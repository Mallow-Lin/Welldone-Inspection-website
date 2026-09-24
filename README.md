# WellDone Inspection website redesign

Phase 1 rebuild for WellDone Inspection, Inc. using TypeScript, the Next.js App
Router API, Tailwind CSS, and reusable React components.

## Local development

```bash
pnpm install
pnpm dev
```

The development server prints the local preview URL. Before review or release:

```bash
pnpm lint
pnpm build
```

## Contact form configuration

The form posts to `/api/inquiry`. Email delivery is server-side so no private
key is exposed to browser code. Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`: server-side Resend API key
- `CONTACT_FORM_TO_EMAIL`: destination address
- `CONTACT_FORM_FROM_EMAIL`: sender on a domain verified with Resend

If those variables are absent or delivery fails, the form presents a prepared
email draft so the visitor can still contact WellDone. Do not prefix any of
these variables with `NEXT_PUBLIC_`.

## Content and assets

- `public/welldone-logo.png` and `public/welldone-mark.png` are localized
  copies of the existing WellDone brand assets.
- `public/construction.png` is the existing localized construction image used
  as general visual context, not as a representation of a named project.
- Project names and descriptions come from the previous WellDone website.
  Third-party hotlinked project images were intentionally excluded. Add only
  owner-approved project photos under `public/projects/` in a later phase.

## Release safety

Redesign work belongs on the `redesign` branch. Do not merge it into the
production branch or deploy it until the site owner approves the design.
