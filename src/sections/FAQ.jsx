import React from 'react'
import Questions from '../components/FAQComp/Questions'
import Spring from '../assets/FAQAsset/Spring.svg'

function FAQ() {
  return (
    <section className='relative w-full'>

      <div className='flex justify-between items-start xl:px-[180px] flex-col md:flex-row sm:gap-8 px-8 lg:px-16 2xl:px-[180px]'>

        {/* Heading */}
        <div className="relative mt-[100px] md:mt-[150px] lg:mt-[200px]">
          
          {/*Spring Background Image*/}
          <div className="absolute mt-[-120px] sm:mt-[-180px] md:mt-[-200px] left-[-100px] md:left-[-130px] lg:left-[-160px] xl:left-[-290px] 2xl:left-[-380px] w-[300px] h-[285px] sm:w-[450px] sm:h-[427px] md:w-[600px] md:h-[570px] lg:w-[700px] lg:h-[663px] xl:w-[765px] xl:h-[726px] opacity-100 mix-blend-color-burn pointer-events-none bg-no-repeat bg-center bg-contain"
            style={{
              backgroundImage: `url(${Spring})`,
            }}
          />

          {/* Left Heading */}
          <h2 className="raleway font-bold leading-[120%] text-[#252432] z-10 relative text-[28px] sm:text-[40px] lg:text-[60px] xl:w-[454px] lg:w-[400px] md:w-[250px] sm:w-full xs:text-[28px]"> Frequently Asked Questions</h2>

        </div>

        {/* Questions */}
        <div className='mt-[50px] md:mt-[130px]'>
          <Questions/>
        </div>

      </div>

      <div className="absolute top-[3341px] w-full h-[1px] bg-[#D6DDED] opacity-100"/>
    </section>
  )
}

export default FAQ
