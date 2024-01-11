import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo_bg } from '../assets';
import { motion } from 'framer-motion'

const HomePage = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
  return (
    <>
    <section className="bg-bg-pattern bg-cover bg-no-repeat bg-center bg-blend-overlay bg-fixed bg-black/60">

        {/* Nav Section */}
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[rgba(0, 0, 0, 0.6)]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo_bg} alt="logo" className="h-10 object-contain" />
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

     <div className='h-screen flex items-center justify-center'>
        <div className="text-center mx-auto flex flex-col items-center gap-8 md:gap-10">
                <h1 className="text-4xl md:text-6xl font-semibold text-white" >
                    Welcome to Jasha Consulting Service!
                </h1>
                <p className="font-light text-xl md:text-4xl text-white-100">Your trusted partner since 2005</p>
                <a href="" className="px-8 py-2 inline-block bg-primary/80 text-white font-light md:text-3xl text-xl rounded-xl hover:bg-transparent hover:border-2 hover:border-black">Get Started</a>
        </div>
    </div>

    <div className="absolute bottom-10 md:bottom-20 w-full flex justify-center items-center">
        <a href={`#about`}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2">
            <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-tertiary mb-1"/>
          </div>
        </a>
      </div>
    </section>

    <section className='min-h-screen bg-black'></section>
    </>
  )
}

export default HomePage