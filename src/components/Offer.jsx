import React from 'react'
import { FeaturesAsymmetrical } from './FeaturesSection/FeaturesAsymmetrical'
import { motion } from 'framer-motion'
import { textVariant, staggerContainer } from '../utils/motion'
import { styles } from '../styles'
import { Faq } from './FAQ/faq'
import ImageListJasha from './ImagesList/ImageListJasha'
import BioBanner from './Banner/BioBanner'

const Offer = () => {
  return (
    <>
    <span id='offer'>
            &nbsp;  
        </span>
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 min-h-screen`}
    >

        <motion.div variants={textVariant}>
            <p className={styles.sectionSubText}>What we offer</p>
            <h2 className={styles.sectionHeadText}>Our Services.</h2>
        </motion.div>

        <FeaturesAsymmetrical />

        <Faq />

        <ImageListJasha />

        <span id='bio'>
            &nbsp;  
        </span>
        <BioBanner />
        </motion.section>
    </>
  )
}

export default Offer