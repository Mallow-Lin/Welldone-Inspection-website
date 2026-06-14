type SlideInWrapperProps = {
  direction: 'top' | 'bottom' | 'left' | 'right'
  isInView: boolean
  duration?: string
  className?: string
  children: React.ReactNode
}

const SlideInWrapper = ({
  direction,
  isInView,
  duration,
  className = '',
  children,
}: SlideInWrapperProps) => {
  const isNeg = direction === 'right' || direction === 'bottom' ? '' : '-'
  const xOrY = direction === 'top' || direction === 'bottom' ? 'y' : 'x'
  const inViewPosition = `translate-${xOrY}-0`
  const outViewPosition = isNeg + inViewPosition.replace('0', 'full')
  const animationDuration = duration ? `duration-${duration}` : 'duration-1000'

  return (
    <div
      className={`
        ${className}
        ${isInView ? `${inViewPosition} opacity-100` : `${outViewPosition} opacity-0`}
        ${animationDuration}
      `}
    >
      {children}
    </div>
  )
}

export default SlideInWrapper
