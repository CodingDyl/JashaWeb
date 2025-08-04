import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { styles } from '../styles';
import { logo_bg } from '../assets';
// import { FeaturesAsymmetrical } from '../components/FeaturesSection/FeaturesAsymmetrical';
// import { Faq } from '../components/FAQ/faq';
import ImageListJasha from '../components/ImagesList/ImageListJasha';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import StructuredData from '../components/StructuredData';
import { HiCog, HiLightningBolt, HiShieldCheck, HiChartBar, HiGlobe } from 'react-icons/hi';

const Jasha = () => {
  const services = [
    {
      icon: HiCog,
      title: 'Industrial Fabrication',
      description: 'Specialized fabrication services for stainless steel, mild steel, and plastic components.',
      features: ['ASME IX 2021 Certified', 'AWS D1.1 2020 Compliant', 'Custom Platework', 'Precision Piping']
    },
    {
      icon: HiCog,
      title: 'Engineering Solutions',
      description: 'Comprehensive engineering services for petro-chemical, chemical, and sugar industries.',
      features: ['Process Design', 'Technical Consultation', 'Quality Assurance', 'Project Management']
    },
    {
      icon: HiShieldCheck,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and certified welding processes for all projects.',
      features: ['Coded Welders', 'Material Testing', 'Documentation', 'Compliance Standards']
    }
  ];

  const stats = [
    { number: '18+', label: 'Years Experience' },
    { number: '40+', label: 'Combined Knowledge' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: 'ASME IX', label: 'Certified Welding' }
  ];

  return (
    <>
    <Helmet>
      <title>Jasha Consulting Services | Industrial Fabrication & Engineering</title>
      <meta name="description" content="Jasha Consulting Services - Your trusted partner in industrial fabrication and engineering since 2005. Specializing in stainless steel, mild steel, and plastic fabrication for petro-chemical, chemical, and sugar industries." />
      <meta name="keywords" content="Jasha Consulting, industrial fabrication, engineering solutions, stainless steel fabrication, mild steel fabrication, plastic fabrication, piping solutions, South Africa" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Jasha Consulting Services | Industrial Engineering & Fabrication" />
      <meta property="og:description" content="Leading industrial engineering company specializing in stainless steel, mild steel, and plastic fabrication for petro-chemical industries." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jasha.co.za/company/jasha" />
      <meta property="og:image" content="https://jasha.co.za/src/assets/logo-white.png" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jasha Consulting Services | Industrial Engineering & Fabrication" />
      <meta name="twitter:description" content="Leading industrial engineering company specializing in stainless steel, mild steel, and plastic fabrication for petro-chemical industries." />
      <meta name="twitter:image" content="https://jasha.co.za/src/assets/logo-white.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://jasha.co.za/company/jasha" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Jasha Consulting Services" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
    </Helmet>

    <StructuredData 
      type="WebPage"
      data={{
        name: "Jasha Consulting Services | Industrial Engineering & Fabrication",
        description: "Leading industrial engineering company specializing in stainless steel, mild steel, and plastic fabrication",
        url: "https://jasha.co.za/company/jasha"
      }}
    />

    <StructuredData 
      type="Organization"
      data={{
        name: "Jasha Consulting Services",
        url: "https://jasha.co.za/company/jasha",
        logo: "https://jasha.co.za/src/assets/logo-white.png",
        description: "Leading industrial engineering company specializing in stainless steel, mild steel, and plastic fabrication",
        foundingDate: "2005",
        socialLinks: [
          "https://www.linkedin.com/company/jasha-consulting-services",
          "https://www.facebook.com/jashaconsulting"
        ]
      }}
    />
    
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/60 to-primary-900/80"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <img 
                src={logo_bg} 
                alt='Jasha Consulting Services Logo' 
                className='h-16 lg:h-20 object-contain filter brightness-0 invert' 
                loading="eager"
              />
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-responsive font-display font-bold mb-6"
            >
              Jasha Consulting Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-responsive text-white/80 max-w-4xl mx-auto leading-relaxed"
            >
              Your trusted partner in industrial fabrication and engineering since 2005. 
              Specializing in stainless steel, mild steel, and plastic fabrication for the petro-chemical, 
              chemical, sugar, paper, and precious metal industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-secondary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-white/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-responsive font-display font-bold mb-8">
              About Jasha
            </h2>
            
            <div className="space-y-6 text-responsive text-white/80 leading-relaxed">
              <p>
                Jasha Consulting Services was established in 2005 and has been servicing the Petro-Chemical, 
                Chemical, Sugar, Paper and precious metal industries for the past 18 years. We have a long 
                and proud partnership with UK company Knitwire Products, for all internal items within the 
                distillation columns and scrubber units.
              </p>
              
              <p>
                We work predominantly with stainless steel, however we have completed projects in both mild 
                steel and plastic. Jasha Consulting Services fabricates platework and piping to customer 
                requirements and all welders are coded to ASME IX 2021 for Stainless steel and AWS D1.1 2020 
                for Carbon steel.
              </p>
              
              <p>
                With over 40 years combined knowledge and experience, we are ready to facilitate clients with 
                their needs and deliver exceptional results on every project.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-responsive font-display font-bold mb-4">
              Our Services
            </h2>
            <p className="text-responsive text-white/70 max-w-2xl mx-auto">
              Comprehensive industrial fabrication and engineering solutions tailored to your specific requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <service.icon className="w-10 h-10 text-secondary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-white/60">
                      <HiLightningBolt className="w-4 h-4 text-secondary-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-responsive font-display font-bold mb-4">
              Our Work
            </h2>
            <p className="text-responsive text-white/70 max-w-2xl mx-auto">
              Explore our portfolio of industrial fabrication and engineering projects
            </p>
          </motion.div>
          
          <ImageListJasha />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-600 to-secondary-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-display font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-responsive text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your industrial fabrication and engineering needs to life
            </p>
            <Link to="/contact">
              <button className="btn-primary text-lg px-8 py-4 hover:shadow-glow">
                Contact Us Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}

export default Jasha