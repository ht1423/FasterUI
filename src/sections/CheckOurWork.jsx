import React from 'react'
import ImageCont from '../components/CheckOurWorkComp/ImageCont'
import ReviewImage from '../components/CheckOurWorkComp/ReviewImage'
import LeftArrow from '../assets/CheckOurWorkAsset/leftArrow.svg'
import RightArrow from '../assets/CheckOurWorkAsset/RightArrow.svg'
import BlueFlower from '../assets/CheckOurWorkAsset/BlueFlower.svg'


function CheckOurWork() {
  return (
    <section className="relative w-full flex flex-col items-center  overflow-x-hidden">

      {/*Blue Flower BAckground Image*/}
      <div className="absolute top-[100px] w-[320px] h-[350px] sm:w-[380px] sm:h-[400px] sm:left-[150px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] lg:left-[250px] lg:top-[60px] xl:w-[600px] xl:h-[600px] xl:left-[370px] xl:top-[130px] 2xl:left-[420px] opacity-100 mix-blend-color-burn pointer-events-none bg-no-repeat bg-contain bg-center z-0"
        style={{
          backgroundImage: `url(${BlueFlower})`,
        }}
      />

      <div className="flex items-center gap-[20px] md:gap-[30px] lg:gap-[100px] xl:gap-[188px] mt-[150px]  xl:mt-[216px]">

        {/* Left Arrow Circle */}
        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[40px] xl:w-[78px] xl:h-[78px] bg-white rounded-full flex justify-center items-center cursor-pointer mb-[-8px] md:mb-[-12px] lg:[-16px] xl:mb-[-18px]">
          <img src={LeftArrow} alt="Left Arrow" className="w-[24px] h-[24px]" />
        </div>

        {/* Heading */}
        <h1 className="raleway font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] z-10 leading-[120%] text-[#252432] whitespace-nowrap">
          Check our Work
        </h1>

        {/* Right Arrow Circle */}
        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[40px] xl:w-[78px] xl:h-[78px] bg-white rounded-full flex justify-center items-center cursor-pointer mb-[-8px] md:mb-[-12px] lg:[-16px] xl:mb-[-18px]">
          <img src={RightArrow} alt="Right Arrow" className="w-[24px] h-[24px]" />
        </div>
      </div>

      {/* Sub-heading */}
      <p className="mt-4 xl:mt-8 mx-[40px] md:w-[449px] text-center inter font-normal text-[14px] leading-[150%] text-[#8987A1] z-10"> Take a look at some of our recent projects to see how we've helped businesses like yours succeed online. </p>

      <ImageCont />
      <ReviewImage />
      
    </section>
  )
}

export default CheckOurWork
