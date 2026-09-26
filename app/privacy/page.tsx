import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Welldone Inspection handles information submitted through this website.',
  alternates: { canonical: '/privacy' },
};
export default function Privacy() {
  return (
    <section className="section prose-page">
      <p className="eyebrow dark">PRIVACY</p>
      <h1>Privacy Policy</h1>
      <p>
        Information submitted through the inquiry form is used by Welldone
        Inspection to review your project request, respond to your questions,
        prepare a relevant scope or quote, and coordinate requested services.
      </p>
      <p>
        Include only the information needed to discuss your project. Please do
        not include sensitive personal records in an initial inquiry.
      </p>
      <p>
        Welldone does not sell personal information submitted through this
        website. Information may be handled by service providers that support
        website hosting and delivery of inquiry emails, subject to their own
        policies.
      </p>
      <p>
        This website does not currently use advertising pixels or analytics
        tracking. If basic website analytics are added later, they may be used
        to understand aggregate site traffic and improve the website, and this
        policy should be updated to reflect that use.
      </p>
      <p>
        For questions about an inquiry, email{' '}
        <a href="mailto:welldoneinspect@gmail.com">welldoneinspect@gmail.com</a>{' '}
        or call <a href="tel:+19172131886">(917) 213-1886</a>.
      </p>
    </section>
  );
}
