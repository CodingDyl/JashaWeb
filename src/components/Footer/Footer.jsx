import { Container, Text } from '@mantine/core';
import { logo_bg } from '../../assets';
import classes from './Footer.module.css';
import { Helmet } from 'react-helmet-async';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Jasha Consulting Services",
              "url": "https://jasha.co.za",
              "logo": "https://jasha.co.za${logo_bg}",
              "description": "Industrial Fabrication and Engineering Solutions",
              "foundingDate": "2005",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "South Africa"
              }
            }
          `}
        </script>
      </Helmet>
      <footer className={`${classes.footer} mt-5`} role="contentinfo">
        <Container className={classes.inner}>
          <img src={logo_bg} alt='Jasha Consulting Services Logo' className='h-10 object-contain' />
          <Text size="sm" c="dimmed">
            © {currentYear} Jasha Consulting Services. All rights reserved.
          </Text>
        </Container>
      </footer>
    </>
  );
}

export default Footer;