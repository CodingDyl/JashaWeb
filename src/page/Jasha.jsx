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
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import StructuredData from '../components/StructuredData';

const Jasha = () => {
  return (
    <>
    <Helmet>
      <title>Jasha Consulting Services | Industrial Fabrication & Engineering</title>
      <meta name="description" content="Jasha Consulting Services - Your trusted partner in industrial fabrication and engineering since 2005. Specializing in stainless steel, mild steel, and plastic fabrication for petro-chemical, chemical, and sugar industries." />
      <meta name="keywords" content="Jasha Consulting, industrial fabrication, engineering solutions, stainless steel fabrication, mild steel fabrication, plastic fabrication, piping solutions, South Africa" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Jasha Consulting Services | Industrial Fabrication & Engineering" />
      <meta property="og:description" content="Your trusted partner in industrial fabrication and engineering since 2005. Specializing in stainless steel, mild steel, and plastic fabrication." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jasha.co.za/company/jasha" />
      <meta property="og:image" content="https://jasha.co.za/src/assets/logo-white.png" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jasha Consulting Services" />
      <meta name="twitter:description" content="Your trusted partner in industrial fabrication and engineering since 2005." />
      <meta name="twitter:image" content="https://jasha.co.za/src/assets/logo-white.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://jasha.co.za/company/jasha" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Jasha Consulting Services" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
    </Helmet>
    
    <StructuredData 
      type="Organization"
      data={{
        name: "Jasha Consulting Services",
        url: "https://jasha.co.za/company/jasha",
        logo: "https://jasha.co.za/src/assets/logo-white.png",
        description: "Your trusted partner in industrial fabrication and engineering since 2005",
        foundingDate: "2005",
        socialLinks: [
          "https://www.linkedin.com/company/jasha-consulting-services",
          "https://www.facebook.com/jashaconsulting"
        ]
      }}
    />

    <StructuredData 
      type="Service"
      data={{
        name: "Industrial Fabrication & Engineering",
        description: "Specializing in stainless steel, mild steel, and plastic fabrication for petro-chemical, chemical, and sugar industries",
        serviceType: "Industrial Fabrication"
      }}
    />
    
    <div className="min-h-screen bg-black text-white py-20">
        <Navbar />
      <div className="container mx-auto px-4">
        <div className="w-[100%] h-[10%]">
          <img 
            src={logo_bg} 
            alt='Jasha Consulting Services Logo' 
            className='px-2 w-[200px] h-auto mx-auto bg-no-repeat bg-center' 
            loading="eager"
          />
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
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      
    
    </div>
    <Footer />
    </>
  )
}

export default Jasha