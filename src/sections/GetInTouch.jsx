import React from 'react'
import Form from '../components/GetInTouchComp/Form'
import Spiral from '../assets/GetInTouchAsset/spiral.svg'

function GetInTouch() {
  return (
    <section className='mt-[200px]'>

      {/*SPrial Background Image*/}
      <div className="absolute top-[3377px] left-[1107px] w-[235px] h-[218px] opacity-100 mix-blend-color-burn pointer-events-none bg-no-repeat"
        style={{
          backgroundImage: `url(${Spiral})`,
          backgroundPosition: 'center',
        }}
      />

      {/*Main heading and Form*/}
      <div className="flex flex-col justify-center items-center">

        <h1 className='raleway font-bold text-[60px] leading-[120%] text-[#252432]'>Let's Get in Touch</h1>

        <Form />

      </div>
       
    </section>
  )
}

export default GetInTouch