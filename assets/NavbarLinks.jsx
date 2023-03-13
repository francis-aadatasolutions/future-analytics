import { TbSmartHome } from 'react-icons/tb';
import { FaUserTie } from 'react-icons/fa';
import { FiLayers } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';

export const NavbarLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/',
    icon: <TbSmartHome />,
    textSize: 'text-2xl',
    textColor: 'text-slate-500',
  },
  {
    id: 3,
    name: 'Services',
    link: '#services',
    icon: <FiLayers />,
    textSize: 'text-xl',
  },
  {
    id: 2,
    name: 'About',
    link: '#about',
    icon: <FaUserTie />,
    textSize: 'text-xl',
  },
  {
    id: 4,
    name: 'Contact',
    link: '#contact',
    icon: <AiOutlineMessage />,
    textSize: 'text-xl',
  },
];
