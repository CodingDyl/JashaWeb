import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ title, description, canonicalUrl }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SEOHead;
