import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer/Footer'
import { Helmet } from 'react-helmet-async';
import StructuredData from '../components/StructuredData';

const ContactPage = () => {
  return (
    <>
    <Helmet>
      <title>Contact Us | Jasha Consulting Services</title>
      <meta name="description" content="Get in touch with Jasha Consulting Services. Contact our team for industrial fabrication, engineering solutions, and sustainable energy inquiries." />
      <meta name="keywords" content="contact Jasha Consulting, industrial fabrication contact, engineering solutions contact, South Africa" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Contact Jasha Consulting Services | Industrial Engineering Experts" />
      <meta property="og:description" content="Get in touch with Jasha Consulting Services for industrial fabrication and engineering solutions." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jasha.co.za/contact" />
      <meta property="og:image" content="https://jasha.co.za/src/assets/logo-white.png" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact Jasha Consulting Services | Industrial Engineering Experts" />
      <meta name="twitter:description" content="Get in touch with Jasha Consulting Services for industrial fabrication and engineering solutions." />
      <meta name="twitter:image" content="https://jasha.co.za/src/assets/logo-white.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://jasha.co.za/contact" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Jasha Consulting Services" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
    </Helmet>

    <StructuredData 
      type="WebPage"
      data={{
        name: "Contact Jasha Consulting Services | Industrial Engineering Experts",
        description: "Get in touch with Jasha Consulting Services for industrial fabrication and engineering solutions",
        url: "https://jasha.co.za/contact"
      }}
    />

    <StructuredData 
      type="Service"
      data={{
        name: "Contact & Consultation",
        description: "Contact Jasha Consulting Services for industrial fabrication, engineering solutions, and sustainable energy inquiries",
        serviceType: "Consultation"
      }}
    />

    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        <Navbar />
        <Contact />
        <Footer />
    </div>
    </>
  )
}

export default ContactPage