import React from 'react'
import Logo from '../../assets/HeroAsset/Logo.svg'
import HeartIcon from '../../assets/ContactAsset/heart.svg'
import Insta from '../../assets/ContactAsset/insta.svg'
import LinkedIn from '../../assets/ContactAsset/linkedIn.svg'
import Tiktok from '../../assets/ContactAsset/tiktok.svg'
import Idk from '../../assets/ContactAsset/idk.svg'

function ContactCard() {
  return (
    <div className="relative  rounded-[40px] w-full max-w-[1216px] h-auto min-h-[300px] sm:min-h-[350px] lg:h-[398px] p-[24px_28px] sm:p-[40px_32px] lg:p-[60px_48px] xl:p-[84px_72px] bg-white mx-6 sm:mx-24 md:mx-4 lg:mx-[112px]"
    >
        <div className="flex flex-col md:flex-row justify-between h-full gap-[32px] md:gap-0">

          {/* Left side */}
          <div className="flex flex-col justify-between max-w-full md:max-w-[450px]">

            {/*FasterUI logo*/}
            <img src={Logo} alt="Logo" className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[187px] lg:h-[41px]" />

            {/*Contact us description*/}
            <p className="mt-[24px] sm:mt-[30px] lg:mt-[38px] w-full md:w-[356px] inter font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[150%] text-[#8987A1]"> Ready to elevate your online presence? <br /> Contact us today to discuss your project and <br /> discover how we can bring your vision to life. </p>

            {/*Heart icon*/}
            <div className="flex items-center mt-[32px] sm:mt-[40px] lg:mt-[61px] w-full md:w-[305px] h-[20px] sm:h-[22px] lg:h-[24px]">

              <img src={HeartIcon} alt="Heart" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]" />
              <span className="ml-[8px] sm:ml-[10px] lg:ml-[11px] inter font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[150%] text-[#8987A1] whitespace-nowrap"> Made with love powered by inkyy.com </span>

            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-end">

            <div className="flex flex-col items-start md:items-end justify-between h-auto lg:h-[170px] gap-[24px] md:gap-0">

              {/*Nav links*/}
              <div className="flex flex-wrap md:flex-nowrap gap-[20px] xl:space-x-[45px] w-full md:w-auto inter font-normal text-[14px] xl:text-[16px] leading-[150%] text-[#8987A1]">

                {['Home', 'About', 'How it works', 'Services'].map((item, i) => (
                  <span key={i} className="whitespace-nowrap hover:text-[#17161b] cursor-pointer">{item}</span>
                ))}
              </div>

              {/*Social Media Icons*/}
              <div className="flex items-end gap-[20px] sm:gap-[24px] xl:space-x-[32px] mt-0 md:mt-[30px]">

              {[Insta, LinkedIn, Tiktok, Idk].map((icon, idx) => (
                  <div key={idx} className="flex justify-center items-center bg-[#F5F8FF] w-[48px] h-[48px] rounded-full hover:opacity-70 cursor-pointer">
                    <img src={icon} />
                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
        </div>
  )
}

export default ContactCard