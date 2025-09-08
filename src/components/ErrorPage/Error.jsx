import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import error_404 from '../../assets/error/404_img.png';
import { SITE_CONFIG } from '../../constants/siteConfig';

export default function NotFoundImage() {
  // Set HTTP status code to 404 for proper SEO
  useEffect(() => {
    // This will be handled by the server-side configuration
    document.title = '404 - Page Not Found | Jasha Consulting Services';
  }, []);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Jasha Consulting Services</title>
        <meta name="description" content="The page you are looking for does not exist. Return to Jasha Consulting Services homepage for industrial consulting services." />
        <meta name="robots" content="noindex, nofollow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`${SITE_CONFIG.URLs.HOME}/404`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="404 - Page Not Found | Jasha Consulting Services" />
        <meta property="og:description" content="The page you are looking for does not exist. Return to Jasha Consulting Services homepage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_CONFIG.URLs.HOME}/404`} />
        <meta property="og:image" content={`${SITE_CONFIG.ASSETS_BASE}/src/assets/logo-white.png`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 - Page Not Found | Jasha Consulting Services" />
        <meta name="twitter:description" content="The page you are looking for does not exist. Return to Jasha Consulting Services homepage." />
        <meta name="twitter:image" content={`${SITE_CONFIG.ASSETS_BASE}/src/assets/logo-white.png`} />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Jasha Consulting Services" />
        <meta name="geo.region" content="ZA" />
        <meta name="geo.placename" content="South Africa" />
      </Helmet>

      <div className="bg-primary-900 min-h-screen w-full flex items-center justify-center">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <div className="text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6"
              >
                404 - Page Not Found
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/70 mb-8 leading-relaxed"
              >
                The page you are looking for does not exist. You may have mistyped the address, or the
                page has been moved to another URL. If you think this is an error, please contact our support team.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/">
                  <button className="bg-secondary-600 hover:bg-secondary-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-primary-900">
                    Return to Homepage
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 font-medium px-8 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900">
                    Contact Support
                  </button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <img 
                src={error_404} 
                alt="404 Error - Page Not Found" 
                className="max-w-full h-auto max-h-96 lg:max-h-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}