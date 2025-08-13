import React from "react";

function MainHeading() {
  return (
    <div className=" xl:w-[764px] flex flex-col items-center mx-[40px] xl:mx-auto mt-[70px]">

      {/*Hero Section Main Heading*/}
      <h1 className="text-[#252432] raleway font-bold text-[35px] sm:text-[50px] md:text-[60px] xl:text-[73.34px] leading-[100%] tracking-normal text-center"> Sleek UI Dark Theme <br></br> for Creative <br></br> Webflow Studios </h1>

      {/*Get in Touch button*/}
      <button className="mt-[25px] sm:mt-[30px] xl:mt-[36px] py-3 px-8 xl:w-[211px] xl:h-[60px] bg-[#252432] rounded-[10px] cursor-pointer border-none raleway font-bold text-[16px] leading-[150%] text-white hover:opacity-70">Get in touch</button>

    </div>
  );
}

export default MainHeading;
