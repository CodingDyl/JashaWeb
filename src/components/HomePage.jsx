import React from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { knitwire, logo_bg } from '../assets';
import { motion } from 'framer-motion';
import Customers from './Slider/Customers';
import { Button } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <>
    

    {/* Hidden content for SEO */}
    <div className="sr-only" aria-hidden="true">
      <div id="jasha-modal-content">
        <h2>Jasha Consulting Services</h2>
        <p>Industrial Fabrication and Engineering Solutions since 2005</p>
      </div>
      <div id="knitwire-modal-content">
        <h2>Knitwire</h2>
        <p>Specialized wire mesh solutions</p>
      </div>
      <div id="bio-modal-content">
        <h2>Bio Dynamic Fuel</h2>
        <p>Sustainable energy solutions</p>
      </div>
    </div>

    <section className="bg-pattern-sm md:bg-bg-pattern bg-cover bg-no-repeat bg-center bg-blend-overlay md:bg-fixed md:bg-black/60">
        <Navbar />

     <div className="min-h-screen flex items-center justify-center">
        <div className="text-center mx-auto flex flex-col items-center gap-8 md:gap-10">
                <h1 className="text-4xl md:text-6xl font-semibold text-white" >
                    Welcome to Jasha Consulting Services
                </h1>
                <p className="font-light text-xl md:text-4xl text-white-100">Your trusted partner since 2005</p>
                <div className='flex flex-col w-full gap-4 items-center'>
                    <div className='flex flex-col md:flex-row gap-4 md:gap-2'>
                      <Link to="/company/jasha">
                        <Button variant='filled' size='lg' className='bg-black/75 hover:bg-black/30 border-1 border-b-secondary hover:border-black text-md md:text-2xl min-w-[300px] p-2'>
                          <img src={logo_bg} alt='jasha logo' className='w-full h-8 object-contain' />
                        </Button>
                      </Link>
                      <Link to="/company/knitwire">
                        <Button variant='filled' size='lg' className='bg-black/75 hover:bg-black/30 border-1 border-b-secondary hover:border-black text-md md:text-2xl min-w-[300px] p-2'>
                          <img src={knitwire} alt='knitwire logo' className='w-full h-8 object-contain' />
                        </Button>
                      </Link>
                      <Link to="/company/biodynamic-fuel">
                        <Button variant='filled' size='lg' className='bg-black/75 hover:bg-black/30 border-1 border-b-secondary hover:border-black text-md md:text-2xl min-w-[300px]'>Bio Dynamic Fuel</Button>
                      </Link>
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