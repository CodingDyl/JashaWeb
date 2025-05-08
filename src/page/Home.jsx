import React from 'react'
import HomePage from '../components/HomePage'
import Contact from '../components/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
        <>
            <HomePage />
            <Contact />
            <Footer />
        </>
    </div>
  )
}

export default Home