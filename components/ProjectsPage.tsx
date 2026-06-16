import Link from 'next/link'
import projects from '@/data/projects'
import ImageCard from '@/components/ImageCard'

const ProjectsPage = () => {
  return (
    <div className='pb-10 min-h-screen items-center flex flex-col font-aleo'>
      <h1 className='text-[20px] md:text-[35px] font-semibold'>Our Projects</h1>
      <div className='sm:grid sm:grid-cols-3 flex flex-wrap justify-center items-center gap-8 duration-1000 mt-5'>
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className='group'>
            <ImageCard
              title={project.title}
              description={project.description}
              background={project.background}
              className='w-[150px] h-[250px] md:w-[200px] md:h-[350px] lg:w-[300px] lg:h-[450px]'
              descriptionClassName='text-[11px] md:text-md lg:text-xl md:text-[#696969] md:group-hover:text-white'
            />
            <p className='text-center text-brand-teal text-xs mt-2 font-semibold group-hover:underline'>
              View project →
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
