import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { knitwire } from '../assets';
import knitwire_products_pdf from '../../public/knitwire_products.pdf';
import ImageListKnitwire from '../components/ImagesList/ImageListKnitwire';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HiCheckCircle, HiDownload, HiCog, HiShieldCheck } from 'react-icons/hi';

function Feature({ icon: Icon, title, description, className, ...others }) {
  return (
    <div className={`${className} bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300`} {...others}>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Icon className="w-8 h-8 text-secondary-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/70 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: HiCheckCircle,
    title: 'Mesh Demister',
    description:
      'Efficient mesh demister solutions for gas-liquid separation in industrial processes.',
    fullDescription: 'Our mesh demisters provide superior gas-liquid separation efficiency. These solutions are designed for optimal performance in various industrial processes, featuring high-quality materials and expert engineering.',
  },
  {
    icon: HiCheckCircle,
    title: 'Vane Demister',
    description:
      'Effective vane demister systems for removing liquid droplets from gas streams.',
  },
  {
    icon: HiCheckCircle,
    title: 'Random Packing',
    description:
      'High-quality random packing materials optimizing efficiency in chemical processing applications',
  },
  {
    icon: HiCheckCircle,
    title: 'Structure Packing',
    description:
      'Advanced structured packing designs enhancing separation performance in distillation processes.',
  },
  {
    icon: HiCheckCircle,
    title: 'Column Internals',
    description:
      'Tailored column internals for improved efficiency and performance in various industrial columns.',
  },
  {
    icon: HiCheckCircle,
    title: 'Process Design',
    description:
      'Innovative process design services ensuring optimal performance and efficiency in operations.',
  },
];

const Knitwire = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  const items = mockdata.map((item) => (
    <Feature 
      {...item} 
      key={item.title}
      onClick={() => handleFeatureClick(item)}
      className="cursor-pointer hover:scale-105 transition-transform duration-300"
    />
  ));

  const benefits = [
    {
      icon: HiCog,
      title: 'High Efficiency',
      description: 'Optimized designs for maximum separation efficiency and performance'
    },
    {
      icon: HiShieldCheck,
      title: 'Quality Assured',
      description: 'Rigorous quality control and testing for reliable operation'
    },
    {
      icon: HiCog,
      title: 'Custom Solutions',
      description: 'Tailored designs to meet specific process requirements'
    }
  ];

  return (
    <>
    <Helmet>
      <title>Knitwire - Jasha Consulting Services</title>
      <meta name="description" content="Discover Knitwire, a leading industrial consulting company in South Africa specializing in stainless steel, mild steel, and plastic fabrication services." />
      <link rel="canonical" href="https://jasha.co.za/company/knitwire" />
    </Helmet>

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
                src={knitwire} 
                alt='Knitwire Logo' 
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
              Knitwire Products
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-responsive text-white/80 max-w-4xl mx-auto leading-relaxed"
            >
              Leading provider of specialized wire mesh solutions for industrial applications. 
              High-quality mesh demisters, vane demisters, and column internals for various industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <benefit.icon className="w-12 h-12 text-secondary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/70">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Services
            </h2>
            <p className="text-responsive text-white/70 max-w-2xl mx-auto">
              Comprehensive wire mesh solutions for industrial applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-display font-bold mb-6">
              Product Catalog
            </h2>
            <p className="text-responsive text-white/70 mb-8 max-w-2xl mx-auto">
              Download our comprehensive product catalog to explore our complete range of wire mesh solutions
            </p>
            <a 
              href={knitwire_products_pdf}
              download
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
            >
              <HiDownload className="w-6 h-6" />
              Download Catalog
            </a>
          </motion.div>
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
              Our Products
            </h2>
            <p className="text-responsive text-white/70 max-w-2xl mx-auto">
              Explore our portfolio of wire mesh solutions and industrial applications
            </p>
          </motion.div>
          
          <ImageListKnitwire />
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
              Ready to Optimize Your Process?
            </h2>
            <p className="text-responsive text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our wire mesh solutions can improve your industrial processes
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

export default Knitwire
