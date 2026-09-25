import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { CTA } from '@/components/cta';
import { projects } from '@/lib/projects';
export const metadata: Metadata = {
  title: 'Selected Professional Experience',
  description:
    'Selected professional experience reflecting the engineering and inspection background behind Welldone across commercial, cultural, and educational buildings.',
  alternates: { canonical: '/projects' },
};
export default function Projects() {
  return (
    <>
      <section className="section page-heading">
        <p className="eyebrow dark">SELECTED PROFESSIONAL EXPERIENCE</p>
        <h1>
          Engineering and inspection
          <br />
          experience in New York.
        </h1>
        <p>
          Selected professional experience reflecting the engineering and
          inspection background behind Welldone. Contact us to discuss relevant
          scope and references for your project.
        </p>
      </section>
      <section className="section project-list">
        {projects.map((project) => (
          <article key={project.number}>
            <span>{project.number}</span>
            <div>
              <p className="eyebrow dark">{project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.detail}</p>
            </div>
            <ArrowUpRight size={22} />
          </article>
        ))}
      </section>
      <CTA title="Let’s discuss your project." />
    </>
  );
}
