import React from 'react';
import { SITE_CONFIG } from '../constants/siteConfig';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jasha Consulting Services",
    "url": SITE_CONFIG.URLs.HOME,
    "logo": `${SITE_CONFIG.ASSETS_BASE}/src/assets/logo-white.png`,
    "description": "Leading industrial consulting services in South Africa",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA",
      "addressRegion": "Gauteng",
      "addressLocality": "Johannesburg"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-11-234-5678",
      "contactType": "customer service",
      "areaServed": "ZA",
      "availableLanguage": "English"
    },
    "sameAs": [
      SITE_CONFIG.SOCIAL.LINKEDIN,
      SITE_CONFIG.SOCIAL.FACEBOOK
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jasha Consulting Services",
    "url": SITE_CONFIG.URLs.HOME,
    "description": "Industrial consulting services and solutions",
    "publisher": {
      "@type": "Organization",
      "name": "Jasha Consulting Services",
      "url": SITE_CONFIG.URLs.HOME
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_CONFIG.URLs.HOME}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_CONFIG.URLs.HOME
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </>
  );
};

export default StructuredData; 