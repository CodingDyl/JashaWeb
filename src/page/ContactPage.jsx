import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer/Footer';
import { SITE_CONFIG } from '../constants/siteConfig';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Jasha Consulting Services</title>
        <meta name="description" content="Get in touch with Jasha Consulting Services. Contact our team for industrial consulting, stainless steel, mild steel, and plastic fabrication services in South Africa." />
        <meta name="keywords" content="contact Jasha Consulting, industrial consulting contact, South Africa, stainless steel services" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={SITE_CONFIG.URLs.CONTACT} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us - Jasha Consulting Services" />
        <meta property="og:description" content="Get in touch with Jasha Consulting Services for industrial consulting services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_CONFIG.URLs.CONTACT} />
        <meta property="og:image" content={`${SITE_CONFIG.ASSETS_BASE}/src/assets/logo-white.png`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Jasha Consulting Services" />
        <meta name="twitter:description" content="Get in touch with Jasha Consulting Services for industrial consulting services." />
        <meta name="twitter:image" content={`${SITE_CONFIG.ASSETS_BASE}/src/assets/logo-white.png`} />
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