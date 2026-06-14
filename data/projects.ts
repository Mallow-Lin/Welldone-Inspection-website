export type ProjectItem = {
  title: string
  description: string
  background: string
}

const projects: ProjectItem[] = [
  {
    title: '270 Park Avenue, New York',
    description: 'JPMorgan Chase Tower Building',
    background: '/images/projects/270-park-avenue.jpeg',
  },
  {
    title: 'The Met, New York',
    description: 'Ancient Near Eastern and Cypriot Art renovation',
    background: '/images/projects/the-met.jpg',
  },
  {
    title: 'The Frick Collection, New York',
    description: 'A premier museum and research center',
    background: '/images/projects/the-frick-collection.jpg',
  },
  {
    title: 'PS 958 School, Brooklyn',
    description: 'New Building Special Inspection',
    background: '/images/projects/ps-958-school.jpg',
  },
  {
    title: 'John Jay College of Criminal Justice, New York',
    description: 'Facade repair',
    background: '/images/projects/john-jay-college.jpg',
  },
  {
    title: '310 Hudson St, New York',
    description: 'The Walt Disney Company New York headquarters',
    background: '/images/projects/310-hudson-st.jpg',
  },
]

export default projects
