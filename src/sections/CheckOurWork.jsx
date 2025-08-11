import React from 'react'
import ImageCont from '../components/CheckOurWorkComp/ImageCont'
import ReviewImage from '../components/CheckOurWorkComp/ReviewImage'
import LeftArrow from '../assets/CheckOurWorkAsset/leftArrow.svg'
import RightArrow from '../assets/CheckOurWorkAsset/rightArrow.svg'

function CheckOurWork() {
  return (
    <section className="w-full flex flex-col items-center  overflow-x-hidden">

      {/*Blue Flower BAckground Image*/}
      <div
        className="absolute bg-no-repeat top-[1448px] w-[799px] h-[841px] left-[351px] opacity-100 mix-blend-color-burn pointer-events-none"
        style={{
          backgroundImage: "url('/src/assets/CheckOurWorkAsset/BlueFlower.svg')",
        }}
      />

      <div className="flex items-center gap-[188px] mt-[216px]">

        {/* Left Arrow Circle */}
        <div className="w-[78px] h-[78px] bg-white rounded-full flex justify-center items-center cursor-pointer mb-[-18px]">
          <img src={LeftArrow} alt="Left Arrow" className="w-[24px] h-[24px]" />
        </div>

        {/* Heading */}
        <h1 className="raleway font-bold text-[60px] z-10 leading-[120%] text-[#252432]">
          Check our Work
        </h1>

        {/* Right Arrow Circle */}
        <div className="w-[78px] h-[78px] bg-white rounded-full flex justify-center items-center cursor-pointer mb-[-18px]">
          <img src={RightArrow} alt="Right Arrow" className="w-[24px] h-[24px]" />
        </div>
      </div>

      {/* Sub-heading */}
      <p className="mt-8 w-[449px] text-center inter font-normal text-[14px] leading-[150%] text-[#8987A1] z-10"> Take a look at some of our recent projects to see how we've helped businesses like yours succeed online. </p>

      <ImageCont />
      <ReviewImage />
      
    </section>
  )
}

export default CheckOurWork
