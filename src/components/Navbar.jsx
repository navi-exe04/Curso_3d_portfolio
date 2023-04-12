import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState('');

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo header */}
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            //                              //Go to the top of the page
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} width={200} alt="logo" className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Raúl <span className='sm:block hidden'>| JavaScript Developer</span>
          </p>
        </Link>

        {/* Menu header */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>

        {/* Menu header button */}
        
      </div>
    </nav>
  )
}

export default Navbar