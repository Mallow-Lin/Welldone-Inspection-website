import PageHeader from '@/components/PageHeader'

export type LegalSection = {
  heading: string
  paragraphs: string[]
}

type LegalPageProps = {
  title: string
  lastUpdated: string
  intro?: string
  sections: LegalSection[]
}

const LegalPage = ({ title, lastUpdated, intro, sections }: LegalPageProps) => {
  return (
    <section className='section max-w-3xl py-12 md:py-16'>
      <PageHeader title={title} intro={intro} />
      <p className='-mt-6 mb-8 text-sm text-gray-500'>Last updated: {lastUpdated}</p>

      <div className='space-y-8'>
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className='font-oswald text-xl md:text-2xl font-semibold text-gray-900 mb-3'>
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index} className='mb-3 text-base text-gray-700 leading-relaxed'>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default LegalPage
