import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Phone } from 'lucide-react';
import { CTA } from '@/components/cta';
import { projects } from '@/lib/projects';
import { services } from '@/lib/services';

export const metadata = {
  title: 'NYC Special Inspections, Asbestos Surveys & Engineering',
  description:
    'Welldone Inspection supports NYC property owners, contractors, architects, and project teams with Special Inspections, Asbestos Surveys / ACP-5, and Engineering Assessments.',
  alternates: { canonical: '/' },
};

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

const reasons = [
  [
    'Engineer-led perspective',
    'Structural engineering and construction oversight experience informs how we approach field conditions and project requirements.',
  ],
  [
    'Focused project scope',
    'We start with the address, plans, observed conditions, and intended use so the service can be defined around the actual project.',
  ],
  [
    'Direct communication',
    'As a small business, Welldone emphasizes responsiveness, attention to detail, and accountability throughout the engagement.',
  ],
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
            Welldone supports New York City property owners, contractors,
            architects, and project teams with focused inspection, survey, and
            engineering-related services.
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
        <aside className="hero-technical" aria-label="Primary service areas">
          <div className="technical-grid-label">
            <span>WELLDONE / NYC</span>
            <span>FIELD + REPORTING SERVICES</span>
          </div>
          <div className="hero-service-index">
            {services.map((service) => (
              <Link href={`/${service.slug}`} key={service.key}>
                <span>{service.number}</span>
                <strong>{service.short}</strong>
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
          <div className="technical-footer">
            <span>INSPECTION</span>
            <span>SURVEY</span>
            <span>ASSESSMENT</span>
          </div>
        </aside>
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
            <h2>Three core services for NYC properties and construction.</h2>
            <p>
              Each service has a dedicated page for project-specific information
              and a direct path to request an inspection or quote.
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
              <ul className="service-card-details">
                {service.homeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="service-card-link">
                Explore service <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="intro-band section qualifications-band">
        <div>
          <p className="eyebrow">02 / QUALIFICATIONS &amp; EXPERIENCE</p>
          <h2>
            Engineering experience.
            <br />
            <span>Applied in the field.</span>
          </h2>
          <p className="qualifications-copy">
            Led by James Jiang, P.E., Welldone brings more than 10 years of
            structural engineering and construction oversight experience to its
            inspection and engineering-related work.
          </p>
          <Link href="/about" className="text-link">
            Review our qualifications <ArrowUpRight size={18} />
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

      <section className="section client-types">
        <div>
          <p className="eyebrow dark">03 / WHO WE SERVE</p>
          <h2>Professional support for every side of the project.</h2>
        </div>
        <div className="client-type-grid">
          {clientTypes.map((client) => (
            <span key={client}>{client}</span>
          ))}
        </div>
      </section>

      <section className="section selected-projects">
        <div className="section-heading">
          <p className="eyebrow dark">04 / SELECTED EXPERIENCE</p>
          <div>
            <h2>Experience across New York’s built environment.</h2>
            <p>
              Selected experience from the existing Welldone portfolio across
              commercial, cultural, and educational buildings.
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

      <section className="section why-welldone">
        <div className="section-heading">
          <p className="eyebrow dark">05 / WHY WELLDONE</p>
          <div>
            <h2>Serious technical work. Direct project support.</h2>
          </div>
        </div>
        <div className="process-grid">
          {reasons.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA
        title="Tell us what your project needs."
        href="/contact?intent=inspection"
        label="Request an inspection"
        secondaryHref="/contact?intent=quote"
        secondaryLabel="Get a quote"
      />
    </>
  );
}
