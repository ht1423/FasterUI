import React from "react";

function Card({ icon, title, description, rightImage, downImage, colSpan, rowSpan }) {
  const flexDirectionClass = rightImage ? "flex-row" : "flex-col";

  return (
    <div className={`relative rounded-lg bg-white py-[29px] px-[24px] flex ${flexDirectionClass} items-center ${colSpan === 2 ? "col-span-2" : "col-span-1"} ${rowSpan === 2 ? "row-span-2" : "row-span-1"}`}>

      <div className="flex flex-col flex-1">

        {/* Icon */}
        <div className="w-[44px] h-[44px] rounded-[9px] bg-[#F5F8FF] flex items-center justify-center">
          <img src={icon} className={rightImage ? "w-[21px] h-[13px]" : "w-[24px] h-[24px]"} alt={`${title} icon`}/>
        </div>

        {/* Heading */}
        <h3 className="mt-[19px] inter font-[600] text-[19.77px] leading-[120%] text-[#252432]"> {title} </h3>

        {/* Paragraph */}
        <p className="mt-[18px] max-w-[231px] inter font-normal text-[14px] leading-[150%] text-[#8987A1]"> {description} </p>

        {/* Down Image */}
        {downImage && (
          <img src={downImage} alt={`${title} down`} className="w-[238px] h-[257px] rounded-[5px] mt-[41px]"/>
        )}
      </div>

      {/* Right Image */}
      {rightImage && (
        <div className="bg-[#5B54FF] w-[218px] h-[214px] flex justify-center items-center rounded-[5px]">
          <img src={rightImage} alt={`${title} right`} className="rounded-[5px] h-[59.15px]"
          />
        </div>
      )}
    </div>
  );
}

export default Card;
