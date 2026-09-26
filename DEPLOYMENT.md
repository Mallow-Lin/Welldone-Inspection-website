# Vercel deployment preparation

This project is ready for a Vercel Preview deployment from the `redesign`
branch. A preview does not require changing the production Namecheap domain or
DNS records.

## 1. Create the preview project

1. In Vercel, import the Git repository that contains this Next.js project.
2. Keep the production branch set to `main`. Do not merge `redesign` into it.
3. Confirm the framework preset is **Next.js**.
4. Use the repository root as the Root Directory.
5. Leave Vercel's detected settings in place:
   - Install command: detected from `pnpm-lock.yaml`
   - Build command: `pnpm build`
   - Output directory: Next.js default (`.next`)
   - Node.js: 22.x, matching `package.json`
6. Deploy the `redesign` branch as a Preview deployment only.

Preview deployments receive `VERCEL_ENV=preview` automatically. This project
uses that value to serve `noindex, nofollow` metadata and a disallowing
`robots.txt`. A later Vercel Production deployment receives
`VERCEL_ENV=production` and becomes indexable.

## 2. Configure server-only environment variables

Add the following variables in **Project Settings → Environment Variables**.
Configure them for Preview before testing the form, and later configure the
approved production values for Production:

- `RESEND_API_KEY`: Resend API key with permission to send email.
- `CONTACT_FORM_TO_EMAIL`: verified Welldone inbox that receives inquiries.
- `CONTACT_FORM_FROM_EMAIL`: sender using a verified Resend domain, for example
  `Welldone Website <website@welldoneinspection.com>`.

Do not add the `NEXT_PUBLIC_` prefix. The application reads these values only
in the server-side `/api/inquiry` route. Redeploy after adding or changing an
environment variable.

## 3. Verify the email sending domain

Before production form testing, add the sending domain in Resend and complete
the DNS records shown by Resend for domain verification. The domain used in
`CONTACT_FORM_FROM_EMAIL` must be verified. This is an email-delivery setup
step; it does not require pointing the website domain to Vercel.

Do not change the Namecheap website DNS records during preview review. Add only
the email authentication records explicitly supplied by Resend after the site
owner approves that separate change.

## 4. Preview acceptance checks

- Open every route listed in `app/sitemap.ts` on desktop and mobile.
- Submit a test inquiry and confirm it reaches `CONTACT_FORM_TO_EMAIL`.
- Confirm Reply opens the visitor's submitted email address.
- Test the prepared-email fallback by temporarily removing the Preview email
  variables, then restore them and redeploy.
- Confirm `/robots.txt` disallows crawling on the Preview URL.
- Review Open Graph sharing, keyboard navigation, tap-to-call links, and the
  mobile contact bar.

## 5. Production release — only after approval

1. Re-run `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`.
2. Confirm the Production environment variables are present.
3. Merge only after the site owner approves the preview.
4. Deploy to the Vercel Production environment.
5. Connect `welldoneinspection.com` and change Namecheap DNS only as a separate,
   explicitly approved launch step.
6. Verify the canonical URLs, sitemap, inquiry delivery, and production
   `robots.txt` after the domain is connected.
