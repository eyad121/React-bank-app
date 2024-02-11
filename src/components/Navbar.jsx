import React from "react";
import { useState } from 'react';
import { close, logo, menu } from "../assets";
import { navLinks } from '../Constants';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
      <nav className="w-full flex py-6 justify-between items-center navbar">
          <img src={logo} alt="hooBank" 
           className="w-[124px] h-[32px]"
          />
          <ul className="text-white list-none sm:flex  hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li 
                key={nav.id}
                className={` font-poppins font-normal cursor-pointer text-[16px]
                ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
                   <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={ () => setToggle(!toggle)}
            />
            <div
            className={`${toggle ? 'flex' : 'hidden'}
            p-[1rem] bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                 <ul className="text-white list-none flex flex-col justify-end items-center flex-1">
                 {navLinks.map((nav, index) => (
                  <li 
                  key={nav.id}
                  className={` font-poppins font-normal cursor-pointer text-[16px]
                  ${index === navLinks.length - 1 ? "mb-0" : "mb-3"}`}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                  ))}
                </ul>
            </div>

          </div>
      </nav>
  );
};

export default Navbar;
