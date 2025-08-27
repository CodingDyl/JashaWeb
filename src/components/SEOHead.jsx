import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../constants/siteConfig';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage, 
  ogType = "website",
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const robots = [];
  if (noindex) robots.push('noindex');
  if (nofollow) robots.push('nofollow');
  if (robots.length === 0) robots.push('index', 'follow');

  // Ensure canonical URL uses the correct domain
  const finalCanonicalUrl = canonicalUrl || SITE_CONFIG.URLs.HOME;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots.join(', ')} />
      
      {/* Canonical URL - Always use canonical domain */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={SITE_CONFIG.SEO.SITE_NAME} />
      <meta property="og:locale" content={SITE_CONFIG.SEO.LOCALE} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Additional Meta Tags */}
      <meta name="author" content={SITE_CONFIG.SEO.SITE_NAME} />
      <meta name="geo.region" content={SITE_CONFIG.SEO.REGION} />
      <meta name="geo.placename" content={SITE_CONFIG.SEO.COUNTRY} />
      <meta name="language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default SEOHead; 