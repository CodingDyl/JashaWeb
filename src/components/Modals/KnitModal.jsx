import React from 'react'
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
      title: 'Mesh Delisted',
      description:
        'Efficient mesh demister solutions for gas-liquid separation in industrial processes.',
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
    const items = mockdata.map((item) => <Feature {...item} key={item.title} />);
  return (
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
        <div className="w-[100%] h-[20%]">
            <img src={knitwire} alt='knitwire logo' className='px-2 w-full h-full bg-no-repeat bg-center' />
        </div>

        <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-10 text-center mx-auto">
            <h2 className={styles.modalHeadText}>Our Services.</h2>
        </motion.div>

        <Container mt={30} mb={30} size="lg">
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
                {items}
            </SimpleGrid>
        </Container>

        <ImageListKnitwire />

        <div className='w-[50%] flex justify-center items-center align-middle mx-auto mt-5 md:mt-10'>
            <Button variant='filled' size='lg' className='bg-[#00563B] hover:bg-[#00563B]/30 border-2 border-black text-md md:text-2xl max-w-[220px] min-w-full text-white m-auto' onClick={close}><a href="#contact">Contact Us</a></Button>
        </div>

    </Modal>
  )
}

export default KnitModal