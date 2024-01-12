import { Container, Group, Anchor } from '@mantine/core';
import { logo_bg } from '../../assets';
import classes from './Footer.module.css';

const links = [
  { link: 'contact', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#about', label: 'About' },
  { link: '#', label: 'Learn More' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img src={logo_bg} alt='logo' size={5} className='h-10 object-contain' />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}