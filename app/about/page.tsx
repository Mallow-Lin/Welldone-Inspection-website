import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { CTA } from '@/components/cta';
export const metadata: Metadata = {
  title: 'About Our NYC Inspection & Engineering Practice',
  description:
    'Meet Welldone Inspection, a NYC-based, engineer-led Special Inspection Agency founded by James Jiang, P.E. Technical expertise with personal accountability.',
  alternates: { canonical: '/about' },
};
export default function About() {
  return (
    <>
      <section className="section page-heading">
        <p className="eyebrow dark">ABOUT WELLDONE</p>
        <h1>
          Engineer-led.
          <br />
          Detail-driven.
          <br />
          Built for NYC projects.
        </h1>
        <p>
          A New York City inspection and engineering practice built on technical
          rigor, direct communication, and personal accountability.
        </p>
      </section>
      <section className="about-feature">
        <figure className="about-founder-portrait">
          <Image
            src="/images/team/james-jiang-pe.webp"
            alt="James Jiang, P.E."
            width={800}
            height={1000}
            sizes="(max-width: 680px) 76vw, (max-width: 1000px) 300px, 320px"
            loading="eager"
          />
          <figcaption>
            <strong>James Jiang, P.E.</strong>
            <span>FOUNDER · PROFESSIONAL ENGINEER</span>
          </figcaption>
        </figure>
        <div>
          <p className="eyebrow">ENGINEER-LED, FROM THE START</p>
          <h2>
            Engineering experience
            <br />
            applied in the field.
          </h2>
          <p>
            Welldone Inspection Inc. is a New York City–based, DOB-registered
            Special Inspection Agency led by James Jiang, P.E.
          </p>
          <p>
            James Jiang’s professional background combines structural and
            geotechnical engineering, construction oversight, and field
            inspection. His multi-state P.E. licensure and verified inspection
            credentials support a detail-driven approach to NYC projects.
          </p>
          <div className="signature">
            James Jiang, P.E.
            <span>FOUNDER · PROFESSIONAL ENGINEER</span>
          </div>
        </div>
      </section>
      <section className="section qualifications">
        <div>
          <p className="eyebrow dark">TECHNICAL FOUNDATION</p>
          <h2>Qualified to look closer.</h2>
          <p className="body-copy">
            Our professional background combines engineering, field inspection,
            and construction oversight.
          </p>
        </div>
        <ul>
          <li className="pe-license-item">
            <Check size={16} />
            <span>
              Licensed Professional Engineer — <strong>NY</strong>, NJ, CT, PA,
              FL, KY, TX, VA, MA, MD, UT, MS, LA, AL
            </span>
          </li>
          {[
            'Structural and geotechnical background',
            'AWS Certified Welding Inspector',
            'ICC Master of Special Inspection',
            'ICC concrete, masonry, welding, bolting, and mechanical certifications',
            'ACI concrete inspection and testing credentials',
            'LEED AP · PMI Project Management Professionals',
            'MWBE-certified business',
          ].map((t) => (
            <li key={t}>
              <Check size={16} />
              {t}
            </li>
          ))}
        </ul>
      </section>
      <CTA />
    </>
  );
}
