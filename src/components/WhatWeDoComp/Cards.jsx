import React from "react";

function Card({ icon, title, description, rightImage, downImage, colSpan, rowSpan }) {
  const flexDirectionClass = rightImage ? "flex-row" : "flex-col";

  return (
    <div className={`relative w-full rounded-lg bg-white py-[29px] px-[24px] flex ${flexDirectionClass} shadow-md items-start ${colSpan === 2 ? "sm:col-span-2" : "col-span-1"} ${rowSpan === 2 ? "sm:row-span-2" : "row-span-1"} hover:scale-105 transform transition-all duration-300`}>

      <div className="flex flex-col flex-1">

        {/* Icon */}
        <div className="w-[44px] h-[44px] rounded-[9px] bg-[#F5F8FF] flex items-center justify-center">
          <img src={icon} className={rightImage ? "w-[21px] h-[13px]" : "w-[24px] h-[24px]"} alt={`${title} icon`}/>
        </div>

        {/* Heading */}
        <h3 className="mt-[19px] inter font-[600] text-[19.77px] leading-[120%] text-[#252432]"> {title} </h3>

        {/* Paragraph */}
        <p className="mt-[18px] inter font-normal text-[14px] leading-[150%] text-[#8987A1]"> {description} </p>

        {/* Down Image */}
        {downImage && (
          <img src={downImage} alt={`${title} down`} className=" w-full h-auto object-cover rounded-[5px] mt-[41px]"/>
        )}
      </div>

      {/* Right Image */}
      {rightImage && (
        <div className="flex-shrink-0 bg-[#5B54FF] w-[30%] lg:w-[40%] h-full xl:w-[218px] xl:h-[214px] ml-[15px] md:ml-[35px] lg:ml-[50px] sm:ml-0 flex justify-center items-center rounded-[5px] overflow-hidden">
          <img src={rightImage} alt={`${title} right`} className="rounded-[5px] h-[30px] md:h-[40px] lg:h-[50px] xl:h-[59.15px]"
          />
        </div>
      )}
    </div>
  );
}

export default Card;
