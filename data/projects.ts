export type ProjectItem = {
  slug: string
  title: string
  description: string
  background: string
  detail: string
  scope: string[]
}

const projects: ProjectItem[] = [
  {
    slug: '270-park-avenue',
    title: '270 Park Avenue, New York',
    description: 'JPMorgan Chase Tower Building',
    background: '/images/projects/270-park-avenue.jpeg',
    detail:
      'WellDone Inspection supported special inspection services for one of Manhattan\'s largest commercial tower projects. Our team provided structural and concrete inspections aligned with the project\'s Chapter 17 program.',
    scope: ['Structural steel inspections', 'Concrete sampling and testing', 'High-rise coordination'],
  },
  {
    slug: 'the-met',
    title: 'The Met, New York',
    description: 'Ancient Near Eastern and Cypriot Art renovation',
    background: '/images/projects/the-met.jpg',
    detail:
      'Special inspections for renovation work at The Metropolitan Museum of Art, ensuring structural modifications and concrete work met code requirements within an active cultural institution.',
    scope: ['Alteration inspections', 'Concrete testing', 'Institutional facility coordination'],
  },
  {
    slug: 'the-frick-collection',
    title: 'The Frick Collection, New York',
    description: 'A premier museum and research center',
    background: '/images/projects/the-frick-collection.jpg',
    detail:
      'Inspection support for renovation and preservation work at The Frick Collection, balancing code compliance with sensitive historic building conditions.',
    scope: ['Structural inspections', 'Facade-related coordination', 'Museum renovation support'],
  },
  {
    slug: 'ps-958-school',
    title: 'PS 958 School, Brooklyn',
    description: 'New Building Special Inspection',
    background: '/images/projects/ps-958-school.jpg',
    detail:
      'Comprehensive special inspection program for a new NYC school building in Brooklyn, covering foundations through superstructure and MEP rough-in inspections.',
    scope: ['TR1 special inspections', 'Concrete testing', 'New school construction'],
  },
  {
    slug: 'john-jay-college',
    title: 'John Jay College of Criminal Justice, New York',
    description: 'Facade repair',
    background: '/images/projects/john-jay-college.jpg',
    detail:
      'Facade repair and restoration inspections at John Jay College, verifying anchorage, waterproofing, and structural connections for exterior wall remediation.',
    scope: ['Facade inspections', 'Exterior wall remediation', 'CUNY campus project'],
  },
  {
    slug: '310-hudson-st',
    title: '310 Hudson St, New York',
    description: 'The Walt Disney Company New York headquarters',
    background: '/images/projects/310-hudson-st.jpg',
    detail:
      'Special inspection services for commercial office build-out and structural work at The Walt Disney Company\'s New York headquarters in Hudson Square.',
    scope: ['Commercial tenant improvements', 'Structural inspections', 'Manhattan office build-out'],
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export const getAllProjectSlugs = () => projects.map((p) => p.slug)

export default projects
