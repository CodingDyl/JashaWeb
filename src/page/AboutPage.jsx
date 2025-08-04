import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer/Footer'
import { Helmet } from 'react-helmet-async';
import StructuredData from '../components/StructuredData';

const AboutPage = () => {
  return (
    <>
    <Helmet>
      <title>About Us | Jasha Consulting Services</title>
      <meta name="description" content="Learn about Jasha Consulting Services - Your trusted partner in industrial fabrication and engineering since 2005. Discover our history, expertise, and commitment to quality." />
      <meta name="keywords" content="about Jasha Consulting, industrial fabrication company, engineering solutions, South Africa, company history" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="About Jasha Consulting Services | Industrial Engineering Experts" />
      <meta property="og:description" content="Discover our 18+ years of expertise in industrial engineering and fabrication services across multiple industries." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jasha.co.za/about" />
      <meta property="og:image" content="https://jasha.co.za/src/assets/logo-white.png" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Jasha Consulting Services | Industrial Engineering Experts" />
      <meta name="twitter:description" content="Discover our 18+ years of expertise in industrial engineering and fabrication services across multiple industries." />
      <meta name="twitter:image" content="https://jasha.co.za/src/assets/logo-white.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://jasha.co.za/about" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Jasha Consulting Services" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
    </Helmet>

    <StructuredData 
      type="WebPage"
      data={{
        name: "About Jasha Consulting Services | Industrial Engineering Experts",
        description: "Learn about Jasha Consulting Services - A leading industrial engineering company with over 18 years of experience",
        url: "https://jasha.co.za/about"
      }}
    />

    <StructuredData 
      type="Organization"
      data={{
        name: "Jasha Consulting Services",
        url: "https://jasha.co.za",
        logo: "https://jasha.co.za/src/assets/logo-white.png",
        description: "A leading industrial engineering company with over 18 years of experience",
        foundingDate: "2005",
        socialLinks: [
          "https://www.linkedin.com/company/jasha-consulting-services",
          "https://www.facebook.com/jashaconsulting"
        ]
      }}
    />

    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        <Navbar />
        <About />
        <Footer />
    </div>
    </>
  )
}

export default AboutPage