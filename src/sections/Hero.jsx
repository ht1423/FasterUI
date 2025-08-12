import React from 'react'
import Navbar from '../components/HeroComp/Navbar'
import MainHeading from '../components/HeroComp/MainHeading'
import Mask from '../assets/HeroAsset/Mask group.svg'

function Hero() {
  return (
    <section className="relative z-10">

      {/* Mask Background Image */}
      <img src={Mask} alt="" className="absolute left-[50.33px] top-[-100px] h-[1008px] -z-10 sm:left-[68px] sm:h-[504px] sm:top-[190px] md:left-[72px] md:top-[150px] md:h-[756px] lg:left-[50.33px] lg:h-[1008px] lg:top-0"/>
      
      {/* Navbar and MainHeading Container */}
      <div>
        <Navbar />
        <MainHeading />
      </div>
 
    </section>
  )
}

export default Hero

