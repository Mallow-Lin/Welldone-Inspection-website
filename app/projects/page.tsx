import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { CTA } from '@/components/cta';
import { projects } from '@/lib/projects';
export const metadata: Metadata = {
  title: 'Selected NYC Project Experience',
  description:
    'Explore selected New York City project experience highlighted by Welldone Inspection, including commercial, cultural, and educational buildings.',
  alternates: { canonical: '/projects' },
};
export default function Projects() {
  return (
    <>
      <section className="section page-heading">
        <p className="eyebrow dark">SELECTED PROJECT EXPERIENCE</p>
        <h1>
          Part of New York’s
          <br />
          built environment.
        </h1>
        <p>
          Project experience across commercial, cultural, and educational
          buildings. Contact us to discuss relevant inspection scope and
          references for your project.
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
