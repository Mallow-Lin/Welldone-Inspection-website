export const projects = [
  {
    number: '01',
    title: '270 Park Avenue',
    detail: 'JPMorgan Chase Tower building',
    type: 'COMMERCIAL · MANHATTAN',
  },
  {
    number: '02',
    title: 'The Metropolitan Museum of Art',
    detail: 'Ancient Near Eastern and Cypriot Art renovation',
    type: 'CULTURAL · MANHATTAN',
  },
  {
    number: '03',
    title: 'The Frick Collection',
    detail: 'Museum and research center project experience',
    type: 'CULTURAL · MANHATTAN',
  },
  {
    number: '04',
    title: 'PS 958 School',
    detail: 'New building special inspection',
    type: 'EDUCATION · BROOKLYN',
  },
  {
    number: '05',
    title: 'John Jay College of Criminal Justice',
    detail: 'Facade repair',
    type: 'EDUCATION · MANHATTAN',
  },
  {
    number: '06',
    title: '310 Hudson Street',
    detail: 'The Walt Disney Company New York headquarters',
    type: 'COMMERCIAL · MANHATTAN',
  },
];

export type Project = (typeof projects)[number];
