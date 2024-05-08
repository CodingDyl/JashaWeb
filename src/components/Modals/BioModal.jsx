import React from 'react'
import { Modal, Button, ScrollArea } from '@mantine/core';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { styles } from '../../styles';
import { bio_logo } from '../../assets';
import ImageListBio from '../ImagesList/ImageListBio';

const BioModal = ({opened, close}) => {
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
        <div className="w-[100%] h-[20%]">
            <img src={bio_logo} alt='knitwire logo' className='px-2 w-full h-full bg-no-repeat bg-center' />
        </div>

        <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-10 text-center mx-auto">
            <h2 className={styles.modalHeadText}>What is BioFuel?</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 mb-4 text-secondary m-auto text-center text-[17px] max-w-3xl leading-[30px]">
        Welcome to Bio-Dynamic Fuel, where innovation meets sustainability in the realm of biodiesel production. With over a decade of expertise in crafting manually-operated biodiesel machines, our founders have honed their skills to perfection. From the early days of cumbersome 1st generation machines to the sleek efficiency of our patented B-Tech 40, we've continually pushed the boundaries of what's possible in the biofuel industry.<br></br>
 
        Our journey has been marked by milestones, including a spotlight on national television by Carte Blanche in 2006, showcasing our commitment to revolutionizing sustainable energy solutions. Drawing from our team's rich background in consumer goods, we've infused our technology with ease of use, making biodiesel production accessible to all.<br></br>
          </motion.p>
          

          <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-10 text-center mx-auto">
            <h2 className={styles.modalHeadText}>Going Green?</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 mb-4 text-secondary m-auto text-center text-[17px] max-w-3xl leading-[30px]">
        At Bio-Dynamic Fuel, we don't just stop at producing clean energy – we strive for complete environmental responsibility. Our biodiesel manufacturing process is entirely carbon neutral, ensuring a minimal ecological footprint. By repurposing waste cooking oil into a valuable resource, we mitigate the risks associated with improper disposal, safeguarding both our environment and communities from harm.<br></br>
 
        Moreover, our dedication extends beyond fuel production. We actively contribute to waste reduction by recycling glycerine into eco-friendly cleaning products, leaving no byproduct wasted. Additionally, our adherence to the Carbon Tax Act allows us to not only reap the benefits of carbon credit accumulation but also participate in trading, further enhancing our sustainability efforts.<br></br>

        Join us at Bio-Dynamic Fuel as we pave the way towards a cleaner, greener future, one biodiesel cycle at a time.
          </motion.p>
        <ImageListBio />

        <div className='w-[50%] flex justify-center items-center align-middle mx-auto mt-5 md:mt-10'>
            <Button variant='filled' size='lg' className='bg-[#00563B] hover:bg-[#00563B]/30 border-2 border-black text-md md:text-2xl max-w-[220px] min-w-full text-white m-auto' onClick={close}><a href="#contact">Contact Us</a></Button>
        </div>

    </Modal>
  )
}

export default BioModal