import React from "react";
import logo from "../../assets/HeroAsset/Logo.svg"; 

function Navbar() {
  return (
    <header className="flex justify-between items-center px-28 py-6 ">

      {/* FasterUI Logo */}
      <a href="/" >
        <img src={logo} alt="FasterUI Logo" className="w-[170px] h-[37px] object-contain" />
      </a>

      {/* Nav Links */}
      <nav className="flex items-center justify-center gap-[46px] bg-white/60 border border-white rounded-[20px] text-[16px] w-[499px] h-[68px] inter leading-[150%]">
        <a href="#" className="font-bold text-[#252432]"> Home </a>
        <a href="#" className="text-[#8987A1]"> About </a>
        <a href="#" className="text-[#8987A1]"> How it Works </a>
        <a href="#" className="text-[#8987A1]"> Services </a>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-[19px]">

        <button className="raleway font-[400] text-[16px] leading-[150%] text-[#8987A1] opacity-80 cursor-pointer"> Sign In </button>

        <button className="w-[132px] h-[48px] font-[700] bg-[rgb(78,71,255)] text-white raleway text-[16px] rounded-[10px] cursor-pointer"> Sign Up
        </button>

      </div>
    </header>
  );
}

export default Navbar;
