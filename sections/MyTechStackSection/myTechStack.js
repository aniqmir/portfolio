// utils
import { techIUseIcons } from '../../utils/technologies';

const TechIUseSection = ({ darkMode }) => {
  return (
    <section className='py-10'>
      {/* tech I use section */}
      <div className='text-center'>
        <p className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
          Technologies I Work With
        </p>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap items-center'>
          {techIUseIcons(darkMode).map((tech) => (
            <div
              className='basis animate-pulse flex-1 w-24 h-24'
              key={tech.icon}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechIUseSection;
