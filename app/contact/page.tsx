import type { Metadata } from 'next';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { InquiryForm } from '@/components/inquiry-form';
import { services } from '@/lib/services';
export const metadata: Metadata = {
  title: 'Request an Inspection or Get a Quote in NYC',
  description:
    'Contact WellDone Inspection for NYC Special Inspections, Asbestos Surveys / ACP-5, and Engineering Reports. Call (917) 213-1886 or send your project details.',
  alternates: { canonical: '/contact' },
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; intent?: string }>;
}) {
  const query = await searchParams;
  const intent = query.intent === 'inspection' ? 'inspection' : 'quote';
  const initialService = services.some(
    (service) => service.key === query.service,
  )
    ? query.service!
    : intent === 'inspection'
      ? 'special-inspection'
      : '';
  return (
    <section className="section contact-page">
      <div>
        <p className="eyebrow dark">LET’S GET YOUR PROJECT STARTED</p>
        <h1>
          Tell us what
          <br />
          you’re building.
        </h1>
        <p className="contact-intro">
          Request an inspection, ask for a quote, or talk through an engineering
          concern. A few project details help us give you a useful next step.
        </p>
        <div className="contact-methods">
          <a href="tel:+19172131886">
            <Phone size={19} />
            <span>
              <small>CALL OUR TEAM</small>(917) 213-1886
            </span>
            <ArrowUpRight size={18} />
          </a>
          <a href="mailto:welldoneinspect@gmail.com">
            <Mail size={19} />
            <span>
              <small>EMAIL US</small>welldoneinspect@gmail.com
            </span>
            <ArrowUpRight size={18} />
          </a>
          <div>
            <MapPin size={19} />
            <span>
              <small>BASED IN NEW YORK CITY</small>10 Halletts Point
              <br />
              Queens, NY 11102
            </span>
          </div>
        </div>
      </div>
      <InquiryForm
        key={`${initialService}:${intent}`}
        initialService={initialService}
        intent={intent}
      />
    </section>
  );
}
