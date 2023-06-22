import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { RiHome2Line, RiInformationLine, RiGalleryLine, RiCalendar2Line, RiUserLine, RiContactsLine } from 'react-icons/ri';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

import './navbar.css';

const links = [
  {
    name: "Home",
    path: '/',
    icon: <RiHome2Line />
  },
  {
    name: "About",
    path: '/about',
    icon: <RiInformationLine />
  },
  {
    name: "Gallery",
    path: '/gallery',
    icon: <RiGalleryLine />
  },
  {
    name: "Plans",
    path: '/plans',
    icon: <RiCalendar2Line />
  },
  {
    name: "Trainers",
    path: '/trainers',
    icon: <RiUserLine />
  },
  {
    name: "Contact",
    path: '/contacts',
    icon: <RiContactsLine />
  },
  {
    name: 'Sign In',
    path: '/signin',
    icon: <FaSignInAlt />
  },
  {
    name: 'Sign Up',
    path: '/signup',
    icon: <FaUserPlus />
  }
];

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className='container nav__container'>
        <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
          Fitness
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {links.map(({ name, path, icon }, index) => (
            <li key={index}>
              <NavLink to={path} onClick={() => setIsNavShowing(false)}>
                {icon}
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
