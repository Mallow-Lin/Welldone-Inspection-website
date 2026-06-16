type SectionHeadingProps = {
  title: string
  align?: 'left' | 'center'
  className?: string
}

const SectionHeading = ({ title, align = 'left', className = '' }: SectionHeadingProps) => {
  if (align === 'center') {
    return (
      <div className={`flex flex-col items-center text-center mb-8 ${className}`}>
        <h2 className='section-heading'>{title}</h2>
        <span className='mt-3 h-1 w-16 rounded-full bg-brand-gold' />
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-4 mb-8 ${className}`}>
      <h2 className='section-heading whitespace-nowrap'>{title}</h2>
      <span className='h-px flex-grow bg-gray-200' />
    </div>
  )
}

export default SectionHeading
