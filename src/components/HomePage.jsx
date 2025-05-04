import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { knitwire, logo_bg } from '../assets';
import { motion } from 'framer-motion';
import Customers from './Slider/Customers';
import { Button } from '@mantine/core';
import KnitModal from './Modals/KnitModal';
import BioModal from './Modals/BioModal';
import JashaModal from './Modals/JashaModal';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false);
    const [openBio, setOpenBio] = useState(false);
    const [openJasha, setOpenJasha] = useState(false);

    const handleModalOpen = () => {
      setOpen(true);
    }

    const handleModalOpenBio = () => {
      setOpenBio(true);
    }

    const handleModalOpenJasha = () => {
      setOpenJasha(true);
    }

  return (
    <>
    <Helmet>
      <title>Jasha Consulting Services | Industrial Fabrication & Engineering Solutions</title>
      <meta name="description" content="Jasha Consulting Services - Your trusted partner in industrial fabrication, engineering solutions, and sustainable energy since 2005. Specializing in stainless steel, mild steel, and plastic fabrication." />
      <meta name="keywords" content="Jasha Consulting, industrial fabrication, engineering solutions, stainless steel fabrication, mild steel fabrication, plastic fabrication, piping solutions, South Africa" />
      <meta property="og:title" content="Jasha Consulting Services | Industrial Fabrication & Engineering Solutions" />
      <meta property="og:description" content="Your trusted partner in industrial fabrication, engineering solutions, and sustainable energy since 2005." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jasha.co.za" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jasha Consulting Services" />
      <meta name="twitter:description" content="Your trusted partner in industrial fabrication and engineering solutions since 2005." />
      <link rel="canonical" href="https://jasha.co.za" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Jasha Consulting Services",
            "url": "https://jasha.co.za",
            "logo": "https://jasha.co.za${logo_bg}",
            "description": "Industrial Fabrication and Engineering Solutions",
            "foundingDate": "2005",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "South Africa"
            },
            "sameAs": [
              "https://www.linkedin.com/company/jasha-consulting-services",
              "https://www.facebook.com/jashaconsulting"
            ]
          }
        `}
      </script>
    </Helmet>

    {/* Hidden content for SEO - Modal content */}
    <div className="sr-only" aria-hidden="true">
      <div id="jasha-modal-content">
        <h2>Jasha Consulting Services</h2>
        <p>Industrial Fabrication and Engineering Solutions since 2005</p>
        {/* Add more relevant content from your modal */}
      </div>
      <div id="knitwire-modal-content">
        <h2>Knitwire</h2>
        <p>Specialized wire mesh solutions</p>
        {/* Add more relevant content from your modal */}
      </div>
      <div id="bio-modal-content">
        <h2>Bio Dynamic Fuel</h2>
        <p>Sustainable energy solutions</p>
        {/* Add more relevant content from your modal */}
      </div>
    </div>

    <section className="bg-pattern-sm md:bg-bg-pattern bg-cover bg-no-repeat bg-center bg-blend-overlay md:bg-fixed md:bg-black/60">


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
                      <Button variant='filled' size='lg' className='bg-black/75 hover:bg-black/30 border-1 border-b-secondary hover:border-black text-md md:text-2xl min-w-[300px] p-2' onClick={handleModalOpenJasha}>
                        <img src={logo_bg} alt='jasha logo' className='w-full h-8 object-contain' />
                      </Button>
                      <Button variant='filled' size='lg' className='bg-black/75 hover:bg-black/30 border-1 border-b-secondary hover:border-black text-md md:text-2xl min-w-[300px] p-2' onClick={handleModalOpen}>
                        <img src={knitwire} alt='knitwire logo' className='w-full h-8 object-contain' />
                      </Button>

                      <Button variant='filled' size='lg' className='bg-black/75 hover:bg-black/30 border-1 border-b-secondary hover:border-black text-md md:text-2xl min-w-[300px]' onClick={handleModalOpenBio}>Bio Dynamic Fuel</Button>
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
    <KnitModal opened={open} close={() => setOpen(false)} />
    <BioModal opened={openBio} close={() => setOpenBio(false)} /> 
    <JashaModal opened={openJasha} close={() => setOpenJasha(false)} />
    </>
  )
}


export default HomePage