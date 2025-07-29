import React from 'react'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer/Footer'
import SEOHead from '../components/SEOHead';
import { logo_bg } from '../assets';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jasha Consulting Services",
    "url": "https://www.jasha.co.za",
    "logo": `https://www.jasha.co.za${logo_bg}`,
    "description": "Industrial Fabrication and Engineering Solutions",
    "foundingDate": "2005",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "South Africa"
    },
    "sameAs": [
      "https://www.linkedin.com/company/jasha-consulting-services",
      "https://www.facebook.com/jashaconsulting"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "name": "Shaun Dalrymple",
        "email": "shaun@jasha.co.za",
        "telephone": "+27837882730",
        "contactType": "customer service"
      },
      {
        "@type": "ContactPoint",
        "name": "Warren Dalrymple",
        "email": "warren@jasha.co.za",
        "telephone": "+27658817513",
        "contactType": "customer service"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Jasha Consulting Services | Industrial Fabrication & Engineering Solutions"
        description="Jasha Consulting Services - Your trusted partner in industrial fabrication, engineering solutions, and sustainable energy since 2005. Specializing in stainless steel, mild steel, and plastic fabrication."
        keywords="Jasha Consulting, industrial fabrication, engineering solutions, stainless steel fabrication, mild steel fabrication, plastic fabrication, piping solutions, South Africa"
        canonicalUrl="https://www.jasha.co.za"
        ogImage="https://www.jasha.co.za/src/assets/logo-white.png"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-primary-900 text-white">
        <HomePage />
        <Footer />
      </div>
    </>
  )
}

export default Home