import React from 'react'
import CardsContainer from '../components/WhatWeDoComp/CardsContainer'

function WhatWeDo() {
  return (
    <section className="relative w-full mt-[155px] px-[30px] sm:px-[40px] md:px-[70px] lg:px-[90px] xl:px-[112px] z-10">

    {/*What we do section Main heading*/}
    <h2 className="raleway font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[120%] text-[#252432]">
      What We do
    </h2>

    {/*Cards Container*/}
    <div className='mt-[32px] flex justify-center'>
      <CardsContainer />
    </div>

  </section>
  )
}

export default WhatWeDo