import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Website Inquiry Privacy',
  description: 'How this website handles project inquiry information.',
};
export default function Privacy() {
  return (
    <section className="section prose-page">
      <p className="eyebrow dark">PRIVACY</p>
      <h1>Your project inquiry.</h1>
      <p>
        The inquiry form prepares an email draft on your device. It does not
        submit or store your form details in a website database. Information you
        enter is lost when you reload or leave the page.
      </p>
      <p>
        When you open your email app and send the message, the information is
        delivered through your email provider to welldoneinspect@gmail.com. You
        can review and edit the message before sending.
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
