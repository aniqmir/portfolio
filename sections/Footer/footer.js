import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';

const Footer = ({ darkMode }) => {
  return (
    <footer className='bg-white dark:bg-gray-900'>
      <div className='w-full mx-auto max-w-screen-xl p-4 flex flex-col sm:flex-row items-center justify-between'>
        <span className='text-sm text-gray-500 text-center dark:text-gray-400'>
          © {new Date().getFullYear()} &nbsp;
          <a href='' className='hover:underline'>
            Muhammad Aniq Mir™
          </a>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap justify-center space-x-5 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a href='#about' className='hover:underline me-4 md:me-6'>
              About
            </a>
          </li>
          <li>
            <a href='#my-work' className='hover:underline'>
              My Work
            </a>
          </li>
          {[
            {
              icon: <MdEmail />,
              label: 'email',
              data: 'aniqmir@gmail.com',
            },
            {
              icon: <MdOutlineLocalPhone />,
              label: 'contact',
              data: '+92-332-5421905',
            },
          ].map((t) => (
            <li
              className='flex items-center justify-center space-x-2'
              key={t.label}
            >
              <span>{t.icon}</span>
              <span>{t.data}</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
