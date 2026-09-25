import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Phone } from 'lucide-react';
import { CTA } from '@/components/cta';
import { FAQ } from '@/components/faq';

const requestLink = '/contact?service=special-inspection&intent=inspection';
const quoteLink = '/contact?service=special-inspection&intent=quote';

const serviceCategories = [
  {
    number: '01',
    label: 'STRUCTURAL',
    title: 'Structural steel & connections',
    description:
      'Field inspection for structural work identified in the project documents and inspection requirements.',
    items: [
      'Structural steel',
      'Welding',
      'High-strength bolting',
      'Post-installed anchors',
      'Wood framing and shear walls',
    ],
  },
  {
    number: '02',
    label: 'CONCRETE & MASONRY',
    title: 'Concrete, masonry & material testing',
    description:
      'Inspection and testing support for concrete and masonry work, as applicable to the project scope.',
    items: [
      'Concrete placement and reinforcing steel',
      'Masonry construction',
      'TR2 concrete sampling and testing',
      'TR3 concrete design mix support',
      'Grout, mortar, core, and soil testing',
    ],
  },
  {
    number: '03',
    label: 'SOILS & FOUNDATIONS',
    title: 'Excavation, footings & deep foundations',
    description:
      'Observation of subsurface and foundation work listed for inspection on the project.',
    items: [
      'Soils and footing conditions',
      'Excavation and underpinning',
      'TR5 pile driving and drilling',
      'Steel H-piles and micropiles',
      'Helical piles, timber piles, and drilled caissons',
    ],
  },
  {
    number: '04',
    label: 'BUILDING SYSTEMS',
    title: 'Systems, enclosure & fire protection',
    description:
      'Applicable inspections for building systems and enclosure work identified in the approved scope.',
    items: [
      'Mechanical, plumbing, and electrical systems',
      'Sprinkler and standpipe systems',
      'Facade and curtain wall work',
      'EIFS and fireproofing',
      'Architectural inspection categories',
    ],
  },
  {
    number: '05',
    label: 'ENERGY CODE',
    title: 'TR8 energy code progress inspections',
    description:
      'Progress inspection and documentation for energy-code items identified for the project.',
    items: [
      'TR8 inspection scope review',
      'Applicable energy-code progress inspections',
      'Coordination with current drawings',
      'Field observation and supporting records',
      'Completion documentation when applicable',
    ],
  },
];

const processSteps = [
  [
    'Send project information',
    'Share the address, current drawings, listed inspections, and requested timing.',
  ],
  [
    'Review the inspection scope',
    'We review the available documents and discuss the inspections associated with the work.',
  ],
  [
    'Coordinate the field visit',
    'Confirm the work area, site contact, access, and a practical inspection date.',
  ],
  [
    'Observe and document',
    'The assigned inspector observes the applicable work and maintains project records.',
  ],
  [
    'Prepare documentation',
    'Inspection records and required completion documentation are prepared for the agreed scope.',
  ],
];

const projectInformation = [
  'Project address and borough',
  'DOB job or permit information, when applicable',
  'Approved or current drawings',
  'Required inspection type or inspection schedule',
  'Contractor and site contact information',
  'Requested inspection date and work status',
  'Relevant field condition or area of work',
];

const credentials = [
  'NYC DOB-registered Special Inspection Agency',
  'Multi-State Licensed Professional Engineer',
  'AWS Certified Welding Inspector',
  'ICC credentials',
  'ACI credentials',
  'MWBE-certified business',
];

const faqs = [
  [
    'What is a Special Inspection?',
    'A Special Inspection is a field inspection or test performed by qualified personnel for specific construction work identified in the approved documents and applicable requirements. The scope varies by project and inspection category.',
  ],
  [
    'When is Special Inspection required in NYC?',
    'Requirements depend on the approved drawings, project scope, and applicable NYC DOB requirements. The Applicant of Record identifies the required Special and Progress Inspections for the project.',
  ],
  [
    'What information do you need before scheduling?',
    'Send the project address, current drawings, required inspection type, site contact, work status, and requested inspection date. DOB job or permit information is also helpful when applicable.',
  ],
  [
    'How do I schedule an inspection?',
    'Use the Request an Inspection form or call (917) 213-1886. We will review the request, confirm the scope and site information, and discuss scheduling.',
  ],
  [
    'Can Welldone review the drawings to determine the inspection scope?',
    'We can review the current drawings and listed inspection requirements to discuss the requested scope. The approved construction documents and the project’s design professionals govern the required inspections.',
  ],
  [
    'Do you provide welding and structural steel inspections?',
    'Yes. Welldone provides structural steel, welding, and high-strength bolting inspections when those categories are part of the project’s required inspection scope.',
  ],
  [
    'Do you provide TR8 inspections?',
    'Yes. Welldone provides applicable TR8 energy code progress inspections. The specific inspection items depend on the project’s energy analysis, drawings, and identified TR8 requirements.',
  ],
];

