import React from 'react'
import Questions from '../components/FAQComp/Questions'
import Spring from '../assets/FAQAsset/Spring.svg'

function FAQ() {
  return (
    <section className='w-full'>

      {/*Spring Background Image*/}
      <div className="absolute top-[2611px] w-[765px] h-[726px] left-[0px] opacity-100 mix-blend-color-burn pointer-events-none bg-no-repeat"
        style={{
          backgroundImage: `url(${Spring})`,
          transform: 'rotate(-360deg)'
        }}
      />

      <div className='flex justify-between items-start px-[180px]'>

        <div className="relative mt-[341px]">

          {/* Left Heading */}
          <h2 className="raleway font-bold text-[60px] leading-[120%] text-[#252432] w-[454px] z-10"> Frequently Asked Questions </h2>

        </div>

        <div className='mt-[244px]'>
          <Questions/>
        </div>

      </div>

      <div className="absolute top-[3341px] w-full h-[1px] bg-[#D6DDED] opacity-100"/>

    </section>
  )
}

export default FAQ
