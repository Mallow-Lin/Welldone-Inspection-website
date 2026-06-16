export type ServiceLanding = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  heroImage: string
  dobForm: string
  dobLink: string
  summary: string
  sections: Array<{ heading: string; paragraphs: string[] }>
  capabilities: string[]
}

const serviceLandings: ServiceLanding[] = [
  {
    slug: 'tr1-special-inspections',
    title: 'TR1 Special Inspections in NYC',
    metaTitle: 'TR1 Special Inspections NYC | WellDone Inspection',
    metaDescription:
      'DOB-registered TR1 special inspections in NYC for structural steel, concrete, MEP, facade, and curtain wall. Chapter 17 compliance for all project scales.',
    heroImage: '/images/services/tr1-special-inspections.png',
    dobForm: 'TR1',
    dobLink: 'https://www.nyc.gov/assets/buildings/pdf/tr1_2014.pdf',
    summary:
      'WellDone Inspection provides third-party TR1 Special Inspections required under NYC Building Code Chapter 17 for new construction, alterations, and major renovations throughout the five boroughs.',
    sections: [
      {
        heading: 'What TR1 Covers',
        paragraphs: [
          'TR1 is the primary NYC Department of Buildings form used to document special inspections performed during construction. Our licensed inspectors verify that work conforms to approved construction documents and applicable codes before it is concealed or put into service.',
          'We inspect architectural, structural, mechanical, plumbing, electrical, soil, sprinkler, standpipe, facade, and curtain wall elements as required by your project\'s Statement of Special Inspections.',
        ],
      },
      {
        heading: 'When TR1 Is Required',
        paragraphs: [
          'Special inspections are mandated for most significant NYC building projects under BC Chapter 17. The registered design professional defines required inspections in the project\'s special inspection program, and a DOB-registered Special Inspection Agency must perform and document them.',
          'Contractors and owners rely on timely TR1 sign-offs to keep work progressing and avoid costly rework. We coordinate directly with your site team to schedule inspections with minimal disruption.',
        ],
      },
      {
        heading: 'Why WellDone Inspection',
        paragraphs: [
          'As a MWBE-certified small agency, you work directly with a licensed P.E. and ICC Master of Special Inspection—not a rotating field tech with no engineering backup. We respond quickly, document thoroughly, and communicate clearly with owners, GCs, and expeditors.',
        ],
      },
    ],
    capabilities: [
      'Structural steel and welding',
      'Concrete placement and rebar',
      'MEP rough-in inspections',
      'Facade and curtain wall',
      'Sprinkler and standpipe systems',
      'Soils and foundations',
    ],
  },
  {
    slug: 'concrete-testing',
    title: 'Concrete Sampling & Testing (TR2) in NYC',
    metaTitle: 'Concrete Testing NYC | TR2 Sampling | WellDone Inspection',
    metaDescription:
      'NYC TR2 concrete sampling and testing: cylinder breaks, grout, mortar, soil, and core tests. ACI-certified technicians for DOB Chapter 17 compliance.',
    heroImage: '/images/services/tr2-concrete-testing.jpg',
    dobForm: 'TR2',
    dobLink: 'https://www.nyc.gov/assets/buildings/pdf/tr2.pdf',
    summary:
      'Our ACI-certified team performs TR2 concrete sampling and testing for NYC construction projects, from high-rise towers to institutional and infrastructure work.',
    sections: [
      {
        heading: 'TR2 Testing Services',
        paragraphs: [
          'TR2 documents concrete sampling and field testing performed during placement. We sample concrete, grout, and mortar; conduct slump, air content, and temperature tests; and prepare specimens for laboratory strength verification per project specifications and ACI standards.',
          'We also perform soil testing and core sampling where required by the special inspection program, providing clear reports that support TR2 submission to the Department of Buildings.',
        ],
      },
      {
        heading: 'NYC Project Experience',
        paragraphs: [
          'NYC concrete work moves fast—especially in cold weather or high-rise pours. Our technicians coordinate with your concrete supplier and placing crew to sample at the right intervals without delaying the pour.',
          'We understand DOB expectations for documentation and work with your QC team to resolve out-of-tolerance results before they become schedule problems.',
        ],
      },
      {
        heading: 'Related Inspections',
        paragraphs: [
          'Concrete testing is often paired with TR1 structural inspections and TR3 mix design verification. WellDone Inspection can provide a single point of contact for multiple Chapter 17 requirements on your project.',
        ],
      },
    ],
    capabilities: [
      'Concrete cylinder sampling',
      'Grout and mortar testing',
      'Slump, air, and temperature',
      'Soil compaction testing',
      'Core extraction and testing',
      'ACI-certified field technicians',
    ],
  },
  {
    slug: 'pile-driving-inspections',
    title: 'Pile Driving & Drilling Inspections (TR5) in NYC',
    metaTitle: 'Pile Driving Inspection NYC | TR5 | WellDone Inspection',
    metaDescription:
      'NYC TR5 pile driving and deep foundation inspections: H-piles, micropiles, helical piles, timber piles, and drilled caissons. DOB-registered agency.',
    heroImage: '/images/services/tr5-pile-driving.png',
    dobForm: 'TR5',
    dobLink: 'https://www.nyc.gov/assets/buildings/pdf/tr5.pdf',
    summary:
      'WellDone Inspection performs TR5 special inspections for pile driving, drilling, and deep foundation work across NYC—including challenging urban sites with vibration and access constraints.',
    sections: [
      {
        heading: 'Foundation Types We Inspect',
        paragraphs: [
          'We inspect installation of steel H-piles, micropiles, helical piles, timber piles, and drilled caissons. Our inspectors verify pile type, location, tip elevation, splice details, and driving records against approved drawings and geotechnical recommendations.',
          'For drilled foundations, we observe casing installation, slurry procedures, reinforcement placement, and concrete placement to confirm compliance before the shaft is accepted.',
        ],
      },
      {
        heading: 'Urban NYC Considerations',
        paragraphs: [
          'Foundation work in NYC often occurs adjacent to existing structures, utilities, and subway infrastructure. Accurate documentation and real-time communication with the design team are critical when subsurface conditions differ from borings.',
          'Our geotechnical and structural background helps us identify issues early—misaligned piles, refusal at unexpected depths, or cage placement problems—so they can be addressed before concrete is placed.',
        ],
      },
      {
        heading: 'Documentation & TR5 Submittals',
        paragraphs: [
          'We maintain detailed field logs and provide TR5 documentation that aligns with DOB requirements, supporting your project\'s foundation sign-off and subsequent superstructure inspections.',
        ],
      },
    ],
    capabilities: [
      'Steel H-pile driving',
      'Micropiles and helical piles',
      'Timber pile installation',
      'Drilled caissons and shafts',
      'Pile tip elevation verification',
      'Driving record review',
    ],
  },
  {
    slug: 'energy-code-compliance',
    title: 'Energy Code Compliance Inspections (TR8) in NYC',
    metaTitle: 'Energy Code Compliance NYC | TR8 | WellDone Inspection',
    metaDescription:
      'NYC TR8 energy code compliance inspections for envelope, insulation, air sealing, and mechanical systems. DOB Chapter 17 special inspection agency.',
    heroImage: '/images/services/tr8-energy-code.jpg',
    dobForm: 'TR8',
    dobLink: 'https://www.nyc.gov/assets/buildings/pdf/tr8.pdf',
    summary:
      'We perform TR8 Energy Code Compliance inspections to verify that building envelope, insulation, air barriers, and related systems meet NYC Energy Conservation Code requirements.',
    sections: [
      {
        heading: 'What TR8 Inspections Cover',
        paragraphs: [
          'TR8 documents special inspections for energy code compliance during construction. Depending on your project\'s special inspection program, this may include insulation installation, air barrier continuity, fenestration, and mechanical system components that affect building energy performance.',
          'Inspectors verify that installed materials and assemblies match approved energy analysis and construction documents before they are concealed.',
        ],
      },
      {
        heading: 'NYC Energy Code Context',
        paragraphs: [
          'New York City has adopted stringent energy requirements aligned with Local Law 97 and state energy code updates. TR8 inspections help ensure the built project matches the energy model submitted for approval—reducing risk of failed commissioning or certificate of occupancy delays.',
        ],
      },
      {
        heading: 'Coordinated Inspection Approach',
        paragraphs: [
          'Energy inspections often overlap with facade, roofing, and MEP work. We schedule inspections at the right construction milestones so your team isn\'t waiting for sign-offs or re-opening completed work.',
        ],
      },
    ],
    capabilities: [
      'Insulation installation verification',
      'Air barrier and sealing inspection',
      'Fenestration and glazing review',
      'Envelope assembly documentation',
      'Coordination with MEP inspections',
      'TR8 DOB form completion',
    ],
  },
]

export const getServiceLanding = (slug: string) =>
  serviceLandings.find((s) => s.slug === slug)

export const getAllServiceLandingSlugs = () =>
  serviceLandings.map((s) => s.slug)

export default serviceLandings
