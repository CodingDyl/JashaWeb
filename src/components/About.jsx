import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
// import { FeaturesAsymmetrical } from './FeaturesSection/FeaturesAsymmetrical';
import { styles } from '../styles';
import { logo_bg } from '../assets';
import { Helmet } from 'react-helmet-async';
import SEOHead from './SEOHead';
import StructuredData from './StructuredData';
import { HiLightningBolt, HiShieldCheck, HiCog, HiChartBar, HiGlobe } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: HiShieldCheck,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and certified welding processes for all projects'
    },
    {
      icon: HiCog,
      title: 'Technical Excellence',
      description: 'Over 40 years combined knowledge and experience in industrial fabrication'
    },
    {
      icon: HiCog,
      title: 'Custom Solutions',
      description: 'Tailored fabrication services to meet specific customer requirements'
    }
  ];

  const certifications = [
    {
      title: 'ASME IX 2021',
      description: 'Certified for Stainless Steel Welding'
    },
    {
      title: 'AWS D1.1 2020',
      description: 'Certified for Carbon Steel Welding'
    }
  ];

  return (
    <>
    <Helmet>
      <title>About Jasha Consulting Services | Industrial Engineering Experts</title>
      <meta name="description" content="Learn about Jasha Consulting Services - A leading industrial engineering company with over 18 years of experience in petro-chemical, chemical, sugar, paper, and precious metal industries." />
      <meta name="keywords" content="Jasha Consulting about, industrial engineering, petro-chemical industry, chemical industry, sugar industry, paper industry, precious metal industry, ASME IX, AWS D1.1" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="About Jasha Consulting Services | Industrial Engineering Experts" />
      <meta property="og:description" content="Discover our 18+ years of expertise in industrial engineering and fabrication services across multiple industries." />
      <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.jasha.co.za/about" />
    <meta property="og:image" content="https://www.jasha.co.za/src/assets/logo-white.png" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Jasha Consulting Services | Industrial Engineering Experts" />
      <meta name="twitter:description" content="Discover our 18+ years of expertise in industrial engineering and fabrication services across multiple industries." />
      <meta name="twitter:image" content="https://www.jasha.co.za/src/assets/logo-white.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.jasha.co.za/about" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Jasha Consulting Services" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
    </Helmet>

    <StructuredData 
      type="WebPage"
      data={{
        name: "About Jasha Consulting Services | Industrial Engineering Experts",
        description: "Learn about Jasha Consulting Services - A leading industrial engineering company with over 18 years of experience",
        url: "https://www.jasha.co.za/about"
      }}
    />

    <StructuredData 
      type="Organization"
      data={{
        name: "Jasha Consulting Services",
        url: "https://www.jasha.co.za/about",
        logo: "https://www.jasha.co.za/src/assets/logo-white.png",
        description: "A leading industrial engineering company with over 18 years of experience",
        foundingDate: "2005",
        socialLinks: [
          "https://www.linkedin.com/company/jasha-consulting-services",
          "https://www.facebook.com/jashaconsulting"
        ]
      }}
    />

    <span id='about'>
      &nbsp;  
    </span>

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
            About Jasha
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

    {/* About Content Section */}
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
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

    {/* Values Section */}
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
            Our Values
          </h2>
          <p className="text-responsive text-white/70 max-w-2xl mx-auto">
            The principles that guide our work and relationships with clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card card-hover"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <value.icon className="w-10 h-10 text-secondary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {value.title}
                </h3>
              </div>
              
              <p className="text-white/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications Section */}
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-responsive font-display font-bold mb-4">
            Our Certifications
          </h2>
          <p className="text-responsive text-white/70 max-w-2xl mx-auto">
            Industry-recognized certifications ensuring the highest quality standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 rounded-2xl p-8 border border-secondary-500/30 text-center"
            >
              <HiLightningBolt className="w-16 h-16 text-secondary-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {cert.title}
              </h3>
              <p className="text-white/80">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
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
            Ready to Work Together?
          </h2>
          <p className="text-responsive text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can benefit your next project
          </p>
          <Link to="/contact">
            <button className="btn-primary text-lg px-8 py-4">
              Contact Us Today
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default About