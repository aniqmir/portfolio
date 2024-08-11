// utils
import { projects } from '../../utils/projects';
import { technologies } from '../../utils/technologies';

const ProjectsSection = ({ darkMode }) => {
  return (
    <section className='py-10'>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        {projects.map((project) => (
          <div
            className='lg:max-w-xl sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 basis-3/6 flex-1'
            key={project.name}
          >
            <div className='p-10'>
              <h5 className='mb-2 text-2xl tracking-tight text-teal-600 font-medium dark:text-teal-400'>
                {project.name}
              </h5>
              <div className='flex  gap-10 py-10 flex-row flex-wrap'>
                {project.technologiesUsed.map((technology) => (
                  <p className='basis animate-spin'>
                    {technologies(darkMode)[technology]}
                  </p>
                ))}
              </div>
              <div className='my-5 font-normal text-teal-600 dark:text-teal-400'>
                <h2 className=' text-xl'>Overview</h2>
                <p className='mb-3 text-gray-800 dark:text-gray-200'>
                  {project.overview}
                </p>
              </div>
              <div className='my-5 text-teal-600 dark:text-teal-400'>
                <h2 className='font-normal text-xl'>Responsibilities</h2>
                <ul className='list-disc'>
                  {project.responsibilities.map((responsibility) => (
                    <li className='font-normal my-1 text-gray-800 dark:text-gray-200'>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
