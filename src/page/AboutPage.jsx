import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer/Footer';
import { SITE_CONFIG } from '../constants/siteConfig';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Jasha Consulting Services</title>
        <meta name="description" content="Learn about Jasha Consulting Services, a leading industrial consulting company in South Africa specializing in stainless steel, mild steel, and plastic fabrication." />
        <meta name="keywords" content="Jasha Consulting, industrial consulting, South Africa, stainless steel, mild steel, plastic fabrication" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={SITE_CONFIG.URLs.ABOUT} />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Us - Jasha Consulting Services" />
        <meta property="og:description" content="Learn about Jasha Consulting Services, a leading industrial consulting company in South Africa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_CONFIG.URLs.ABOUT} />
        <meta property="og:image" content={`${SITE_CONFIG.ASSETS_BASE}/src/assets/logo-white.png`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Jasha Consulting Services" />
        <meta name="twitter:description" content="Learn about Jasha Consulting Services, a leading industrial consulting company in South Africa." />
        <meta name="twitter:image" content={`${SITE_CONFIG.ASSETS_BASE}/src/assets/logo-white.png`} />
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