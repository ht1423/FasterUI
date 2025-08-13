import React from 'react'
import Customer1 from '../../assets/CheckOurWorkAsset/Ellipse 1.svg'
import Customer2 from '../../assets/CheckOurWorkAsset/Ellipse 2.svg'
import Customer3 from '../../assets/CheckOurWorkAsset/Ellipse 3.svg'
import Customer4 from '../../assets/CheckOurWorkAsset/Ellipse 4.svg'
import Customer5 from '../../assets/CheckOurWorkAsset/Ellipse 5.svg'
import Star from '../../assets/CheckOurWorkAsset/Star 3.svg'

function ReviewImage() {
  return (
    <div className="mt-[50px] md:mt-[86px] flex justify-center">

      {/* White Card */}
      <div className="w-[280px] sm:w-[320px] md:w-[350px] xl:w-[409px] h-[70px] sm:h-[75px] md:h-[83px] bg-white border border-[#E4EAF8] rounded-[18px] sm:rounded-[20px] md:rounded-[22px] flex items-center px-[8px] sm:px-[12px] md:px-[23px]">

        {/* Customer */}
        <div className="flex items-center -space-x-2 sm:-space-x-3">
          {[Customer1, Customer2, Customer3, Customer4, Customer5].map((img, idx) => (
            <img key={idx} src={img} alt={`Customer ${idx + 1}`} className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] md:w-[37px] md:h-[37px]  border-2 border-white rounded-full object-cover cursor-pointer hover:scale-110 transition-all transform duration-300"/>
          ))}
        </div>

        <div className="flex flex-col ml-[8px] sm:ml-[10px] md:ml-[13px]">

          {/* Rating */}
          <p className="inter text-[11px] sm:text-[12px] md:text-[13px] xl:text-[16px] leading-[120%] capitalize whitespace-nowrap">

            <span className="font-semibold text-[#252422]"> 5.0 </span>{' '}
            <span className="font-normal text-[rgb(152,150,173)]"> Based on </span>{' '}
            <span className="font-semibold text-[#252422]"> 145 </span>{' '}
            <span className="font-normal text-[rgb(152,150,173)]"> Reviews </span>

          </p>

          {/* Stars */}
          <div className="flex items-center mt-[2px] sm:mt-1 gap-[2px] sm:gap-[3px]">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={Star} alt="star" className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[13px] md:h-[13px] object-contain"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewImage
