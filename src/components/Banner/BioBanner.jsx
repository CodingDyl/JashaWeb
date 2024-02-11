import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import Lottie from 'lottie-react';
import animationData from '../../assets/bioFuelAni.json'
import classes from './BioBanner.module.css';
import { IconDownload } from '@tabler/icons-react';

function downloadPDF() {
    const pdfUrl = '/bdf.pdf';

    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'bioFuelDocument.pdf';

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
}

const BioBanner = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title fw={900} className={classes.title}>Want to help our Planet...</Title>
        <Text fw={400} fz="lg" mb={5}>
          Learn more about <strong>Bio Dynamic Fuel</strong>
        </Text>
        <Text fz="sm" c="dimmed">
            Discover the future of sustainable energy! Learn how we're revolutionizing the industry with eco-friendly solutions. Click here to explore our mission and innovation today!
        </Text>

        
          <Button onClick={downloadPDF} className="bg-black/40 hover:bg-black/20 border-1 border-white-100 mt-4 w-full" rightSection={<IconDownload size={14} />}>Learn More</Button>
        </div>
      <Lottie animationData={animationData} />
    </div>
  )
}

export default BioBanner