import React from 'react'
import Customer1 from '../../assets/CheckOurWorkAsset/Ellipse 1.svg'
import Customer2 from '../../assets/CheckOurWorkAsset/Ellipse 2.svg'
import Customer3 from '../../assets/CheckOurWorkAsset/Ellipse 3.svg'
import Customer4 from '../../assets/CheckOurWorkAsset/Ellipse 4.svg'
import Customer5 from '../../assets/CheckOurWorkAsset/Ellipse 5.svg'
import Star from '../../assets/CheckOurWorkAsset/Star 3.svg'

function ReviewImage() {
  return (
    <div className="mt-[86px] flex justify-center ">

      {/* White div */}
      <div className="w-[350px] xl:w-[409px] h-[83px] bg-white border border-[#E4EAF8] rounded-[22px] flex items-center px-[10px] xl:px-[23px]">
        
        {/* Review images 5 */}
        <div className="flex items-center -space-x-3">
          {[Customer1, Customer2, Customer3, Customer4, Customer5].map((img, idx) => (
            <img key={idx} src={img} alt={`Customer ${idx + 1}`} className="w-[37px] h-[37px] border-2 border-white rounded-full object-cover"
            />
          ))}
        </div>

        <div className=" flex flex-col ml-[13px]">

          {/* Rating Based on Reviews */}
          <p className="inter text-[13px] xl:text-[16px] leading-[120%] capitalize whitespace-nowrap">

            <span className="font-semibold text-[#252422]">5.0</span>{' '}
            <span className="font-normal text-[rgb(152,150,173)]">Based on</span>{' '}
            <span className="font-semibold text-[#252422]">145</span>{' '}
            <span className="font-normal text-[rgb(152,150,173)]">Reviews</span>

          </p>

          {/* Stars - recreating on every render. array fix krna baad main */} 
          <div className="flex items-center mt-1 gap-[3px]">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={Star} alt="star" className="w-[13px] h-[13px] object-contain"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewImage
