// Site Configuration - Centralized URL management
export const SITE_CONFIG = {
  // Canonical domain (without www)
  CANONICAL_DOMAIN: 'https://jasha.co.za',
  
  // Full URLs for all pages
  URLs: {
    HOME: 'https://jasha.co.za',
    ABOUT: 'https://jasha.co.za/about',
    CONTACT: 'https://jasha.co.za/contact',
    JASHA: 'https://jasha.co.za/company/jasha',
    KNITWIRE: 'https://jasha.co.za/company/knitwire',
    BIODYNAMIC_FUEL: 'https://jasha.co.za/company/biodynamic-fuel'
  },
  
  // Assets base URL
  ASSETS_BASE: 'https://jasha.co.za',
  
  // SEO defaults
  SEO: {
    SITE_NAME: 'Jasha Consulting Services',
    DEFAULT_TITLE: 'Jasha Consulting Services - Industrial Solutions',
    DEFAULT_DESCRIPTION: 'Leading industrial consulting services in South Africa',
    LOCALE: 'en_ZA',
    REGION: 'ZA',
    COUNTRY: 'South Africa'
  },
  
  // Social media
  SOCIAL: {
    LINKEDIN: 'https://www.linkedin.com/company/jasha-consulting-services',
    FACEBOOK: 'https://www.facebook.com/jashaconsulting'
  }
};

// Helper function to get canonical URL for any page
export const getCanonicalUrl = (path = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.CANONICAL_DOMAIN}${cleanPath}`;
};

// Helper function to get asset URL
export const getAssetUrl = (assetPath) => {
  const cleanPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${SITE_CONFIG.ASSETS_BASE}${cleanPath}`;
};

export default SITE_CONFIG;
