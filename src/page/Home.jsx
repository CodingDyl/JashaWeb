import React from 'react'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer/Footer'
import { Helmet } from 'react-helmet-async';
import { logo_bg } from '../assets';

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Jasha Consulting Services | Industrial Fabrication & Engineering Solutions</title>
      <meta name="description" content="Jasha Consulting Services - Your trusted partner in industrial fabrication, engineering solutions, and sustainable energy since 2005. Specializing in stainless steel, mild steel, and plastic fabrication." />
      <meta name="keywords" content="Jasha Consulting, industrial fabrication, engineering solutions, stainless steel fabrication, mild steel fabrication, plastic fabrication, piping solutions, South Africa" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Jasha Consulting Services | Industrial Fabrication & Engineering Solutions" />
      <meta property="og:description" content="Your trusted partner in industrial fabrication, engineering solutions, and sustainable energy since 2005." />
      <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.jasha.co.za" />
    <meta property="og:image" content="https://www.jasha.co.za/src/assets/logo-white.png" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jasha Consulting Services" />
      <meta name="twitter:description" content="Your trusted partner in industrial fabrication and engineering solutions since 2005." />
      <meta name="twitter:image" content="https://www.jasha.co.za/src/assets/logo-white.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.jasha.co.za" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Jasha Consulting Services" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
      
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Jasha Consulting Services",
                    "url": "https://www.jasha.co.za",
        "logo": "https://www.jasha.co.za${logo_bg}",
            "description": "Industrial Fabrication and Engineering Solutions",
            "foundingDate": "2005",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "South Africa"
            },
            "sameAs": [
              "https://www.linkedin.com/company/jasha-consulting-services",
              "https://www.facebook.com/jashaconsulting"
            ]
          }
        `}
      </script>
    </Helmet>
    <div className="min-h-screen bg-primary text-white">
            <HomePage />
            <Footer />
    </div>
    </>
  )
}

export default Home