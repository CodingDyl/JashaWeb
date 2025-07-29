import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';
import { knitwire, logo_bg, bio_logo } from '../assets';
import Customers from './Slider/Customers';
import Navbar from './Navbar';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <>
      {/* SEO-friendly hidden content */}
      <div className="sr-only" aria-hidden="true">
        <div id="jasha-modal-content">
          <h2>Jasha Consulting Services</h2>
          <p>Industrial Fabrication and Engineering Solutions since 2005</p>
        </div>
        <div id="knitwire-modal-content">
          <h2>Knitwire</h2>
          <p>Specialized wire mesh solutions</p>
        </div>
        <div id="bio-modal-content">
          <h2>Bio Dynamic Fuel</h2>
          <p>Sustainable energy solutions</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern-sm md:bg-bg-pattern bg-cover bg-center bg-no-repeat opacity-20"></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/60 to-primary-900/80"></div>

        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20 pb-8">
          <motion.div 
            className="container-custom text-center max-w-6xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 lg:space-y-8">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight px-2"
                variants={itemVariants}
              >
                Welcome to{' '}
                <span className="text-gradient">Jasha Consulting Services</span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4"
                variants={itemVariants}
              >
                Your trusted partner in industrial fabrication, engineering solutions, and sustainable energy since 2005
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8"
                variants={itemVariants}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-auto"
                >
                  <Link to="/company/jasha" className="block">
                    <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:border-white/40 hover:shadow-glow w-full sm:w-40 h-24 sm:h-32 flex items-center justify-center">
                      <img 
                        src={logo_bg} 
                        alt="Jasha Consulting Services" 
                        className="h-8 sm:h-12 w-auto object-contain filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-auto"
                >
                  <Link to="/company/knitwire" className="block">
                    <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:border-white/40 hover:shadow-glow w-full sm:w-40 h-24 sm:h-32 flex items-center justify-center">
                      <img 
                        src={knitwire} 
                        alt="Knitwire Products" 
                        className="h-8 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-auto"
                >
                  <Link to="/company/biodynamic-fuel" className="block">
                    <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:border-white/40 hover:shadow-glow w-full sm:w-40 h-24 sm:h-32 flex items-center justify-center">
                      <img 
                        src={bio_logo} 
                        alt="Bio Dynamic Fuel" 
                        className="h-8 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 focus-ring"
            aria-label="Scroll to about section"
          >
            <HiChevronDown className="w-6 h-6 text-white group-hover:text-secondary-300 transition-colors" />
          </button>
        </motion.div>
      </section>

      {/* Customers Section */}
      <section id="about" className="section-padding bg-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 px-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4">
              We've been serving the petro-chemical, chemical, sugar, paper, and precious metal industries for over 18 years
            </p>
          </motion.div>
          
          <Customers />
        </div>
      </section>
    </>
  )
}

export default HomePage