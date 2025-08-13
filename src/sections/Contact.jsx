import React from 'react'
import ContactCard from '../components/ContactComp/ContactCard'
import Wheel from '../assets/ContactAsset/wheel.svg'
import Gradient from '../assets/ContactAsset/gradient.svg'

function Contact() {
  return (
    <section className="relative pt-24 w-full flex justify-center items-center  sm:pb-12 pb-8 md:pb-24">
      
      {/* Gradient background */}
      <img src={Gradient} alt=""  className="absolute z-0 w-full h-[1228px] left-0 opacity-100 mt-[-270px] md:mt-[-250px] lg:mt-[-320px] xl:mt-[-350px]"/>

      {/* Wheel Background Image */}
      <div className="absolute w-[400px] h-[250px] sm:w-[400px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] xl:w-[998px] xl:h-[525px]  left-0 opacity-100 mix-blend-color-burn pointer-events-none bg-no-repeat bg-contain top-[-50px] md:top-[-120px] lg:top-[-170px] xl:top-[-350px]"

        style={{
          backgroundImage: `url(${Wheel})`,
        }}
      />

      <ContactCard />

    </section>
  )
}

export default Contact
