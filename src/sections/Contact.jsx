import React from 'react'
import ContactCard from '../components/ContactComp/ContactCard'
import Wheel from '../assets/ContactAsset/wheel.svg'
import Gradient from '../assets/ContactAsset/gradient.svg'

function Contact() {
  return (
    <section className="relative pt-24 w-full flex justify-center items-center  sm:pb-12 pb-8 md:pb-24">
      
      {/* Gradient background */}
      <img src={Gradient} alt=""  className="absolute z-0 w-full max-w-[3004px] max-h-[600px py-24 sm:max-h-[800px] md:max-h-[1000px] lg:max-h-[1228px] left-0 opacity-100 "/>

      {/* Wheel Background Image */}
      <div className="absolute w-[400px] h-[250px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] xl:w-[1098px] xl:h-[525px] bottom-[380px] left-0 opacity-100 mix-blend-color-burn pointer-events-none bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${Wheel})`,
        }}
      />

      <ContactCard />

    </section>
  )
}

export default Contact
