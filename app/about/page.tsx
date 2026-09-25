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
          Small team focus.
          <br />
          Serious expertise.
        </h1>
        <p>
          A New York City inspection and engineering practice built on technical
          rigor, direct communication, and personal accountability.
        </p>
      </section>
      <section className="about-feature">
        <div className="about-brand-panel">
          <Image
            src="/welldone-logo.png"
            alt="Welldone Inspection Inc."
            width={1280}
            height={688}
            sizes="(max-width: 680px) 82vw, 42vw"
          />
          <div>
            <span>NEW YORK CITY</span>
            <span>INSPECTION + ENGINEERING</span>
          </div>
        </div>
        <div>
          <p className="eyebrow">ENGINEER-LED, FROM THE START</p>
          <h2>
            Experience that
            <br />
            reaches the field.
          </h2>
          <p>
            Welldone Inspection Inc. is a New York City–based, DOB-registered
            Special Inspection Agency led by James Jiang, P.E.
          </p>
          <p>
            Our founder brings over 10 years of experience in structural
            engineering and construction oversight. That background informs how
            we approach inspections, assess conditions, and communicate
            findings.
          </p>
          <div className="signature">
            James Jiang, P.E.<span>DIRECTOR · WELLDONE INSPECTION</span>
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
          {[
            'NY / NJ licensed Professional Engineer',
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
