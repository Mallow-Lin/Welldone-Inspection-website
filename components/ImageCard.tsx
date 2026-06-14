type ImageCardProps = {
  title: string
  description?: string
  background: string
  className?: string
  descriptionClassName?: string
}

const ImageCard = ({
  title,
  description,
  background,
  className = '',
  descriptionClassName = '',
}: ImageCardProps) => {
  return (
    <div
      className={`group bg-[#808080] rounded-xl shadow-card overflow-hidden flex relative justify-center items-center duration-[0.8s] bg-center bg-no-repeat bg-[length:100%_100%] md:hover:bg-left md:hover:bg-[length:600px] ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <p className='absolute text-[12px] sm:text-sm md:text-sm lg:text-xl font-bold top-0 w-full text-white p-3 bg-black md:group-hover:bg-transparent'>
        {title}
      </p>
      {description && (
        <div className='h-[calc(100%-10px)] w-[calc(100%-10px)] rounded-xl duration-500 border-transparent justify-center items-center flex flex-col space-y-6 md:group-hover:border-[1px] md:group-hover:border-white md:group-hover:border-solid px-2'>
          <p className={`text-center justify-center text-white md:text-transparent md:group-hover:text-white duration-500 ${descriptionClassName}`}>
            {description}
          </p>
        </div>
      )}
    </div>
  )
}

export default ImageCard
