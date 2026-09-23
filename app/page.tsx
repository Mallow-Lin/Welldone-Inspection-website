import { ArrowUpRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { services } from '@/lib/services';
import { CTA } from '@/components/cta';
export const metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> NEW YORK CITY · INSPECTIONS &
            ENGINEERING
          </p>
          <h1>
            Confidence.
            <br />
            <span>Built in.</span>
          </h1>
          <div className="hero-services">
            {services.map((s) => (
              <a key={s.key} href={`/${s.slug}`}>
                <span>{s.short}</span>
                <ArrowUpRight size={17} />
              </a>
            ))}
          </div>
          <p className="hero-description">
            Clear answers for your building.
            <br />
            Expert support for your next step.
          </p>
          <div className="actions">
            <a className="action primary" href="/contact?intent=inspection">
              Request inspection <ArrowUpRight size={19} />
            </a>
            <a className="text-link" href="/contact?intent=quote">
              Get a quote <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-proof">
            <ShieldCheck size={19} />
            <span>DOB-registered Special Inspection Agency</span>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/construction.png"
            alt="Construction team and tower crane at sunset"
            fetchPriority="high"
          />
          <div className="image-caption">
            <span>
              EXPERTISE ON SITE.
              <br />
              CONFIDENCE AT EVERY STEP.
            </span>
            <span className="image-caption-number">NYC / 01</span>
          </div>
        </div>
      </section>
      <div className="credential-strip">
        <span>ENGINEER-LED. DETAIL-DRIVEN.</span>
        <span>NY & NJ Licensed P.E.</span>
        <span>AWS · ICC · ACI</span>
        <span>MWBE Certified</span>
      </div>
      <section className="section services-intro" id="services">
        <div className="section-heading">
          <p className="eyebrow dark">01 / OUR EXPERTISE</p>
          <div>
            <h2>
              From the ground up.
              <br />
              Every detail matters.
            </h2>
            <p>
              Focused expertise across inspections, testing, and engineering—so
              you have a clearer path through construction.
            </p>
          </div>
          <a className="text-link dark" href="/services">
            All services <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="service-grid">
          {services.map((s) => (
            <a href={`/${s.slug}`} className="service-card" key={s.key}>
              <div className="service-top">
                <span>{s.number}</span>
                <ArrowUpRight size={24} />
              </div>
              <span className="small-label">{s.label}</span>
              <h3>{s.short}</h3>
              <p>{s.card}</p>
              <span className="service-card-link">
                Explore service <ArrowRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="intro-band section">
        <p className="eyebrow">02 / THE WELLDONE APPROACH</p>
        <h2>
          Technical expertise.
          <br />
          <span>Personal accountability.</span>
        </h2>
        <div className="intro-bottom">
          <p>
            Led by James Jiang, P.E., WellDone brings structural and
            geotechnical experience to the field. As a small business, we put
            attention to detail, direct communication, and responsibility at the
            heart of every engagement.
          </p>
          <a href="/about" className="text-link">
            Get to know WellDone <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <section className="section home-process">
        <div className="section-heading">
          <p className="eyebrow dark">03 / A CLEAR NEXT STEP</p>
          <div>
            <h2>
              Less uncertainty.
              <br />
              More direction.
            </h2>
          </div>
        </div>
        <div className="process-grid">
          {[
            [
              '01',
              'Share your project',
              'Tell us the address, scope, and the service you need. Plans and photos help us understand the work.',
            ],
            [
              '02',
              'Define the scope',
              'We review your needs with you and discuss the appropriate services, pricing, and scheduling.',
            ],
            [
              '03',
              'Move forward',
              'With the scope agreed, we coordinate the next steps for your inspection, survey, or assessment.',
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
