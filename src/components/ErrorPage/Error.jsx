import { Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import error_404 from '../../assets/error/404_img.png';
import classes from './Error.module.css';
import { Link } from 'react-router-dom';

export default function NotFoundImage() {
  return (
    <Container className={`${classes.root} bg-primary min-h-screen w-full`}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }} className='mx-auto flex flex-col justify-center items-center'>
        <Image src={error_404} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Link to="/">
            <Button variant="outline" size="md" mt="xl" className={classes.control}>
              Get back to home page
            </Button>
          </Link>
        </div>
        <Image src={error_404} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}