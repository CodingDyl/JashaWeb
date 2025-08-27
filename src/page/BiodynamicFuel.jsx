import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { styles } from '../styles';
import { bio_logo } from '../assets';
// import { FeaturesAsymmetrical } from '../components/FeaturesSection/FeaturesAsymmetrical';
// import { Faq } from '../components/FAQ/faq';
import ImageListBio from '../components/ImagesList/ImageListBio';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import StructuredData from '../components/StructuredData';
import { HiLightningBolt, HiCog, HiShieldCheck, HiChartBar, HiGlobe, HiStar } from 'react-icons/hi';
import { SITE_CONFIG } from '../constants/siteConfig';

const BiodynamicFuel = () => {
  const features = [
    {
      icon: HiLightningBolt,
      title: 'Sustainable Energy',
      description: 'Carbon-neutral biodiesel production from waste cooking oil and renewable sources'
    },
    {
      icon: HiCog,
      title: 'B-Tech 40 Technology',
      description: 'Patented technology making biodiesel production accessible and efficient'
    },
    {
      icon: HiShieldCheck,
      title: 'Quality Assured',
      description: 'Rigorous quality control ensuring consistent, high-quality biodiesel output'
    }
  ];

  const benefits = [
    {
      icon: HiGlobe,
      title: 'Environmental Impact',
      description: 'Reduce carbon footprint with sustainable biodiesel production'
    },
    {
      icon: HiChartBar,
      title: 'Cost Effective',
      description: 'Lower production costs compared to traditional fuel sources'
    },
    {
      icon: HiStar,
      title: 'Proven Technology',
      description: 'Over a decade of expertise in biodiesel manufacturing'
    }
  ];

  return (
    <>
    <Helmet>
      <title>Biodynamic Fuel - Jasha Consulting Services</title>
      <meta name="description" content="Discover Biodynamic Fuel, a leading industrial consulting company in South Africa specializing in sustainable energy solutions and industrial consulting services." />
      <meta name="keywords" content="Biodynamic Fuel, sustainable energy, industrial consulting, South Africa, renewable energy solutions" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={SITE_CONFIG.URLs.BIODYNAMIC_FUEL} />
      
      {/* Open Graph */}
      <meta property="og:title" content="Biodynamic Fuel - Jasha Consulting Services" />
      <meta property="og:description" content="Discover Biodynamic Fuel, a leading sustainable energy consulting company in South Africa." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_CONFIG.URLs.BIODYNAMIC_FUEL} />
      <meta property="og:image" content={`${SITE_CONFIG.ASSETS_BASE}/src/assets/logo-white.png`} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Biodynamic Fuel - Jasha Consulting Services" />
      <meta name="twitter:description" content="Discover Biodynamic Fuel, a leading sustainable energy consulting company in South Africa." />
      <meta name="twitter:image" content={`${SITE_CONFIG.ASSETS_BASE}/src/assets/logo-white.png`} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Biodynamic Fuel" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
    </Helmet>

    <StructuredData 
      type="WebPage"
      data={{
        name: "Biodynamic Fuel | Sustainable Biofuel Solutions",
        description: "Innovative biofuel solutions for sustainable energy",
        url: "https://jasha.co.za/company/biodynamic-fuel"
      }}
    />

    <StructuredData 
      type="Organization"
      data={{
        name: "Biodynamic Fuel",
        url: "https://jasha.co.za/company/biodynamic-fuel",
        logo: "https://jasha.co.za/src/assets/bio_logo_no_bg.png",
        description: "Innovative biofuel solutions for sustainable energy",
        foundingDate: "2020",
        socialLinks: [
          "https://www.linkedin.com/company/biodynamic-fuel",
          "https://www.facebook.com/biodynamicfuel"
        ]
      }}
    />

    <StructuredData 
      type="Service"
      data={{
        name: "Sustainable Biofuel Solutions",
        description: "Innovative biofuel solutions for sustainable energy",
        serviceType: "Biofuel Technology",
        url: "https://jasha.co.za/company/biodynamic-fuel"
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
                src={bio_logo} 
                alt='Bio Dynamic Fuel Logo' 
                className='h-16 lg:h-20 object-contain' 
                loading="eager"
              />
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-responsive font-display font-bold mb-6"
            >
              Bio Dynamic Fuel
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-responsive text-white/80 max-w-4xl mx-auto leading-relaxed"
            >
              Leading provider of sustainable biodiesel solutions with patented B-Tech 40 technology. 
              Making biodiesel production accessible and environmentally responsible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <feature.icon className="w-12 h-12 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
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
              What is BioFuel?
            </h2>
            
            <div className="space-y-6 text-responsive text-white/80 leading-relaxed">
              <p>
                Welcome to Bio-Dynamic Fuel, where innovation meets sustainability in the realm of biodiesel production. 
                With over a decade of expertise in crafting manually-operated biodiesel machines, our founders have 
                honed their skills to perfection.
              </p>
              
              <p>
                From the early days of cumbersome 1st generation machines to the sleek efficiency of our patented 
                B-Tech 40, we've continually pushed the boundaries of what's possible in the biofuel industry.
              </p>
              
              <p>
                Our journey has been marked by milestones, including a spotlight on national television by Carte Blanche 
                in 2006, showcasing our commitment to revolutionizing sustainable energy solutions. Drawing from our team's 
                rich background in consumer goods, we've infused our technology with ease of use, making biodiesel 
                production accessible to all.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose BioFuel?
            </h2>
            <p className="text-responsive text-white/70 max-w-2xl mx-auto">
              Discover the advantages of sustainable biodiesel production
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <benefit.icon className="w-10 h-10 text-accent-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="heading-responsive font-display font-bold mb-6">
                B-Tech 40 Technology
              </h2>
              <div className="space-y-4 text-responsive text-white/80 leading-relaxed">
                <p>
                  Our patented B-Tech 40 system represents the pinnacle of biodiesel production technology. 
                  This innovative solution makes biodiesel production accessible to businesses and individuals alike.
                </p>
                <p>
                  The system features advanced automation, precise control mechanisms, and user-friendly interfaces 
                  that simplify the complex process of biodiesel manufacturing.
                </p>
                <p>
                  With over a decade of refinement, the B-Tech 40 delivers consistent, high-quality biodiesel 
                  while maintaining the highest standards of safety and environmental responsibility.
                </p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl p-8 border border-accent-500/30">
                <HiLightningBolt className="w-24 h-24 text-accent-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Patented Technology</h3>
                <p className="text-white/80">
                  Advanced biodiesel production system designed for efficiency and accessibility
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-responsive font-display font-bold mb-4">
              Our Technology
            </h2>
            <p className="text-responsive text-white/70 max-w-2xl mx-auto">
              Explore our biodiesel production systems and sustainable energy solutions
            </p>
          </motion.div>
          
          <ImageListBio />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-accent-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-display font-bold mb-6 text-white">
              Ready to Go Green?
            </h2>
            <p className="text-responsive text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our sustainable biodiesel solutions can benefit your business and the environment
            </p>
            <Link to="/contact">
              <button className="btn-accent text-lg px-8 py-4 hover:shadow-glow">
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

export default BiodynamicFuel