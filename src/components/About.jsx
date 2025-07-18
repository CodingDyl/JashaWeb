import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion'
import { FeaturesAsymmetrical } from './FeaturesSection/FeaturesAsymmetrical';
import Customers from './Slider/Customers';
import { Helmet } from 'react-helmet-async';
import StructuredData from './StructuredData';

const About = () => {
  return (
    <>
    <Helmet>
      <title>About Jasha Consulting Services | Industrial Engineering Experts</title>
      <meta name="description" content="Learn about Jasha Consulting Services - A leading industrial engineering company with over 18 years of experience in petro-chemical, chemical, sugar, paper, and precious metal industries." />
      <meta name="keywords" content="Jasha Consulting about, industrial engineering, petro-chemical industry, chemical industry, sugar industry, paper industry, precious metal industry, ASME IX, AWS D1.1" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="About Jasha Consulting Services | Industrial Engineering Experts" />
      <meta property="og:description" content="Discover our 18+ years of expertise in industrial engineering and fabrication services across multiple industries." />
      <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.jasha.co.za/about" />
    <meta property="og:image" content="https://www.jasha.co.za/src/assets/logo-white.png" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Jasha Consulting Services | Industrial Engineering Experts" />
      <meta name="twitter:description" content="Discover our 18+ years of expertise in industrial engineering and fabrication services across multiple industries." />
      <meta name="twitter:image" content="https://www.jasha.co.za/src/assets/logo-white.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.jasha.co.za/about" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Jasha Consulting Services" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
    </Helmet>

    <StructuredData 
      type="WebPage"
      data={{
        name: "About Jasha Consulting Services | Industrial Engineering Experts",
        description: "Learn about Jasha Consulting Services - A leading industrial engineering company with over 18 years of experience",
        url: "https://www.jasha.co.za/about"
      }}
    />

    <StructuredData 
      type="Organization"
      data={{
        name: "Jasha Consulting Services",
        url: "https://www.jasha.co.za/about",
        logo: "https://www.jasha.co.za/src/assets/logo-white.png",
        description: "A leading industrial engineering company with over 18 years of experience",
        foundingDate: "2005",
        socialLinks: [
          "https://www.linkedin.com/company/jasha-consulting-services",
          "https://www.facebook.com/jashaconsulting"
        ]
      }}
    />

    <span id='about'>
            &nbsp;  
        </span>
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 min-h-screen flex flex-col justify-center items-start`}
    >

        <motion.div variants={textVariant}>
            <p className={styles.sectionSubText}>Introduction.</p>
            <h2 className={styles.sectionHeadText}>About Jasha.</h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Jasha Consulting Services was established in 2005 and have been servicing the Petro-Chemical, Chemical, Sugar, Paper and precious metal industries for the past 18 years.  Jasha Consulting Services has a long and proud partnership with UK company Knitwire Products, for all internal items within the distillation columns and scrubber units. <br></br>
 
 Jasha Consulting Services works predominantly with stainless steel, however we have completed projects in both mild steel and plastic.  Jasha Consulting Services fabricates platework and piping to customer requirements and all welders are coded to ASME IX 2021 for Stainless steel and AWS D1.1 2020 for Carbon steel.<br></br>
  
 Jasha Consulting Services have over 40 years combined knowledge and experience and are ready to facilitate clients with there needs
          </motion.p>

    </motion.section>
    </>
  )
}

export default About