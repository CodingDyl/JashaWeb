import { Container, Text } from '@mantine/core';
import { logo_bg } from '../../assets';
import classes from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img src={logo_bg} alt='logo' className='h-10 object-contain' />
        <Text size="sm" c="dimmed">
          © {currentYear} All rights reserved.
        </Text>
      </Container>
    </div>
  );
}