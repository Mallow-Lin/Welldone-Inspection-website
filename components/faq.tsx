'use client';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
export function FAQ({ items }: { items: string[][] }) {
  return (
    <Accordion className="faq-list">
      {items.map(([q, a], i) => (
        <AccordionItem key={q} value={i}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>
            <p>{a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
