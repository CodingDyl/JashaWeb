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
    "url": "https://jasha.co.za",
    "logo": `https://jasha.co.za${logo_bg}`,
    "description": "Leading industrial engineering company specializing in stainless steel, mild steel, and plastic fabrication",
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
        title="Jasha Consulting Services | Industrial Engineering & Fabrication"
        description="Leading industrial engineering company specializing in stainless steel, mild steel, and plastic fabrication for petro-chemical, chemical, sugar, paper, and precious metal industries."
        keywords="industrial engineering, fabrication, stainless steel, mild steel, plastic fabrication, petro-chemical, chemical industry, sugar industry, paper industry, precious metal industry"
        canonicalUrl="https://jasha.co.za"
        ogImage="https://jasha.co.za/src/assets/logo-white.png"
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