import { AiOutlineSearch} from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { IoHomeOutline } from 'react-icons/io5'
import { BsBookmarks, BsList } from 'react-icons/bs'
import {BiUser}from 'react-icons/bi';
import {CgMoreO} from 'react-icons/cg'


export const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: <IoHomeOutline className='icon' />
  },
  {
    name: "Explore",
    path: "#",
    icon: <AiOutlineSearch className='icon' />
  },
  {
    name: "Notification",
    path: "#",
    icon: <BiBell className='icon' />
  },
  {
    name: "Message",
    path: "#",
    icon: <HiOutlineMail className='icon' />
  },
  {
    name: "Bookmark",
    path: "#",
    icon: <BsBookmarks className='icon' />
  },
  {
    name: "Lists",
    path: "#",
    icon: <BsList className='icon' />
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <BiUser className='icon' />
  },
  {
    name: "More",
    path: "#",
    icon: <CgMoreO className='icon' />
  },
];