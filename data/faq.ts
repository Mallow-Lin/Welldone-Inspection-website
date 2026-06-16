export type FaqItem = {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: 'What is a special inspection?',
    answer:
      'A special inspection is an independent, third-party verification required by NYC Building Code Chapter 17. Licensed special inspectors observe critical construction work—such as structural steel, concrete, foundations, and energy systems—to confirm it matches approved drawings and code requirements before it is covered or placed in service.',
  },
  {
    question: 'When is a TR1 special inspection required?',
    answer:
      'TR1 inspections are required on most NYC building projects where the registered design professional specifies special inspections in the Statement of Special Inspections. This typically includes new construction, major alterations, and work involving structural, facade, MEP, and fire-protection systems. Your project\'s approved drawings and special inspection program define the exact scope.',
  },
  {
    question: 'How do I hire a DOB special inspection agency?',
    answer:
      'The owner or contractor selects a Special Inspection Agency registered with the NYC Department of Buildings. The agency must be listed on your project\'s special inspection program before work begins. Contact WellDone Inspection with your project address, permit number, and scope—we\'ll confirm availability and provide a proposal.',
  },
  {
    question: 'What is the difference between TR1, TR2, and TR5?',
    answer:
      'TR1 covers general special inspections during construction (structural, MEP, facade, etc.). TR2 documents concrete sampling and field testing. TR5 covers pile driving and deep foundation installation. Each form corresponds to a specific type of Chapter 17 inspection documented for DOB.',
  },
  {
    question: 'Do you serve all NYC boroughs?',
    answer:
      'Yes. WellDone Inspection serves Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. We also support select projects in New Jersey where our NY/NJ licensed P.E. credentials apply.',
  },
  {
    question: 'How quickly can you schedule an inspection?',
    answer:
      'We prioritize responsiveness—most routine inspections can be scheduled within 24–48 hours. For time-sensitive pours, pile driving, or pre-cover inspections, call us directly at (917) 213-1886 and we will coordinate with your site team.',
  },
  {
    question: 'Are you a MWBE-certified firm?',
    answer:
      'Yes. WellDone Inspection is a MWBE-certified Minority and Women-owned Business Enterprise, which may help contractors and owners meet participation goals on public and private projects.',
  },
  {
    question: 'What should I include in an inspection quote request?',
    answer:
      'Please provide the project address, permit or job number, type of work requiring inspection (e.g., concrete pour, steel erection, pile driving), anticipated schedule, and your contact information. Our contact form includes fields for project type to help us respond faster.',
  },
]

export default faqItems
