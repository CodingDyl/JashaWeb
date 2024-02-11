import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import classes from './Faq.module.css';
import Lottie from 'lottie-react';
import animationData from '../../assets/faq_img.json'

const fa1 = '59 Aletta Avenue 1609 Edenvale - Eden Glen Ext 18 Gauteng - SouthAfrica';

const fa2 = "Our services encompass a wide range of offerings, including precision stainless steel fabrication tailored for diverse industrial applications, custom mild steel fabrication for durable projects, specialized plastic fabrication for versatile industrial solutions, efficient piping solutions ensuring seamless flow for various systems, and precision cut-to-size services to meet specific material requirements."

const fa3 = 'We currently do not have a review system. Should you require any assistance or want to leave a review please contact us directly and we can assist you.'

const fa4 = 'Yes! Jasha, Knitwire and Bio Dynamic Fuel can all be found in one place to solve any problem you may have. Contact Us today for any service you may aquire from these companies.'

export function Faq() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Lottie animationData={animationData} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>Where can I find you guys?</Accordion.Control>
                <Accordion.Panel className='text-[#808080]'>{fa1}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>What services do you offer?</Accordion.Control>
                <Accordion.Panel className='text-[#808080]'>{fa2}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>How can I leave a review?</Accordion.Control>
                <Accordion.Panel className='text-[#808080]'>{fa3}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  Are Jasha & Knit Wire the same company?
                </Accordion.Control>
                <Accordion.Panel className='text-[#808080]'>{fa4}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}