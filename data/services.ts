export type ServiceItem = {
  title: string
  name: string
  shortDescription: string
  longDescription: string
  background: string
  link: string
  slug?: string
}

const services: ServiceItem[] = [
  {
    title: 'TR1 Special Inspections',
    name: 'Special Inspections',
    shortDescription: 'Architectural, Structural, Mechanical, Plumbing, Electrical, Soil, Sprinkler, Standpipe, Facade, Curtain Wall',
    longDescription: 'Architectural, Structural, Mechanical, Plumbing, Electrical, Soil, Sprinkler, Standpipe, Facade, Curtain Wall',
    background: '/images/services/tr1-special-inspections.png',
    link: 'https://www.nyc.gov/assets/buildings/pdf/tr1_2014.pdf',
    slug: 'tr1-special-inspections',
  },
  {
    title: 'TR2 Concrete Sampling and Testing',
    name: 'Concrete Sampling and Testing',
    shortDescription: 'Concrete test, Grout test, Mortar test, Soil test, Core test',
    longDescription: 'Concrete test, Grout test, Mortar test, Soil test, Core test',
    background: '/images/services/tr2-concrete-testing.jpg',
    link: 'https://www.nyc.gov/assets/buildings/pdf/tr2.pdf',
    slug: 'concrete-testing',
  },
  {
    title: 'TR3 Concrete Design Mix',
    name: 'Concrete Design Mix',
    shortDescription: 'Concrete Design Mix, Concrete Producer / Supplier',
    longDescription: 'Concrete Design Mix, Concrete Producer / Supplier',
    background: '/images/services/tr3-concrete-design-mix.jpg',
    link: 'https://www.nyc.gov/assets/buildings/pdf/tr3.pdf',
  },
  {
    title: 'TR5 Pile Driving / Drilling',
    name: 'Pile Driving / Drilling',
    shortDescription: 'Steel H-pile, Micropile, Helical pile, Timber pile, Drilled Caissons',
    longDescription: 'Steel H-pile, Micropile, Helical pile, Timber pile, Drilled Caissons',
    background: '/images/services/tr5-pile-driving.png',
    link: 'https://www.nyc.gov/assets/buildings/pdf/tr5.pdf',
    slug: 'pile-driving-inspections',
  },
  {
    title: 'TR8 Energy Code Compliance',
    name: 'Energy Code Compliance',
    shortDescription: 'Energy Code Compliance',
    longDescription: 'Energy Code Compliance',
    background: '/images/services/tr8-energy-code.jpg',
    link: 'https://www.nyc.gov/assets/buildings/pdf/tr8.pdf',
    slug: 'energy-code-compliance',
  },
  {
    title: 'Engineering Design',
    name: 'Engineering Design',
    shortDescription: 'Engineering Design, Engineering Calculation, Structural, Geotechnical, Mechanical',
    longDescription: 'Engineering Design, Engineering Calculation, Structural, Geotechnical, Mechanical',
    background: '/images/services/engineering-design.jpg',
    link: '',
  },
]

export default services
