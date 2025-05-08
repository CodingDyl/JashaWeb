import React from 'react'
import { Button } from '@mantine/core';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { styles } from '../styles';
import { logo_bg } from '../assets';
import { FeaturesAsymmetrical } from '../components/FeaturesSection/FeaturesAsymmetrical';
import { Faq } from '../components/FAQ/faq';
import ImageListJasha from '../components/ImagesList/ImageListJasha';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';

const Jasha = () => {
  return (
    <>
    <div className="min-h-screen bg-black text-white py-20">
        <Navbar />
      <div className="container mx-auto px-4">
        <div className="w-[100%] h-[10%]">
          <img src={logo_bg} alt='jasha logo' className='px-2 w-[200px] h-auto mx-auto bg-no-repeat bg-center' />
        </div>

        <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-10 text-center mx-auto">
          <h2 className={styles.modalHeadText}>About Jasha.</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 mb-4 text-secondary m-auto text-center text-[17px] max-w-3xl leading-[30px]">
          Jasha Consulting Services was established in 2005 and have been servicing the Petro-Chemical, Chemical, Sugar, Paper and precious metal industries for the past 18 years. Jasha Consulting Services has a long and proud partnership with UK company Knitwire Products, for all internal items within the distillation columns and scrubber units.<br></br>
 
          Jasha Consulting Services works predominantly with stainless steel, however we have completed projects in both mild steel and plastic. Jasha Consulting Services fabricates platework and piping to customer requirements and all welders are coded to ASME IX 2021 for Stainless steel and AWS D1.1 2020 for Carbon steel.<br></br>
  
          Jasha Consulting Services have over 40 years combined knowledge and experience and are ready to facilitate clients with there needs
        </motion.p>

        <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-10 text-center mx-auto">
          <h2 className={styles.modalHeadText}>Our Services.</h2>
        </motion.div>

        <FeaturesAsymmetrical />

        <Faq />
        <ImageListJasha />

        <div className='w-[50%] flex justify-center items-center align-middle mx-auto mt-5 md:mt-10'>
          <Button variant='filled' size='lg' className='bg-[#00563B] hover:bg-[#00563B]/30 border-2 border-black text-md md:text-2xl max-w-[220px] min-w-full text-white m-auto'>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
      
    
    </div>
    <Footer />
    </>
  )
}

export default Jasha