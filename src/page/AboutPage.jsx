import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer/Footer'

const AboutPage = () => {
  return (
    <>
    <div className="min-h-screen bg-primary text-white">
        <Navbar />
        <About />
        <Footer />
    </div>
    </>
  )
}

export default AboutPage