import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { knitwire, logo_bg } from '../assets';
import { motion } from 'framer-motion';
import Customers from './Slider/Customers';
import { Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';

const HomePage = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
  return (
    <>
    <section className="bg-pattern-sm md:bg-bg-pattern bg-cover bg-no-repeat bg-center bg-blend-overlay md:bg-fixed md:bg-black/75">

        {/* Nav Section */}
      <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black/40 md:bg-transparent`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo_bg} alt="logo" className="h-10 object-contain border-0" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-tertiary" : "text-white"} hover:text-tertiary text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
              <MdClose
                  className="w-[28px] h-[28px] cursor-pointer text-tertiary"
                  onClick={() => setToggle(!toggle)}
              />
          ) : (
              <MdMenu
                  className="w-[28px] h-[28px] cursor-pointer text-tertiary"
                  onClick={() => setToggle(!toggle)}
              />
          )}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[rgba(0,0,0,0.7)] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-tertiary" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => { setToggle(!toggle); setActive(link.title); }}>
                  <a href={`${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>

     <div className="min-h-screen flex items-center justify-center">
        <div className="text-center mx-auto flex flex-col items-center gap-8 md:gap-10">
                <h1 className="text-4xl md:text-6xl font-semibold text-white" >
                    Welcome to Jasha Consulting Services
                </h1>
                <p className="font-light text-xl md:text-4xl text-white-100">Your trusted partner since 2005</p>
                <div className='flex flex-col w-full gap-4 items-center'>
                    <div className='flex flex-col md:flex-row gap-4 md:gap-2'>
                      <Button variant='filled' size='lg' className='bg-black/75 hover:bg-black/30 border-2 border-black text-md md:text-2xl max-w-[220px]'><a href="#offer">JSC Services</a></Button>
                      <Button variant='filled' size='lg' className='bg-black/75 hover:bg-black/30 border-2 border-black text-md md:text-2xl max-w-[220px]'><img src={knitwire} alt='knitwire logo' className='bg-cover bg-no-repeat' /></Button>
                      <Button variant='filled' size='lg' className='bg-black/75 hover:bg-black/30 border-2 border-black text-md md:text-2xl max-w-[320px]'><a href="#bio">Bio Dynamic Fuel</a></Button>
                    </div>
                </div>
        </div>
    </div>

    <Customers />

    <div className="absolute bottom-10 md:bottom-20 w-full flex justify-center items-center">
        <a href={`#about`}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2">
            <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-tertiary mb-1"/>
          </div>
        </a>
      </div>
    </section>
    </>
  )
}

export default HomePage