import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { logo_bg } from '../../assets';
import { contactPeople } from '../../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-primary-900 border-t border-white/10" role="contentinfo">
      <motion.div 
        className="container-custom py-12 lg:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo_bg} 
                alt="Jasha Consulting Services" 
                className="h-10 object-contain filter brightness-0 invert"
              />
              <h3 className="text-xl font-bold text-white">Jasha Consulting Services</h3>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Your trusted partner in industrial fabrication, engineering solutions, and sustainable energy since 2005. 
              Specializing in stainless steel, mild steel, and plastic fabrication.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/company/jasha-consulting-services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
              >
                <span>LinkedIn</span>
                <HiExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/jashaconsulting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
              >
                <span>Facebook</span>
                <HiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/company/jasha" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Jasha Consulting
                </Link>
              </li>
              <li>
                <Link 
                  to="/company/knitwire" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Knitwire Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/company/biodynamic-fuel" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Bio Dynamic Fuel
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-4">
              {contactPeople.map((person, index) => (
                <div key={index} className="space-y-2">
                  <h5 className="font-medium text-white">{person.name}</h5>
                  <p className="text-sm text-white/60">{person.position}</p>
                  <div className="space-y-1">
                    <a 
                      href={`mailto:${person.email}`}
                      className="flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <HiMail className="w-4 h-4" />
                      <span>{person.email}</span>
                    </a>
                    <a 
                      href={`tel:${person.cell}`}
                      className="flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <HiPhone className="w-4 h-4" />
                      <span>{person.cell}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-sm text-white/60">
            © {currentYear} Jasha Consulting Services. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-white/60">
            <Link to="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;