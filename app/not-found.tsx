import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="section page-heading">
      <p className="eyebrow dark">404 · PAGE NOT FOUND</p>
      <h1>
        Let’s find the
        <br />
        right next step.
      </h1>
      <p>
        This page is not available. Explore our services or contact us about
        your project.
      </p>
      <div className="actions">
        <Link href="/" className="action primary">
          Back to home
        </Link>
        <Link href="/services" className="text-link dark">
          Explore services
        </Link>
      </div>
    </section>
  );
}
