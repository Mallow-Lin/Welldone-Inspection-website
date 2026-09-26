import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Phone, Check, ArrowRight } from 'lucide-react';
import { services, inquiryLink } from '@/lib/services';
import { FAQ } from '@/components/faq';
import { CTA } from '@/components/cta';
import { SpecialInspectionsPage } from '@/components/special-inspections-page';

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const s = services.find((x) => x.slug === service);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.description,
    alternates: { canonical: `/${s.slug}` },
    openGraph: {
      title: s.seoTitle,
      description: s.description,
      url: `/${s.slug}`,
      images: [],
    },
    twitter: {
      card: 'summary',
      title: s.seoTitle,
      description: s.description,
      images: [],
    },
  };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const s = services.find((x) => x.slug === service);
  if (!s) notFound();
  if (s.key === 'special-inspection') return <SpecialInspectionsPage />;
  const commonReasons =
    'commonReasons' in s && Array.isArray(s.commonReasons)
      ? s.commonReasons
      : [];
  return (
    <>
      <section className="service-hero section">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span>{s.short}</span>
        </div>
        <div className="service-hero-grid">
          <div>
            <p className="eyebrow">{s.label} · NEW YORK CITY</p>
            <h1>{s.title}</h1>
            <p className="landing-intro">{s.intro}</p>
            <div className="actions">
              <Link className="action primary" href={inquiryLink(s)}>
                {s.cta}
                <ArrowUpRight size={19} />
              </Link>
              <a className="text-link" href="tel:+19172131886">
                <Phone size={16} />
                Call (917) 213-1886
              </a>
            </div>
          </div>
          <aside className="landing-aside">
            <span className="landing-number">{s.number}</span>
            <p>{s.headline}</p>
            <span>{s.audience}</span>
          </aside>
        </div>
      </section>
      <section className="section scope-section">
        <div>
          <p className="eyebrow dark">WHAT WE CAN HELP WITH</p>
          <h2>
            A clear scope.
            <br />A practical path forward.
          </h2>
          <p className="body-copy">
            Every building and project is different. We start by understanding
            the work and the information you need.
          </p>
        </div>
        <div className="scope-list">
          {s.scope.map(([title, description], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      {commonReasons.length > 0 && (
        <section className="section common-reasons">
          <div>
            <p className="eyebrow dark">PRACTICAL ENGINEERING SUPPORT</p>
            <h2>Common Reasons Clients Contact Us</h2>
            <p className="body-copy">
              The appropriate assessment and report scope depends on the
              observed condition, available information, and intended use.
            </p>
          </div>
          <ul>
            {commonReasons.map((reason) => (
              <li key={reason}>
                <Check size={17} />
                {reason}
              </li>
            ))}
          </ul>
        </section>
      )}
      <section className="section prepare-band">
        <div>
          <p className="eyebrow dark">GETTING STARTED</p>
          <h2>
            Tell us about
            <br />
            your project.
          </h2>
        </div>
        <div>
          <p className="body-copy">
            A few details help us understand what you need and prepare a
            relevant quote.
          </p>
          <ul>
            {s.prepare.map((t) => (
              <li key={t}>
                <Check size={17} />
                {t}
              </li>
            ))}
          </ul>
          <Link className="text-link dark" href={inquiryLink(s)}>
            Start your inquiry <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section faq-section">
        <div>
          <p className="eyebrow dark">GOOD QUESTIONS. CLEAR ANSWERS.</p>
          <h2>Before we begin.</h2>
          {s.source && (
            <a
              className="official-link"
              href={s.source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.source.label} <ArrowUpRight size={13} />
            </a>
          )}
        </div>
        <FAQ items={s.faqs} />
      </section>
      <CTA href={`/contact?service=${s.key}&intent=quote`} />
      <section className="section related">
        <p className="eyebrow dark">OTHER WAYS WE CAN HELP</p>
        <div>
          {services
            .filter((x) => x.key !== s.key)
            .map((x) => (
              <Link key={x.key} href={`/${x.slug}`}>
                {x.short}
                <ArrowUpRight size={19} />
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
