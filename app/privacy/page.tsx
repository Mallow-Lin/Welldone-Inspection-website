import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Website Inquiry Privacy',
  description: 'How this website handles project inquiry information.',
  alternates: { canonical: '/privacy' },
};
export default function Privacy() {
  return (
    <section className="section prose-page">
      <p className="eyebrow dark">PRIVACY</p>
      <h1>Your project inquiry.</h1>
      <p>
        Information submitted through the inquiry form is used by Welldone
        Inspection to review your project request, respond to your questions,
        and coordinate requested services.
      </p>
      <p>
        Include only the information needed to discuss your project. Please do
        not include sensitive personal records in an initial inquiry.
      </p>
      <p>
        This version of the website does not include advertising pixels or
        analytics tracking. The hosting service and any email provider you use
        may process technical data under their own policies.
      </p>
      <p>
        For questions about an inquiry, email{' '}
        <a href="mailto:welldoneinspect@gmail.com">welldoneinspect@gmail.com</a>{' '}
        or call <a href="tel:+19172131886">(917) 213-1886</a>.
      </p>
    </section>
  );
}
