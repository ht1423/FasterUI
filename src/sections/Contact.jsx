import React from 'react'
import ContactCard from '../components/ContactComp/ContactCard'
import Wheel from '../assets/ContactAsset/wheel.svg'
import Gradient from '../assets/ContactAsset/gradient.svg'

function Contact() {
  return (
    <section className=" mt-[156px] w-full flex justify-center items-center">
      
      {/* Gradient background */}
      <img src={Gradient} alt="" className="absolute z-0 w-[3004px] h-[1228px] top-[3650px] left-[0px] opacity-100"/>

      {/* Wheel Background Image */}
      <div className="absolute top-[3858px] w-[1098px] h-[525px] left-[0px] opacity-100 mix-blend-color-burn pointer-events-none bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/ContactAsset/wheel.svg')",
        }}
      />

      <ContactCard />

    </section>
  )
}

export default Contact
