import React from 'react'
import Navbar from '../components/HeroComp/Navbar'
import MainHeading from '../components/HeroComp/MainHeading'
import Mask from '../assets/HeroAsset/Mask group.svg'

function Hero() {
  return (
    <section className="relative z-10">

      {/* Mask Background Image */}
      <img src={Mask} alt="" className="absolute left-[136.33px] h-[1008px] -z-10"/>

      {/* Navbar and MainHeading Container */}
      <div>
        <Navbar />
        <MainHeading />
      </div>
 
    </section>
  )
}

export default Hero

