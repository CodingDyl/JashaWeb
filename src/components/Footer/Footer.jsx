import { Container, Text } from '@mantine/core';
import { logo_bg } from '../../assets';
import classes from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${classes.footer} mt-5`} role="contentinfo">
      <Container className={classes.inner}>
        <img src={logo_bg} alt='Jasha Consulting Services Logo' className='h-10 object-contain' />
        <Text size="sm" c="dimmed">
          © {currentYear} Jasha Consulting Services. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}

export default Footer;