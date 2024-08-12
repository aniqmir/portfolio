// utils
import { techIUseIcons } from '../../utils/technologies';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const TechIUseSection = ({ darkMode }) => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <section className='py-10' ref={ref}>
      {/* tech I use section */}
      <div
        className={`text-center transition-all  ${
          isIntersecting ? 'translate-y-0' : 'translate-y-10'
        }`}
      >
        <p className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
          Technologies I Work With
        </p>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap items-center'>
          {techIUseIcons(darkMode).map((tech) => (
            <div className='basis animate-pulse flex-1 w-24 h-24' key={tech.id}>
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechIUseSection;
