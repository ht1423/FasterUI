import React from "react";
import logo from "../../assets/HeroAsset/Logo.svg"; 

function Navbar() {
  return (
    <header className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-12 xl:px-28 py-4 sm:py-5 lg:py-6 gap-4">

      {/* FasterUI Logo */}
      <a href="/" >
        <img src={logo} alt="FasterUI Logo" className="w-[120px] h-[26px] sm:w-[140px] md:w-[150px] lg:w-[160px] xl:w-[170px] xl:h-[37px] object-contain" />
      </a>

      {/* Nav Links */}
      <nav className="flex flex-row items-center justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-12 xl:px-[56px] bg-white/60 border border-white rounded-[20px] text-[14px] sm:text-[15px] lg:text-[16px] w-full sm:w-[380px] lg:w-[450px] xl:w-[499px] h-auto sm:h-[56px] md:h-[62px] lg:h-[65px] xl:h-[68px] py-3 sm:py-0 inter leading-[150%]">

        <a href="#" className="font-bold text-[#252432]"> Home </a>
        <a href="#" className="text-[#8987A1] hover:text-[#17161b]"> About </a>
        <a href="#" className="text-[#8987A1] whitespace-nowrap hover:text-[#17161b]"> How it Works </a>
        <a href="#" className="text-[#8987A1] hover:text-[#17161b]"> Services </a>
        
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-6 md:gap-4 lg:gap-6 xl:gap-[19px]">

        <button className="raleway font-[400] text-[14px] sm:text-[15px] lg:text-[16px] leading-[150%] text-[#8987A1] cursor-pointer hover:text-[#17161b]"> Sign In </button>

        <button className="w-[100px] h-[40px] sm:w-[110px] sm:h-[42px] md:w-[120px] md:h-[44px] lg:w-[126px] lg:h-[46px] xl:w-[132px] xl:h-[48px] font-[700] bg-[rgb(78,71,255)] text-white raleway text-[14px] sm:text-[15px] lg:text-[16px] rounded-[10px] cursor-pointer hover:opacity-70"> Sign Up
        </button>

      </div>
    </header>
  );
}

export default Navbar;
