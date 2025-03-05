import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close, AstronautLogoPng } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  // Helper function to scroll to the section
  const handleScroll = (linkId) => {
    const element = document.getElementById(linkId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={AstronautLogoPng} alt="logo" className='w-14 h-14 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'> Richie&nbsp;| My Portfolio</p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                  ? 'text-white'
                  : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                if (window.location.pathname === '/') {
                  handleScroll(link.id);
                } else {
                  window.location.href = `/#${link.id}`;
                }
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center relative">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Fullscreen Mobile Drawer */}
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 bg-primary fixed top-[96px] left-0 right-0 h-[calc(100vh-70px)] z-50 flex-col justify-start items-center`}
          >
            <ul className="list-none flex flex-col gap-12 items-center justify-center w-full h-full mb-28">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[30px]`}
                  onClick={() => {
                    setToggle(false); // Close the menu when clicking a link
                    setActive(link.title);
                    if (window.location.pathname === '/') {
                      handleScroll(link.id);
                    } else {
                      window.location.href = `/#${link.id}`;
                    }
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar