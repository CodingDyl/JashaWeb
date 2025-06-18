import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer/Footer'
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <>
    <Helmet>
      <title>Contact Us | Jasha Consulting Services</title>
      <meta name="description" content="Get in touch with Jasha Consulting Services. Contact our team for industrial fabrication, engineering solutions, and sustainable energy inquiries." />
      <meta name="keywords" content="contact Jasha Consulting, industrial fabrication contact, engineering solutions contact, South Africa" />
      <meta property="og:title" content="Contact Us | Jasha Consulting Services" />
      <meta property="og:description" content="Get in touch with Jasha Consulting Services for industrial fabrication and engineering solutions." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jasha.co.za/contact" />
    </Helmet>
    <div className="min-h-screen bg-primary text-white">
        <Navbar />
        <Contact />
        <Footer />
    </div>
    </>
  )
}

export default ContactPage