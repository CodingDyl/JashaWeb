import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer/Footer';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Jasha Consulting Services</title>
        <meta name="description" content="Learn about Jasha Consulting Services, a leading industrial consulting company in South Africa." />
        <link rel="canonical" href="https://jasha.co.za/about" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        <Navbar />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
