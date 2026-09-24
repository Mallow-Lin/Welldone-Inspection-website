import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Phone } from 'lucide-react';
import { CTA } from '@/components/cta';
import { projects } from '@/lib/projects';
import { services } from '@/lib/services';

export const metadata = { alternates: { canonical: '/' } };

const qualifications = [
  'NY / NJ licensed Professional Engineer',
  'NYC DOB-registered Special Inspection Agency',
  'AWS Certified Welding Inspector',
  'ICC Master of Special Inspection',
  'ACI concrete inspection and testing credentials',
  'MWBE-certified business',
];

const clientTypes = [
  'Building Owners',
  'General Contractors',
  'Architects',
  'Developers',
  'Property Managers',
  'Commercial Clients',
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> NEW YORK CITY · INSPECTION &amp;
            ENGINEERING SERVICES
          </p>
          <h1>
            NYC Special Inspections, Asbestos Surveys &amp; Engineering
            Assessments
          </h1>
          <p className="hero-description">
            Engineer-led field services, clear documentation, and responsive
            project support for New York City properties and construction.
          </p>
          <div className="actions">
            <Link className="action primary" href="/contact?intent=inspection">
              Request an inspection <ArrowUpRight size={19} />
            </Link>
            <a className="text-link hero-call" href="tel:+19172131886">
              <Phone size={16} /> Call (917) 213-1886
            </a>
          </div>
          <div className="hero-proof">
            <span>DOB-registered Special Inspection Agency</span>
            <span aria-hidden="true">·</span>
            <span>NYC-based</span>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/construction.png"
            alt="Construction site and tower crane in New York City"
            width={2586}
            height={1355}
            sizes="(max-width: 680px) 100vw, 48vw"
            fetchPriority="high"
          />
          <div className="image-caption">
            <span>
              FIELD EXPERIENCE.
              <br />
              CLEAR DIRECTION.
            </span>
            <span className="image-caption-number">NYC / 01</span>
          </div>
        </div>
      </section>

      <div className="credential-strip" aria-label="Professional credentials">
        <span>ENGINEER-LED. DETAIL-DRIVEN.</span>
        <span>NY &amp; NJ Licensed P.E.</span>
        <span>AWS · ICC · ACI</span>
        <span>MWBE Certified</span>
      </div>

      <section className="section services-intro" id="services">
        <div className="section-heading">
          <p className="eyebrow dark">01 / PRIMARY SERVICES</p>
          <div>
            <h2>Three ways we help move NYC projects forward.</h2>
            <p>
              Focused inspection, survey, and engineering support for building
              owners and project teams.
            </p>
          </div>
          <Link className="text-link dark" href="/services">
            View all services <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link
              href={`/${service.slug}`}
              className="service-card"
              key={service.key}
            >
              <div className="service-top">
                <span>{service.number}</span>
                <ArrowUpRight size={24} />
              </div>
              <span className="small-label">{service.label}</span>
              <h3>{service.short}</h3>
              <p>{service.card}</p>
              <span className="service-card-link">
                Explore service <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="intro-band section qualifications-band">
        <div>
          <p className="eyebrow">02 / WHY WELLDONE</p>
          <h2>
            Technical expertise.
            <br />
            <span>Personal accountability.</span>
          </h2>
          <p className="qualifications-copy">
            Led by James Jiang, P.E., WellDone brings more than 10 years of
            structural engineering and construction oversight experience to the
            field—backed by direct communication and careful documentation.
          </p>
          <Link href="/about" className="text-link">
            About our qualifications <ArrowUpRight size={18} />
          </Link>
        </div>
        <ul className="home-qualification-list">
          {qualifications.map((qualification) => (
            <li key={qualification}>
              <Check size={17} /> {qualification}
            </li>
          ))}
        </ul>
      </section>

      <section className="section selected-projects">
        <div className="section-heading">
          <p className="eyebrow dark">03 / SELECTED EXPERIENCE</p>
          <div>
            <h2>Experience across New York’s built environment.</h2>
            <p>
              Selected project experience from the existing WellDone portfolio.
              Ask us about relevant inspection scope and experience for your
              building type.
            </p>
          </div>
          <Link className="text-link dark" href="/projects">
            View projects <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="home-project-grid">
          {projects.slice(0, 3).map((project) => (
            <article key={project.number}>
              <span>{project.number}</span>
              <p className="eyebrow dark">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section client-types">
        <div>
          <p className="eyebrow dark">04 / WHO WE SUPPORT</p>
          <h2>Professional support for every side of the project.</h2>
        </div>
        <div className="client-type-grid">
          {clientTypes.map((client) => (
            <span key={client}>{client}</span>
          ))}
        </div>
      </section>

      <section className="section home-process">
        <div className="section-heading">
          <p className="eyebrow dark">05 / A CLEAR NEXT STEP</p>
          <div>
            <h2>From first call to defined scope.</h2>
          </div>
        </div>
        <div className="process-grid">
          {[
            [
              '01',
              'Share your project',
              'Tell us the address, scope, and service you need. Plans and photos help us understand the work.',
            ],
            [
              '02',
              'Define the scope',
              'We review your needs and discuss the appropriate services, pricing, and scheduling.',
            ],
            [
              '03',
              'Move forward',
              'With the scope agreed, we coordinate the next steps for your inspection, survey, or assessment.',
            ],
          ].map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA
        title="Tell us what your project needs."
        href="/contact?intent=inspection"
      />
    </>
  );
}
