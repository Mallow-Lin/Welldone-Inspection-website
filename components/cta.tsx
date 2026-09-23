import { ArrowUpRight, Phone } from 'lucide-react';
export function CTA({
  title = 'Your next project. Our full attention.',
  href = '/contact?intent=quote',
}: {
  title?: string;
  href?: string;
}) {
  return (
    <section className="section cta-band">
      <div>
        <p className="eyebrow">LET’S TALK ABOUT WHAT’S NEXT</p>
        <h2>{title}</h2>
      </div>
      <div className="cta-actions">
        <a className="action primary" href={href}>
          Get a quote <ArrowUpRight size={18} />
        </a>
        <a className="text-link" href="tel:+19172131886">
          <Phone size={16} />
          (917) 213-1886
        </a>
      </div>
    </section>
  );
}
