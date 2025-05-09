import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer/Footer'

const ContactPage = () => {
  return (
    <>
    <div className="min-h-screen bg-primary text-white">
        <Navbar />
        <Contact />
        <Footer />
    </div>
    </>
  )
}

export default ContactPage