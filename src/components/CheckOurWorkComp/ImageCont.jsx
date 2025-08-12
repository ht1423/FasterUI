import React from 'react'
import LeftRect from '../../assets/CheckOurWorkAsset/leftRect.svg'
import MiddleRect from '../../assets/CheckOurWorkAsset/MidRect.svg'
import RightRect from '../../assets/CheckOurWorkAsset/rightRect.svg'

function ImageCont() {
  return (
    <div className="flex justify-center items-center gap-[10px] md:gap-[15px] lg:gap-[25px] xl:gap-[32px] mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[57px]">

      {/* Left rectangle */}
      <div className="h-[250px] py-[15px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:w-[800px] xl:h-[618px] flex justify-end items-center rounded-[10px] bg-white/70 pr-[10px] md:pr-[15px] lg:pr-[25px] xl:pr-[34px]">
        <img src={LeftRect} alt="Project Left" className="w-full h-full rounded-[5px] object-cover z-10"/>
      </div>

      {/* Middle rectangle */}
      <div className="h-[250px] py-[15px] px-[15px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:w-[800px] xl:h-[618px] flex justify-center items-center rounded-[10px] overflow-hidden bg-white/70">
        <img src={MiddleRect} alt="Project Middle" className="w-full h-full rounded-[5px] object-cover z-10"
        />
      </div>

      {/* Right rectangle */}
      <div className="h-[250px] py-[15px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:w-[800px] xl:h-[618px] flex justify-start items-center rounded-[10px] bg-white/70 pl-[10px] md:pl-[15px] lg:pl-[25px] xl:pl-[34px]">
        <img src={RightRect} alt="Project Right" className="w-full h-full rounded-[5px] object-cover z-10"
        />
      </div>
    </div>
  )
}

export default ImageCont
