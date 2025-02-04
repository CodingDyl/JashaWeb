import { Modal, ScrollArea, Button, Text, Container } from '@mantine/core';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { styles } from '../../styles';

const FeatureModal = ({ opened, close, feature }) => {
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
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-6 text-center mx-auto">
        <h2 className={`${styles.modalHeadText} text-2xl md:text-3xl`}>{feature.title}</h2>
      </motion.div>

      <Container mt={30} mb={30} size="lg">
        <Text className="text-lg leading-relaxed">
          {feature.fullDescription || feature.description}
        </Text>
        {/* Add more content here like images, specifications, etc. */}
      </Container>

      <div className='w-[50%] flex justify-center items-center align-middle mx-auto mt-5 md:mt-10'>
        <Button 
          variant='filled' 
          size='lg' 
          className='bg-[#00563B] hover:bg-[#00563B]/30 border-2 border-black text-md md:text-2xl max-w-[220px] min-w-full text-white m-auto' 
          onClick={close}
        >
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </Modal>
  );
};

export default FeatureModal; 