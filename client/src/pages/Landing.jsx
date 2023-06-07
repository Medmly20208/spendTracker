import React from 'react'

//components
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <>
     <Header/>
    <div className='py-[10px] sm:px-[80px] mt-[100px]'>
     
      <Hero/>
      <Features/>
      <Testimonials/>
    </div>
    <Footer/>
    </>
  )
}

export default Landing