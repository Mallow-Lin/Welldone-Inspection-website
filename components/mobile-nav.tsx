'use client';
import { Menu, Phone, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { services } from '@/lib/services';
export function MobileNav() {
  return (
    <div className="mobile-nav">
      <Sheet>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon" aria-label="Open navigation" />
          }
        >
          <Menu size={23} />
        </SheetTrigger>
        <SheetContent className="mobile-menu">
          <SheetHeader>
            <SheetTitle>WellDone Inspection</SheetTitle>
            <SheetDescription>NYC inspections & engineering</SheetDescription>
          </SheetHeader>
          <nav aria-label="Mobile navigation">
            <a href="/">Home</a>
            {services.map((s) => (
              <a key={s.key} href={`/${s.slug}`}>
                {s.short}
              </a>
            ))}
            <a href="/projects">Project experience</a>
            <a href="/about">About us</a>
            <a href="/contact">Contact</a>
          </nav>
          <a href="tel:+19172131886" className="menu-call">
            <Phone size={17} />
            (917) 213-1886
          </a>
        </SheetContent>
      </Sheet>
    </div>
  );
}
export function MobileContactBar() {
  return (
    <div className="mobile-contact-bar">
      <a href="tel:+19172131886">
        <Phone size={17} /> Call
      </a>
      <a href="/contact?intent=quote">
        Get quote <ArrowUpRight size={16} />
      </a>
      <a href="/contact?intent=inspection">
        Request inspection <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
