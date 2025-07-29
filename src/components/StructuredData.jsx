import React from 'react';

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
          "address": data.address,
          "sameAs": data.sameAs || [],
          "contactPoint": data.contactPoint || [],
          "areaServed": {
            "@type": "Country",
            "name": "South Africa"
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": -26.2041,
              "longitude": 28.0473
            },
            "geoRadius": "1000000"
          }
        };
      
      case 'WebPage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Jasha Consulting Services",
            "url": "https://www.jasha.co.za"
          }
        };
      
      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "telephone": data.telephone,
          "email": data.email,
          "address": data.address,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -26.2041,
            "longitude": 28.0473
          },
          "openingHours": "Mo-Fr 08:00-17:00",
          "areaServed": {
            "@type": "Country",
            "name": "South Africa"
          }
        };
      
      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Jasha Consulting Services",
            "url": "https://www.jasha.co.za"
          },
          "areaServed": {
            "@type": "Country",
            "name": "South Africa"
          },
          "serviceType": data.serviceType
        };
      
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData; 