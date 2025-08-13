import React from "react";
import logo from "../../assets/HeroAsset/Logo.svg"; 

function Navbar() {
  return (
    <header className="w-full flex flex-wrap lg:flex-row justify-between items-center px-4 md:px-8 gap-4 lg:gap-8 py-[24px] xl:py-[38px]">

      {/* FasterUI Logo */}
      <a href="/" >
        <img src={logo} alt="FasterUI Logo" className="w-[120px] h-[26px] sm:w-[140px] md:w-[150px] lg:w-[170px] xl:w-[170px] xl:h-[37px] object-contain" />
      </a>

      {/* Nav Links */}
      <nav className="flex-grow-0 flex-shrink-0 order-3 lg:order-2 w-full lg:w-auto flex flex-row items-center justify-around md:justify-center gap-4 sm:gap-6 px-4 md:px-0 md:gap-12 xl:px-[56px] bg-white/60 backdrop-blur-md border border-white rounded-full lg:rounded-[20px] text-sm sm:text-base h-14 sm:h-[56px] md:h-[62px] lg:h-[65px] xl:h-[68px] py-3 inter leading-[150%]">

        <a href="#" className="font-bold text-[#252432] transition-colors duration-200 hover:text-black">Home</a>
        <a href="#" className="text-[#8987A1] transition-colors duration-200 hover:text-[#17161b]">About</a>
        <a href="#" className="text-[#8987A1] whitespace-nowrap transition-colors duration-200 hover:text-[#17161b]">How it Works</a>
        <a href="#" className="text-[#8987A1] transition-colors duration-200 hover:text-[#17161b]">Services</a>

      </nav>

      {/* Auth Buttons */}
      <div className="flex-shrink-0 order-2 lg:order-3 flex items-center gap-4 md:gap-6">
        <button className="text-sm sm:text-base font-normal text-[#8987A1] cursor-pointer transition-colors duration-200 hover:text-[#17161b]"> Sign In </button>
        <button className="w-28 sm:w-32 md:w-36 h-10 md:h-12 font-bold bg-[#4E47FF] text-white text-sm sm:text-base rounded-xl cursor-pointer transition-opacity duration-200 hover:opacity-80"> Sign Up </button>
      </div>
    </header>
  );
}

export default Navbar;
