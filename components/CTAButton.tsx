import Link from 'next/link'

type CTAButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
}

const CTAButton = ({ href, children, className = '' }: CTAButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-block border-2 border-black py-[7px] px-[15px] font-roboto hover:bg-brand-teal hover:text-brand-gold duration-300 text-[12px] md:text-md ${className}`}
    >
      {children}
    </Link>
  )
}

export default CTAButton
