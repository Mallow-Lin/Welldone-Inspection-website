import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';
export function CTA({
  title = 'Your next project. Our full attention.',
  description,
  href = '/contact?intent=quote',
  label,
  secondaryHref,
  secondaryLabel,
}: {
  title?: string;
  description?: string;
  href?: string;
  label?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const actionLabel =
    label ||
    (href.includes('intent=inspection')
      ? 'Request an inspection'
      : 'Get a quote');
  return (
    <section className="section cta-band">
      <div>
        <p className="eyebrow">LET’S TALK ABOUT WHAT’S NEXT</p>
        <h2>{title}</h2>
        {description && <p className="cta-description">{description}</p>}
      </div>
      <div className="cta-actions">
        <Link className="action primary" href={href}>
          {actionLabel} <ArrowUpRight size={18} />
        </Link>
        {secondaryHref && secondaryLabel && (
          <Link className="action secondary-action" href={secondaryHref}>
            {secondaryLabel} <ArrowUpRight size={18} />
          </Link>
        )}
        <a className="text-link" href="tel:+19172131886">
          <Phone size={16} />
          (917) 213-1886
        </a>
      </div>
    </section>
  );
}
