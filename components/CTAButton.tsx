import Link from 'next/link'

type CTAVariant = 'primary' | 'secondary' | 'outline'

type CTAButtonProps = {
  href: string
  children: React.ReactNode
  variant?: CTAVariant
  className?: string
}

const variantClasses: Record<CTAVariant, string> = {
  primary: 'bg-brand-gold text-brand-teal border-2 border-transparent hover:bg-[#d4a003]',
  secondary: 'bg-brand-teal text-white border-2 border-transparent hover:bg-[#155252]',
  outline: 'border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white',
}

const CTAButton = ({ href, children, variant = 'outline', className = '' }: CTAButtonProps) => {
  const classes = `inline-block rounded font-roboto font-medium tracking-wide text-sm py-2.5 px-6 transition-colors duration-300 ${variantClasses[variant]} ${className}`

  if (href.startsWith('http')) {
    return (
      <a href={href} className={classes} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    )
  }

  if (href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

export default CTAButton
