import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ImageCardProps = {
  title: string
  description?: string
  background?: string
  icon?: IconDefinition
  className?: string
  descriptionClassName?: string
  iconClassName?: string
}

const ImageCard = ({
  title,
  description,
  background,
  icon,
  className = '',
  descriptionClassName = '',
  iconClassName = '',
}: ImageCardProps) => {
  const useBrandedTile = !background && Boolean(icon)

  return (
    <div className={`group relative overflow-hidden rounded-xl shadow-card bg-brand-teal ${className}`}>
      {useBrandedTile ? (
        <div className='absolute inset-0 bg-gradient-to-br from-brand-teal via-[#155252] to-[#0c3a3a]' aria-hidden='true'>
          <div className='absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110'>
            <FontAwesomeIcon
              icon={icon!}
              className={`text-brand-gold/90 ${iconClassName || 'text-4xl md:text-5xl'}`}
            />
          </div>
        </div>
      ) : (
        <div
          className='absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110'
          style={{ backgroundImage: `url(${background})` }}
          aria-hidden='true'
        />
      )}
      <div
        className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent'
        aria-hidden='true'
      />
      <h3 className='absolute inset-x-0 bottom-0 p-3 text-white font-oswald font-semibold text-sm md:text-base lg:text-lg leading-tight'>
        {title}
      </h3>
      {description && (
        <div className='absolute inset-0 flex items-center justify-center p-4 bg-brand-teal/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          <p className={`text-center text-white leading-relaxed ${descriptionClassName}`}>
            {description}
          </p>
        </div>
      )}
    </div>
  )
}

export default ImageCard
