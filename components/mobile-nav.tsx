'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { services } from '@/lib/services';

export function MobileNav() {
  const menu = useRef<HTMLDetailsElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    if (menu.current) menu.current.open = false;
    setIsOpen(false);
  };

  return (
    <div className="mobile-nav">
      <details
        className="mobile-menu-details"
        ref={menu}
        onToggle={(event) => setIsOpen(event.currentTarget.open)}
      >
        <summary>
          <span className="menu-open-icon" aria-hidden="true">
            <Menu size={23} />
          </span>
          <span className="menu-close-icon" aria-hidden="true">
            <X size={23} />
          </span>
          <span className="sr-only">
            {isOpen ? 'Close navigation' : 'Open navigation'}
          </span>
        </summary>
        <div className="mobile-menu-panel">
          <div className="mobile-menu-heading">
            <strong>Welldone Inspection</strong>
            <span>NYC inspection &amp; engineering</span>
          </div>
          <nav aria-label="Mobile navigation">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            {services.map((service) => (
              <Link
                key={service.key}
                href={`/${service.slug}`}
                onClick={closeMenu}
              >
                {service.short}
              </Link>
            ))}
            <Link href="/projects" onClick={closeMenu}>
              Project experience
            </Link>
            <Link href="/about" onClick={closeMenu}>
              About us
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </nav>
          <a href="tel:+19172131886" className="menu-call" onClick={closeMenu}>
            <Phone size={17} />
            (917) 213-1886
          </a>
        </div>
      </details>
    </div>
  );
}

export function MobileContactBar() {
  return (
    <div className="mobile-contact-bar">
      <a href="tel:+19172131886">
        <Phone size={17} /> Call
      </a>
      <Link href="/contact?intent=quote">
        Get a quote <ArrowUpRight size={16} />
      </Link>
      <Link href="/contact?intent=inspection">
        Request an inspection <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}
