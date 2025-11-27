import React from 'react'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer/Footer'
import SEOHead from '../components/SEOHead';

const Home = () => {
  return (
    <>
      <SEOHead 
        title="Jasha Consulting Services | Industrial Engineering & Fabrication"
        description="Leading industrial engineering company specializing in stainless steel, mild steel, and plastic fabrication."
        canonicalUrl="https://jasha.co.za"
      />
      
      <div className="min-h-screen bg-primary-900 text-white">
        <HomePage />
        <Footer />
      </div>
    </>
  )
}

export default Home
