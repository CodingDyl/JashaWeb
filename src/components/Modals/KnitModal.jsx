import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, ScrollArea } from '@mantine/core';
import { knitwire } from '../../assets';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import { Container, SimpleGrid, rem, Text } from '@mantine/core';
import { styles } from '../../styles';
import classes from '../FeaturesSection/FeaturesAsymmetrical.module.css'
import ImageListKnitwire from '../ImagesList/ImageListKnitwire';
import { knitwire_products_pdf } from '../../../public/index';
import FeatureModal from './FeatureModal';

function Feature({ icon: Icon, title, description, className, ...others }) {
    return (
      <div className={classes.feature} {...others}>
        <div className={classes.overlay} />
  
        <div className={classes.content}>
          <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={2} />
          <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
            {title}
          </Text>
          <Text c="dimmed" fz="sm">
            {description}
          </Text>
        </div>
      </div>
    );
}

const mockdata = [
    {
      icon: IconCircleCheckFilled,
      title: 'Mesh Demister',
      description:
        'Efficient mesh demister solutions for gas-liquid separation in industrial processes.',
      fullDescription: 'Our mesh demisters provide superior gas-liquid separation efficiency. These solutions are designed for optimal performance in various industrial processes, featuring high-quality materials and expert engineering.',
    },
    {
      icon: IconCircleCheckFilled,
      title: 'Vane Demister',
      description:
        'Effective vane demister systems for removing liquid droplets from gas streams.',
    },
    {
      icon: IconCircleCheckFilled,
      title: 'Random Packing',
      description:
        'High-quality random packing materials optimizing efficiency in chemical processing applications',
    },
    {
      icon: IconCircleCheckFilled,
      title: 'Structure Packing',
      description:
        'Advanced structured packing designs enhancing separation performance in distillation processes.',
    },
    {
      icon: IconCircleCheckFilled,
      title: 'Column Internals',
      description:
        'Tailored column internals for improved efficiency and performance in various industrial columns.',
    },
    {
      icon: IconCircleCheckFilled,
      title: 'Process Design',
      description:
        'Innovative process design services ensuring optimal performance and efficiency in operations.',
    },
  ];

const KnitModal = ({opened, close}) => {
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [featureModalOpened, { open: openFeature, close: closeFeature }] = useDisclosure(false);

    const handleFeatureClick = (feature) => {
        setSelectedFeature(feature);
        openFeature();
    };

    const items = mockdata.map((item) => (
        <Feature 
            {...item} 
            key={item.title}
        />
    ));

    return (
        <>
            <Modal 
                opened={opened}
                onClose={close}
                scrollAreaComponent={ScrollArea.Autosize}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
                radius={10}
                size='auto'
                padding={4}
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}

                styles={{
                    header: { backgroundColor: 'black', color: 'white'},
                    body: { backgroundColor: 'black', color: 'white', padding: '20px'}
                }}
            >
                <div className="w-[100%] h-[15%] flex items-center justify-center py-4">
                    <img 
                        src={knitwire} 
                        alt='knitwire logo' 
                        className='px-4 w-auto h-full object-contain max-h-[80px]' 
                    />
                </div>

                <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-6 text-center mx-auto">
                    <h2 className={`${styles.modalHeadText} text-2xl md:text-3xl`}>Our Services</h2>
                </motion.div>

                <Container mt={30} mb={30} size="lg">
                    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
                        {items}
                    </SimpleGrid>
                </Container>

                <div className='flex flex-col items-center justify-center gap-4 mt-8'>
                  <Text className='text-lg md:text-xl text-center'>
                    Download our product catalog to explore our complete range of solutions
                  </Text>
                  <Button 
                    component="a" 
                    href={knitwire_products_pdf}
                    download
                    variant='filled' 
                    size='lg' 
                    className='bg-[#00563B] hover:bg-[#00563B]/30 border-2 border-black text-md md:text-xl max-w-[280px] text-white'
                  >
                    Download Catalog
                  </Button>
                </div>

                <ImageListKnitwire />

                <div className='w-[50%] flex justify-center items-center align-middle mx-auto mt-5 md:mt-10'>
                    <Button variant='filled' size='lg' className='bg-[#00563B] hover:bg-[#00563B]/30 border-2 border-black text-md md:text-2xl max-w-[220px] min-w-full text-white m-auto' onClick={close}><a href="#contact">Contact Us</a></Button>
                </div>

            </Modal>
            <FeatureModal 
                opened={featureModalOpened} 
                close={closeFeature} 
                feature={selectedFeature || mockdata[0]} 
            />
        </>
    )
}

export default KnitModal