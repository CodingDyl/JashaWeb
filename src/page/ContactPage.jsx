import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer/Footer';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Jasha Consulting Services</title>
        <meta name="description" content="Get in touch with Jasha Consulting Services for industrial consulting and fabrication services in South Africa." />
        <link rel="canonical" href="https://jasha.co.za/contact" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        <Navbar />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
