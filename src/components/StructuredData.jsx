import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": data.name,
          "url": data.url,
          "logo": data.logo,
          "description": data.description,
          "foundingDate": data.foundingDate,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "South Africa"
          },
          "sameAs": data.socialLinks || []
        };
      
      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Jasha Consulting Services"
          },
          "areaServed": {
            "@type": "Country",
            "name": "South Africa"
          },
          "serviceType": data.serviceType
        };
      
      case 'WebPage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "isPartOf": {
            "@type": "WebSite",
            "name": "Jasha Consulting Services",
            "url": "https://www.jasha.co.za"
          }
        };
      
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData; 