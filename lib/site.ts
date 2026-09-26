export const SITE_ORIGIN = 'https://welldoneinspection.com';
export const IS_PREVIEW = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV !== 'production'
  : process.env.NODE_ENV !== 'production';
export const siteDescription =
  'NYC Special Inspections, Asbestos Surveys / ACP-5, and Engineering Reports & Assessments. Request an inspection or get a quote from Welldone Inspection.';
