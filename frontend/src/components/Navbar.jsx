import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { RiHome2Line, RiInformationLine, RiGalleryLine, RiCalendar2Line, RiUserLine, RiContactsLine } from 'react-icons/ri';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import {Context} from '../context/Context';
import './navbar.css';


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
 const {user,dispatch} = useContext(Context)
 const handleLogout = () =>{
  dispatch({type:'LOGOUT'});
 }

  return (
    
      <nav>
      <div className='container nav__container'>
        <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
          Fitness
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          <li>
            <NavLink to="/" onClick={() => setIsNavShowing(false)}>
              <RiHome2Line /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsNavShowing(false)}>
              <RiInformationLine /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={() => setIsNavShowing(false)}>
              <RiGalleryLine /> Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/trainers" onClick={() => setIsNavShowing(false)}>
              <RiUserLine /> Trainers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" onClick={() => setIsNavShowing(false)}>
              <RiContactsLine /> Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" onClick={() => setIsNavShowing(false)}>
              <FaSignInAlt /> Sign In
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" onClick={() => setIsNavShowing(false)}>
              <FaUserPlus /> Sign Up
            </NavLink>
          </li>
          {
            user && ( <>
              <li>
               <NavLink to="/plans" onClick={() => setIsNavShowing(false)}>
                 <RiCalendar2Line /> Plans
               </NavLink>
             </li>
             <li>
  <NavLink to="/logout" onClick={() => { handleLogout(); setIsNavShowing(false); }}>
    <FaSignOutAlt /> Logout
  </NavLink>
</li>

             </>
             )
             
          }
        
         
        </ul>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
