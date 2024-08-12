import { FaReact, FaNode } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiGit,
  SiCss3,
  SiJest,
  SiRedux,
  SiGoland,
  SiAwsamplify,
  SiChartdotjs,
  SiMaterialui,
  SiTailwindcss,
  SiTestinglibrary,
  SiEclipsemosquitto,
} from 'react-icons/si';
import { DiFirebase, DiHtml5, DiMongodb } from 'react-icons/di';

const colorForIcon = (darkMode) => (darkMode ? '#fff' : '#000');

export const technologies = (darkMode) => ({
  Git: <SiGit color={colorForIcon(darkMode)} />,
  Jest: <SiJest color={colorForIcon(darkMode)} />,
  Go: <SiGoland color={colorForIcon(darkMode)} />,
  Redux: <SiRedux color={colorForIcon(darkMode)} />,
  'Node.js': <FaNode color={colorForIcon(darkMode)} />,
  MongoDB: <DiMongodb color={colorForIcon(darkMode)} />,
  'React.js': <FaReact color={colorForIcon(darkMode)} />,
  'Custom CSS': <SiCss3 color={colorForIcon(darkMode)} />,
  Firebase: <DiFirebase color={colorForIcon(darkMode)} />,
  'Context API': <FaReact color={colorForIcon(darkMode)} />,
  MQTT: <SiEclipsemosquitto color={colorForIcon(darkMode)} />,
  'Redux Toolkit': <SiRedux color={colorForIcon(darkMode)} />,
  'Next.js': <TbBrandNextjs color={colorForIcon(darkMode)} />,
  'AWS Amplify': <SiAwsamplify color={colorForIcon(darkMode)} />,
  'Material-UI': <SiMaterialui color={colorForIcon(darkMode)} />,
  'Tailwind CSS': <SiTailwindcss color={colorForIcon(darkMode)} />,
  'Charting Library': <SiChartdotjs color={colorForIcon(darkMode)} />,
  'React Testing Library': <SiTestinglibrary color={colorForIcon(darkMode)} />,
});

export const techIUseIcons = (darkMode) => [
  { icon: <FaReact color='#087ea4' size={100} />, id: 1 },
  {
    icon: <TbBrandNextjs color={darkMode ? '#fff' : '#000'} size={100} />,
    id: 2,
  },
  { icon: <SiTailwindcss color='#046d80' size={100} />, id: 3 },
  { icon: <SiMaterialui color='#007fff' size={100} />, id: 4 },
  { icon: <SiJest color='#15c213' size={100} />, id: 5 },
  {
    icon: <SiGit color={darkMode ? '#fff' : '#000'} size={100} />,
    id: 6,
  },
  { icon: <DiHtml5 color='#dd4b25' size={100} />, id: 7 },
  {
    icon: <DiFirebase color={darkMode ? '#fff' : '#000'} size={100} />,
    id: 8,
  },
];
