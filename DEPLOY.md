# Deploy to Vercel

1. Import this repository into Vercel and select the `v2` branch (or your production branch).
2. Confirm build settings:
   - Framework: `Next.js`
   - Install: `npm install`
   - Build: `npm run build`
3. Add environment variables in Vercel Project Settings:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
4. Keep `public/CNAME` in the repo and set domain in Vercel to `welldoneinspection.com`.
5. Update DNS to Vercel:
   - Apex/root `@`: A record to `76.76.21.21`
   - `www`: CNAME to `cname.vercel-dns.com`
6. Run a production redeploy after DNS propagates.
