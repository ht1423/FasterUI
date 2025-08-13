import React from 'react'
import Form from '../components/GetInTouchComp/Form'
import Spiral from '../assets/GetInTouchAsset/spiral.svg'

function GetInTouch() {
  return (
    <section className='relative mt-[100px] md:mt-[150px] w-full max-w-[1200px] mx-auto'>

      {/*SPrial Background Image*/}
      <div className="absolute left-[200px] top-[-100px] w-[280px] h-[150px] sm:w-[280px] sm:h-[150px] sm:left-[400px] md:w-[200px] md:h-[150px] md:left-[600px] lg:w-[220px] lg:h-[180px] lg:left-[800px] xl:w-[235px] xl:h-[218px] xl:left-[1000px] opacity-100 mix-blend-color-burn pointer-events-none bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage: `url(${Spiral})`,
        }}
      />


      {/*Main heading and Form*/}
      <div className="flex flex-col justify-center items-center">

        <h1 className='raleway font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[120%] text-[#252432]'>Let's Get in Touch</h1>

        <Form />

      </div>
       
    </section>
  )
}

export default GetInTouch