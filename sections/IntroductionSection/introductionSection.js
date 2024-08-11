import Image from 'next/image';

import { SiGit } from 'react-icons/si';
import { AiFillLinkedin } from 'react-icons/ai';

// dev-image
import DevAniqDark from '../../public/aniq-dev-dark.png';
import DevAniqLight from '../../public/aniq-dev-light.png';

const IntroductionSection = ({ darkMode }) => (
  <div className='text-center lg:p-10 py-10'>
    <h2 className='text-3xl lg:text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
      Muhammad Aniq Mir
    </h2>
    <h3 className='text-xl lg:text-2xl py-2 dark:text-white md:text-3xl'>
      Software Engineer & Front End Developer.
    </h3>
    <p className='text-md py-5 text-justify leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'>
      Experienced and passionate Front-End Developer specializing in React JS,
      Redux, HTML, CSS, Next and Tailwind CSS. With over 4 years of industry
      experience, I thrive on creating seamless user experiences and translating
      design concepts into efficient and visually appealing web applications.
    </p>
    <div className='text-5xl animate-bounce flex justify-center gap-16 py-5 text-gray-600 dark:text-gray-400'>
      <a href='https://www.linkedin.com/in/aniqmir/' target='_blank'>
        <AiFillLinkedin />
      </a>
      <a href='https://github.com/aniqmir' target='_blank'>
        <SiGit />
      </a>
    </div>
    <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-96 md:w-96'>
      <Image
        alt='Dev Aniq'
        src={darkMode ? DevAniqLight : DevAniqDark}
        layout='fill'
        objectFit='cover'
      />
    </div>
  </div>
);

export default IntroductionSection;
