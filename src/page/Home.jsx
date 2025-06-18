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
      <meta property="og:title" content="Jasha Consulting Services | Industrial Fabrication & Engineering Solutions" />
      <meta property="og:description" content="Your trusted partner in industrial fabrication, engineering solutions, and sustainable energy since 2005." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jasha.co.za" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jasha Consulting Services" />
      <meta name="twitter:description" content="Your trusted partner in industrial fabrication and engineering solutions since 2005." />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Jasha Consulting Services",
            "url": "https://jasha.co.za",
            "logo": "https://jasha.co.za${logo_bg}",
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