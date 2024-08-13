// components
import Carousel from '../../components/Carousel';

// utils
import { projects } from '../../utils/projects';
import { technologies } from '../../utils/technologies';

const MyWorkSection = ({ darkMode }) => {
  return (
    <section className='py-10' id='my-work'>
      <p className='text-5xl text-center py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
        My Work
      </p>
      <div className='py-10'>
        <Carousel>
          {[...projects].reverse().map((project) => (
            <div
              key={project.name}
              className={`transition-all bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
            >
              <div className='m-10'>
                <a href={project.link} target='_blank'>
                  <h5 className=' mb-2 text-2xl tracking-tight text-teal-600 font-medium dark:text-teal-400'>
                    {project.name}
                  </h5>
                </a>

                <h5 className='my-1 font-normal text-teal-600 dark:text-teal-400 underline'>
                  Tech Stack
                </h5>
                <div className='flex gap-10 py-5 flex-row flex-wrap'>
                  {project.technologiesUsed.map((technology) => (
                    <p className='basis animate-spin-slow' key={technology}>
                      {technologies(darkMode)[technology]}
                    </p>
                  ))}
                </div>
                <div className='my-5 font-normal text-teal-600 dark:text-teal-400'>
                  <h2 className=' text-xl underline'>Overview</h2>
                  <p className='mb-3 pt-1 text-gray-800 dark:text-gray-200 leading-6'>
                    {project.overview}
                  </p>
                </div>
                <div className='my-5 text-teal-600 dark:text-teal-400'>
                  <h2 className='font-normal text-xl underline'>
                    Responsibilities
                  </h2>
                  <ul className='list-disc'>
                    {project.responsibilities.map((responsibility) => (
                      <li
                        className='font-normal my-1 text-gray-800 dark:text-gray-200'
                        key={responsibility}
                      >
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default MyWorkSection;
