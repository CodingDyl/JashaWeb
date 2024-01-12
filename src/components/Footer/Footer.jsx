import { Container, Group, Anchor } from '@mantine/core';
import { logo_bg } from '../../assets';
import classes from './Footer.module.css';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Careers' },
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
        <img src={logo_bg} alt='logo' size={5} className='w-20 h-20' />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}