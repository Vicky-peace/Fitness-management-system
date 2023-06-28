
import React, { useState } from 'react';
import {
    FaBars,
    FaUserAlt

}from "react-icons/fa";
import {  RiCalendar2Line } from 'react-icons/ri';
import {MdOutlineContactPhone} from 'react-icons/md';
 import {FaUsers,FaRegImage} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './sidenav.css';

const Sidenav = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
    
        {
            path:"/profile",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/gallery",
            name:"Gallery",
            icon:<FaRegImage/>
        },
        {
            path:"/viewplans",
            name:"View Plans",
            icon:<RiCalendar2Line/>
        },
        {
            path:"/contacts",
            name:"Contact",
            icon:<MdOutlineContactPhone/>
        },
        {
            path:"/members",
            name:"Members",
            icon:<FaUsers/>
        }
    ]
    return (
        <div className="nav_container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Fitness</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidenav;