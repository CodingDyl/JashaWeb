import { TextInput, Textarea, SimpleGrid, Group, Button } from '@mantine/core';
import { motion } from 'framer-motion';
import { useForm } from '@mantine/form';
import { textVariant, staggerContainer } from '../utils/motion';
import { styles } from '../styles';
import { contactPeople } from '../constants';
import { Resend } from 'resend';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import EmployeeCard from './EmployeeCard';
import.meta.env.JASHA_API_KEY
import { notifications } from '@mantine/notifications';
import { Notifications } from '@mantine/notifications';
import { Helmet } from 'react-helmet-async';

export function Contact() {

  const formRef = useRef();


  const validate = {
    name: (value) => value.trim().length < 2,
    email: (value) => !/^\S+@\S+$/.test(value),
    subject: (value) => value.trim().length === 0,
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validate.name(form.name) ||
      validate.email(form.email) ||
      validate.subject(form.subject)
    ) {
      notifications.show({
        title: 'Validation Error',
        message: 'Please fill out all the required fields correctly.',
        color: 'red',
        autoClose: 4000,
        withBorder: true,
        styles: (theme) => ({
          root: {
            backgroundColor: 'white',
            '&::before': { backgroundColor: theme.colors.red[6] },
          },
          title: { color: 'black' },
          description: { color: 'black' },
          closeButton: {
            color: 'black',
            '&:hover': { backgroundColor: theme.colors.gray[1] },
          },
        }),
      });
      return;
    }

    setLoading(true);

    emailjs.send(
        'service_s34n27g',
        'template_m74jauw',
        {
          from_name: form.name,
          to_name: "Jasha Consulting",
          from_email: form.email,
          to_email: "shaun@jasha.co.za",
          message: form.message,
          subject: form.subject,
        },
        'EfmDX1DNlIAyMCXdr'
      )
      .then(
        () => {
          setLoading(false);
          notifications.show({
            title: 'Success!',
            message: 'Thank you. We will get back to you as soon as possible.',
            color: 'green',
            autoClose: 4000,
            withBorder: true,
            styles: (theme) => ({
              root: {
                backgroundColor: 'white',
                '&::before': { backgroundColor: theme.colors.green[6] },
              },
              title: { color: 'black' },
              description: { color: 'black' },
              closeButton: {
                color: 'black',
                '&:hover': { backgroundColor: theme.colors.gray[1] },
              },
            }),
          });

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          
          notifications.show({
            title: 'Error',
            message: 'Something went wrong. Please try again.',
            color: 'red',
            autoClose: 4000,
            withBorder: true,
            styles: (theme) => ({
              root: {
                backgroundColor: 'white',
                '&::before': { backgroundColor: theme.colors.red[6] },
              },
              title: { color: 'black' },
              description: { color: 'black' },
              closeButton: {
                color: 'black',
                '&:hover': { backgroundColor: theme.colors.gray[1] },
              },
            }),
          });
        }
      );
  };

  return (
    <>
    <Helmet>
      <title>Contact Jasha Consulting Services | Industrial Fabrication Experts</title>
      <meta name="description" content="Get in touch with Jasha Consulting Services, South Africa's leading industrial fabrication experts. Contact us for stainless steel, mild steel, and plastic fabrication solutions." />
      <meta name="keywords" content="Jasha Consulting Services, industrial fabrication contact, engineering solutions, South Africa, stainless steel fabrication, mild steel fabrication" />
      <meta property="og:title" content="Contact Jasha Consulting Services | Industrial Fabrication Experts" />
      <meta property="og:description" content="Get in touch with Jasha Consulting Services, South Africa's leading industrial fabrication experts." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jasha.co.za/contact" />
      <link rel="canonical" href="https://jasha.co.za/contact" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "name": "Jasha Consulting Services",
            "description": "Industrial Fabrication and Engineering Solutions",
            "url": "https://jasha.co.za",
            "contactType": "customer service",
            "areaServed": "South Africa",
            "availableLanguage": ["English"]
          }
        `}
      </script>
    </Helmet>
    <span id='contact'>
        &nbsp;  
    </span>
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mb-0`}
    >
        <div className='relative bg-tertiary/20 rounded-2xl p-12 backdrop-blur-sm shadow-xl'>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-black/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black/5 rounded-full blur-2xl" />

            <motion.div variants={textVariant} className="relative">
                <p className={`${styles.sectionSubText} inline-block pb-2 border-b-2 border-black/20`}>Get In Touch</p>
                <h2 className={`${styles.sectionHeadTextContact} mb-8`}>Contact Us.</h2>
            </motion.div>

            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10">
                <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl" className="gap-6">
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        variant="filled"
                        classNames={{
                            input: 'bg-white/50 border-0 transition-all duration-300 hover:bg-white/70 focus:bg-white/90',
                            label: 'font-medium mb-2'
                        }}
                    />
                    <TextInput
                        label="Email"
                        placeholder="Your email"
                        name="email"
                        onChange={handleChange}
                        value={form.email}
                        variant="filled"
                        classNames={{
                            input: 'bg-white/50 border-0 transition-all duration-300 hover:bg-white/70 focus:bg-white/90',
                            label: 'font-medium mb-2'
                        }}
                    />
                </SimpleGrid>

                <TextInput
                    label="Subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    mt="md"
                    name="subject"
                    variant="filled"
                    classNames={{
                        input: 'bg-white/50 border-0 transition-all duration-300 hover:bg-white/70 focus:bg-white/90',
                        label: 'font-medium mb-2'
                    }}
                />
                <Textarea
                    mt="md"
                    label="Message"
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="message"
                    variant="filled"
                    classNames={{
                        input: 'bg-white/50 border-0 transition-all duration-300 hover:bg-white/70 focus:bg-white/90',
                        label: 'font-medium mb-2'
                    }}
                />

                <Group justify="center" mt="xl">
                    <Button 
                        type="submit" 
                        size="md" 
                        className='relative overflow-hidden bg-black hover:bg-black/90 transition-all duration-300 px-12 py-2 group
                        before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
                        before:w-0 before:h-0 before:bg-white/10 before:rounded-full before:transition-all before:duration-500
                        hover:before:w-[300px] hover:before:h-[300px] active:scale-95'
                    >
                        <span className="relative inline-flex items-center gap-2">
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg 
                                        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                                        />
                                    </svg>
                                </>
                            )}
                        </span>
                    </Button>
                </Group>
            </form>
        </div>

        <div className='flex flex-col gap-6 md:flex-row w-[100%] mt-16 mb-10 justify-center md:justify-between items-center'>
            {contactPeople.map((contact) => (
                <EmployeeCard key={contact.name} {...contact}/>
            ))}
        </div>
    </motion.section>
    </>
  );
}