import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services';
import { CTA } from '@/components/cta';
export const metadata: Metadata = {
  title: 'NYC Inspection, Asbestos & Engineering Services',
  description:
    'Explore NYC Special Inspections, Asbestos Surveys and ACP-5 support, and Engineering Reports and Assessments from WellDone Inspection.',
  alternates: { canonical: '/services' },
};
export default function Services() {
  return (
    <>
      <section className="section page-heading">
        <p className="eyebrow dark">OUR SERVICES · NEW YORK CITY</p>
        <h1>
          Three ways to move
          <br />
          your project forward.
        </h1>
        <p>
          Inspection expertise, environmental assessment support, and
          engineering insight—organized around what your property needs.
        </p>
      </section>
      <section className="section service-directory">
        {services.map((s) => (
          <Link key={s.key} href={`/${s.slug}`}>
            <span className="directory-number">{s.number}</span>
            <div>
              <p className="eyebrow dark">{s.label}</p>
              <h2>{s.short}</h2>
              <p>{s.card}</p>
            </div>
            <ArrowUpRight size={30} />
          </Link>
        ))}
      </section>
      <CTA />
    </>
  );
}