export function SpecialInspectionsPage() {
  return (
    <>
      <section className="service-hero section special-inspections-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span>NYC Special Inspections</span>
        </div>
        <div className="special-hero-grid">
          <div>
            <p className="eyebrow">SPECIAL INSPECTIONS · NEW YORK CITY</p>
            <h1>NYC Special Inspection Services</h1>
            <p className="landing-intro">
              Welldone Inspection Inc. provides special inspection services for
              construction, alteration, and building projects throughout New
              York City.
            </p>
            <div className="actions">
              <Link className="action primary" href={requestLink}>
                Request an inspection <ArrowUpRight size={19} />
              </Link>
              <a className="text-link" href="tel:+19172131886">
                <Phone size={16} />
                Call (917) 213-1886
              </a>
            </div>
            <p className="special-agency-line">
              NYC DOB-registered Special Inspection Agency
            </p>
          </div>
          <aside
            className="special-hero-register"
            aria-label="Technical reports"
          >
            <div>
              <span>NYC / SPECIAL INSPECTIONS</span>
              <span>FIELD + DOCUMENTATION</span>
            </div>
            <dl>
              <div>
                <dt>TR1</dt>
                <dd>Special Inspections</dd>
              </div>
              <div>
                <dt>TR2 / TR3</dt>
                <dd>Concrete Testing &amp; Mix</dd>
              </div>
              <div>
                <dt>TR5</dt>
                <dd>Pile Driving / Drilling</dd>
              </div>
              <div>
                <dt>TR8</dt>
                <dd>Energy Code Inspections</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section special-overview">
        <div>
          <p className="eyebrow dark">
            WHEN SPECIAL INSPECTION ENTERS THE PROJECT
          </p>
          <h2>Start with the drawings and required inspection scope.</h2>
        </div>
        <div className="special-overview-copy">
          <p>
            Special and Progress Inspection requirements are identified for the
            work by the project’s design professionals and reflected in the
            applicable construction documents and technical reports.
          </p>
          <p>
            Requirements vary by project. Share the current plans, project
            address, and listed inspection categories so we can review the
            request and discuss the appropriate next step.
          </p>
          <a
            className="official-link"
            href="https://www.nyc.gov/site/buildings/dob/forms.page"
            target="_blank"
            rel="noopener noreferrer"
          >
            NYC DOB forms and technical reports <ArrowUpRight size={13} />
          </a>
        </div>
      </section>

      <section className="section special-categories">
        <div className="special-section-heading">
          <p className="eyebrow dark">INSPECTION CATEGORIES</p>
          <div>
            <h2>Special inspections organized around the work.</h2>
            <p>
              Available services include the verified categories below.
              Project-specific scope is confirmed from current drawings and
              listed requirements.
            </p>
          </div>
        </div>
        <div className="special-category-grid">
          {serviceCategories.map((category) => (
            <article key={category.number}>
              <div className="special-category-top">
                <span>{category.number}</span>
                <span>{category.label}</span>
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section special-inline-cta">
        <div>
          <p className="eyebrow dark">READY TO COORDINATE?</p>
          <h2>Have inspection requirements listed on your plans?</h2>
          <p>
            Send the project address, current drawings, required inspection, and
            requested date.
          </p>
        </div>
        <div className="special-inline-actions">
          <Link className="action primary" href={requestLink}>
            Request an inspection <ArrowUpRight size={18} />
          </Link>
          <a className="text-link dark" href="tel:+19172131886">
            <Phone size={16} /> Call (917) 213-1886
          </a>
        </div>
      </section>

      <section className="section special-process">
        <div className="special-section-heading">
          <p className="eyebrow dark">HOW THE PROCESS WORKS</p>
          <div>
            <h2>From project information to field documentation.</h2>
            <p>
              A clear request helps define the inspection scope and coordinate
              field timing efficiently.
            </p>
          </div>
        </div>
        <ol>
          {processSteps.map(([title, description], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section special-ready">
        <div>
          <p className="eyebrow dark">INFORMATION TO HAVE READY</p>
          <h2>Help us understand the field request.</h2>
          <p>
            You do not need every item before contacting us, but these details
            help reduce follow-up and clarify the requested inspection.
          </p>
          <Link className="text-link dark" href={requestLink}>
            Send project information <ArrowRight size={17} />
          </Link>
        </div>
        <ul>
          {projectInformation.map((item) => (
            <li key={item}>
              <Check size={17} /> {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section special-credentials">
        <div className="special-section-heading">
          <p className="eyebrow dark">WHY WELLDONE</p>
          <div>
            <h2>Engineer-led inspection support for NYC projects.</h2>
            <p>
              Technical credentials support field observation, documentation,
              and direct communication with the project team.
            </p>
          </div>
        </div>
        <div className="special-credential-grid">
          {credentials.map((credential) => (
            <div key={credential}>
              <Check size={17} />
              <span>{credential}</span>
            </div>
          ))}
        </div>
        <div className="special-context-links">
          <Link href="/about">
            Review qualifications <ArrowUpRight size={16} />
          </Link>
          <Link href="/projects">
            View professional experience <ArrowUpRight size={16} />
          </Link>
          <Link href="/engineering-reports">
            Engineering reports &amp; assessments <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section special-faq">
        <div>
          <p className="eyebrow dark">SPECIAL INSPECTION FAQ</p>
          <h2>Practical answers before scheduling.</h2>
          <p className="body-copy">
            Project requirements are specific to the approved drawings, work
            scope, and applicable NYC DOB requirements.
          </p>
        </div>
        <FAQ items={faqs} />
      </section>

      <CTA
        title="Need a Special Inspector for Your NYC Project?"
        description="Send us the project address, drawings, and required inspection scope, and we can review the request."
        href={requestLink}
        label="Request an inspection"
        secondaryHref={quoteLink}
        secondaryLabel="Get a quote"
      />
    </>
  );
}
