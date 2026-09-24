import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Phone } from 'lucide-react';
import { MobileNav, MobileContactBar } from '@/components/mobile-nav';
import { services } from '@/lib/services';
export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="WellDone Inspection home">
        <Image src="/welldone-mark.png" alt="" width={54} height={54} />
        <span className="brand-type">
          WellDone<small>INSPECTION &amp; ENGINEERING</small>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <div className="services-nav-item">
          <Link href="/services">Services</Link>
          <div className="services-nav-panel">
            {services.map((service) => (
              <Link key={service.key} href={`/${service.slug}`}>
                <small>{service.number}</small>
                {service.short}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <a className="header-phone" href="tel:+19172131886">
        <Phone size={15} />
        <span>(917) 213-1886</span>
      </a>
      <Link className="header-cta" href="/contact?intent=inspection">
        Request inspection <ArrowUpRight size={18} />
      </Link>
      <MobileNav />
    </header>
  );
}
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-main">
          <Link className="brand" href="/">
            <Image src="/welldone-mark.png" alt="" width={54} height={54} />
            <span className="brand-type">
              WellDone<small>INSPECTION &amp; ENGINEERING</small>
            </span>
          </Link>
          <div className="footer-services">
            {services.map((s) => (
              <Link key={s.key} href={`/${s.slug}`}>
                {s.short}
              </Link>
            ))}
          </div>
          <div>
            <a href="mailto:welldoneinspect@gmail.com">
              welldoneinspect@gmail.com <ArrowUpRight size={15} />
            </a>
            <a href="tel:+19172131886">(917) 213-1886</a>
          </div>
          <address>
            10 Halletts Point
            <br />
            Queens, NY 11102
          </address>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} WellDone Inspection, Inc.</span>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">
            Start a conversation <ArrowUpRight size={14} />
          </Link>
        </div>
      </footer>
      <MobileContactBar />
    </>
  );
}
