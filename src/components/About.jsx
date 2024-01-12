import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 min-h-screen`}
    >

        <span id='about'>
            &nbsp;  
        </span>

        <motion.div variants={textVariant}>
            <p className={styles.sectionSubText}>Introduction.</p>
            <h2 className={styles.sectionHeadText}>About Jasha</h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Jasha Consulting Services was established in 2005 and have been servicing the Petro-Chemical, Chemical, Sugar, Paper and precious metal industries for the past 18 years.  Jasha Consulting Services has a long and proud partnership with UK company Knitwire Products, for all internal items within the distillation columns and scrubber units. <br></br>
 
 Jasha Consulting Services works predominantly with stainless steel, however we have completed projects in both mild steel and plastic.  Jasha Consulting Services fabricates platework and piping to customer requirements and all welders are coded to ASME IX 2021 for Stainless steel and AWS D1.1 2020 for Carbon steel.<br></br>
  
 Jasha Consulting Services have over 40 years combined knowledge and experience and are ready to facilitate clients with there needs
          </motion.p>



    </motion.section>
  )
}

export default About