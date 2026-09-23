import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { CTA } from '@/components/cta';
export const metadata: Metadata = {
  title: 'Selected NYC Project Experience',
  description:
    'Explore selected New York City project experience highlighted by WellDone Inspection, including commercial, cultural, and educational buildings.',
};
const projects = [
  ['01', '270 Park Avenue', 'JPMorgan Chase Tower', 'COMMERCIAL · MANHATTAN'],
  [
    '02',
    'The Metropolitan Museum of Art',
    'Ancient Near Eastern and Cypriot Art renovation',
    'CULTURAL · MANHATTAN',
  ],
  [
    '03',
    'The Frick Collection',
    'Museum and research center',
    'CULTURAL · MANHATTAN',
  ],
  [
    '04',
    'PS 958 School',
    'New building special inspection',
    'EDUCATION · BROOKLYN',
  ],
  [
    '05',
    'John Jay College of Criminal Justice',
    'Facade repair',
    'EDUCATION · MANHATTAN',
  ],
  [
    '06',
    'Disney’s New York Headquarters',
    '310 Hudson Street',
    'COMMERCIAL · MANHATTAN',
  ],
];
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
        {projects.map(([n, title, detail, type]) => (
          <article key={n}>
            <span>{n}</span>
            <div>
              <p className="eyebrow dark">{type}</p>
              <h2>{title}</h2>
              <p>{detail}</p>
            </div>
            <ArrowUpRight size={22} />
          </article>
        ))}
      </section>
      <CTA title="Let’s discuss your project." />
    </>
  );
}
