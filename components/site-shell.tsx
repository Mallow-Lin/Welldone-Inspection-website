import { ArrowUpRight, Phone } from 'lucide-react';
import { MobileNav, MobileContactBar } from '@/components/mobile-nav';
import { services } from '@/lib/services';
export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="WellDone Inspection home">
        WellDone<span>INSPECTION & ENGINEERING</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/services">Services</a>
        <a href="/projects">Experience</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact</a>
      </nav>
      <a className="header-phone" href="tel:+19172131886">
        <Phone size={15} />
        <span>(917) 213-1886</span>
      </a>
      <a className="header-cta" href="/contact?intent=quote">
        Get a quote <ArrowUpRight size={18} />
      </a>
      <MobileNav />
    </header>
  );
}
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand" href="/">
            WellDone<span>INSPECTION & ENGINEERING</span>
          </a>
          <div className="footer-services">
            {services.map((s) => (
              <a key={s.key} href={`/${s.slug}`}>
                {s.short}
              </a>
            ))}
          </div>
          <div>
            <a href="mailto:welldoneinspect@gmail.com">
              welldoneinspect@gmail.com <ArrowUpRight size={15} />
            </a>
            <a href="tel:+19172131886">(917) 213-1886</a>
          </div>
          <address>
            10 Hallets Point
            <br />
            Astoria, NY 11102
          </address>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} WellDone Inspection, Inc.</span>
          <a href="/privacy">Privacy</a>
          <a href="/contact">
            Start a conversation <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
      <MobileContactBar />
    </>
  );
}
