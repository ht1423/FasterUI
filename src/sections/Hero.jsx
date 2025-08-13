import React from 'react'
import Navbar from '../components/HeroComp/Navbar'
import MainHeading from '../components/HeroComp/MainHeading'
import Mask from '../assets/HeroAsset/Mask group.svg'

function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col overflow-hidden">

      {/* Mask Background Image */}
      <div className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-cover  sm:h-[1008px] lg:pt-24" style={{ 
        backgroundImage: `url(${Mask})`, maxHeight: '1008px' }}
      ></div>

      <div className="absolute inset-0 -z-10" style={{ 
        backgroundImage: `linear-gradient(to bottom, transparent 80%, rgba(244, 245, 255, 1) 100%)` }}
      ></div>

      {/* Navbar and MainHeading Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center">
        <Navbar />
        <MainHeading />
      </div>
 
    </section>
  )
}

export default Hero

