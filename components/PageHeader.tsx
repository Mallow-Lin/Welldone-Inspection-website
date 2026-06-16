type PageHeaderProps = {
  title: string
  intro?: React.ReactNode
  className?: string
}

const PageHeader = ({ title, intro, className = '' }: PageHeaderProps) => {
  return (
    <div className={`mb-8 md:mb-10 ${className}`}>
      <h1 className='font-oswald font-semibold text-gray-900 leading-tight tracking-tight text-3xl md:text-4xl'>
        {title}
      </h1>
      <span className='mt-3 block h-1 w-16 rounded-full bg-brand-gold' />
      {intro && (
        <p className='mt-4 max-w-3xl text-base md:text-lg text-gray-600 leading-relaxed'>
          {intro}
        </p>
      )}
    </div>
  )
}

export default PageHeader
