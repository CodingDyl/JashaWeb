import { Modal, ScrollArea, Button, Text, Container } from '@mantine/core';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { styles } from '../../styles';
import { pipe_1, pipe_2, pipe_3, pipe_4, pipe_5, pipe_6, pipe_7, pipe_8, pipe_9, pipe_11, pipe_12,
         steel_1, steel_2, steel_3, steel_4, steel_5, steel_6, steel_7, steel_8, steel_9, steel_10, steel_11, steel_12,
         mild_1, mild_2, mild_3, mild_4, mild_5, mild_6, mild_7, mild_8 } from '../../assets';
import { knitGal } from '../../constants';

const FeatureModal = ({ opened, close, feature }) => {
  const getFeatureImages = (featureTitle) => {
    switch(featureTitle) {
      case 'Piping':
        return [pipe_1, pipe_2, pipe_3, pipe_4, pipe_5, pipe_6, pipe_7, pipe_8, pipe_9, pipe_11, pipe_12];
      case 'Stainless Steel Fabrication':
        return [steel_1, steel_2, steel_3, steel_4, steel_5, steel_6, steel_7, steel_8, steel_9, steel_10, steel_11, steel_12];
      case 'Mild Steel Fabrication':
        return [mild_1, mild_2, mild_3, mild_4, mild_5, mild_6, mild_7, mild_8];
      case 'Mesh Demister':
        return knitGal.filter(img => img.category === 'mesh-demister').map(img => img.img);
      case 'Vane Demister':
        return knitGal.filter(img => img.category === 'vane-demister').map(img => img.img);
      case 'Random Packing':
        return knitGal.filter(img => img.category === 'random-packing').map(img => img.img);
      case 'Structure Packing':
        return knitGal.filter(img => img.category === 'structure-packing').map(img => img.img);
      case 'Column Internals':
        return knitGal.filter(img => img.category === 'column-internals').map(img => img.img);
      case 'Process Design':
        return knitGal.filter(img => img.category === 'process-design').map(img => img.img);
      default:
        return [];
    }
  };

  const featureImages = getFeatureImages(feature.title);

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
      </Container>

      {featureImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {featureImages.map((image, index) => (
            <div key={index} className="relative aspect-square">
              <img
                src={image}
                alt={`${feature.title} example ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}

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