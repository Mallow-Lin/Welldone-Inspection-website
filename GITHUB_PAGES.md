# GitHub Pages deployment

The approved deployment architecture is:

```text
GitHub repository -> GitHub Pages -> welldoneinspection.com
```

The Next.js application is configured with `output: 'export'` and writes the
complete static site to `out/`. No `basePath` is used because the production
site is served from the custom root domain.

## Automated workflow

`.github/workflows/deploy-pages.yml` uses the official GitHub Pages Actions
flow to:

1. install the pinned pnpm dependencies;
2. run lint and TypeScript checks;
3. build the static Next.js export;
4. upload `out/` as the Pages artifact; and
5. deploy the artifact to the `github-pages` environment.

The workflow runs when an approved release reaches `master`, and it can also be
started manually. Work on `redesign` does not trigger a production deployment.

In the repository's **Settings -> Pages** screen, the source should be set to
**GitHub Actions** before the approved release. No Namecheap or DNS changes are
part of this setup.

## Custom domain

`public/CNAME` contains `welldoneinspection.com`. Next.js copies it into every
static export so GitHub Pages retains the existing custom domain. The
`.nojekyll` file ensures Pages serves Next.js `_next` assets directly.

## Contact form

The static contact form sends through the existing Gmail-connected EmailJS
service. Its three public identifiers were recovered from the latest existing
Welldone implementation and are supplied during the GitHub Actions build:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

They are public browser configuration, not server secrets. For local builds,
copy `.env.example` to `.env.local`. The form retains a prepared-email fallback
if EmailJS is unavailable.

## Local verification

```bash
cp .env.example .env.local
pnpm install
pnpm lint
pnpm exec tsc --noEmit
pnpm build
pnpm preview
```

Do not merge or deploy until the site owner approves the static build.
