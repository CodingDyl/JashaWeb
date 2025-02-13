import React from 'react'
import { Modal, Button, ScrollArea } from '@mantine/core';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { styles } from '../../styles';
import { logo_bg } from '../../assets';
import { FeaturesAsymmetrical } from '../FeaturesSection/FeaturesAsymmetrical';
import { Faq } from '../FAQ/faq';
import ImageListJasha from '../ImagesList/ImageListJasha';

const JashaModal = ({opened, close}) => {
  return (
    <Modal 
        opened={opened}
        onClose={close}
        scrollAreaComponent={ScrollArea.Autosize}
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
        radius={10}
        size='auto'
        padding={6}
        overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
        }}
        styles={{
            header: { backgroundColor: 'black', color: 'white'},
            body: { backgroundColor: 'black', color: 'white', padding: '20px'}
        }}
    >
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

        {/* <ImageListJasha /> */}

        <div className='w-[50%] flex justify-center items-center align-middle mx-auto mt-5 md:mt-10'>
            <Button variant='filled' size='lg' className='bg-[#00563B] hover:bg-[#00563B]/30 border-2 border-black text-md md:text-2xl max-w-[220px] min-w-full text-white m-auto' onClick={close}><a href="#contact">Contact Us</a></Button>
        </div>
    </Modal>
  )
}

export default JashaModal