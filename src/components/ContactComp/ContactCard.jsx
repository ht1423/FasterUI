import React from 'react'
import Logo from '../../assets/HeroAsset/Logo.svg'
import HeartIcon from '../../assets/ContactAsset/heart.svg'
import Insta from '../../assets/ContactAsset/insta.svg'
import LinkedIn from '../../assets/ContactAsset/linkedIn.svg'
import Tiktok from '../../assets/ContactAsset/tiktok.svg'
import Idk from '../../assets/ContactAsset/idk.svg'

function ContactCard() {
  return (
    <div className="relative rounded-[40px] w-[1216px] h-[398px] p-[84px_72px] bg-white"
    >
        <div className="flex justify-between h-full">

          {/* Left side */}
          <div className="flex flex-col justify-between max-w-[450px]">

            {/*FasterUI logo*/}
            <img src={Logo} alt="Logo" className="w-[187px] h-[41px]" />

            {/*Contact us description*/}
            <p className="mt-[38px] w-[356px] inter font-normal text-[16px] leading-[150%] text-[#8987A1]"> Ready to elevate your online presence? <br /> Contact us today to discuss your project and <br /> discover how we can bring your vision to life. </p>

            {/*Heart icon*/}
            <div className="flex items-center mt-[61px] w-[305px] h-[24px]">

              <img src={HeartIcon} alt="Heart" className="w-[24px] h-[24px]" />
              <span className="ml-[11px] inter font-normal text-[16px] leading-[150%] text-[#8987A1] whitespace-nowrap"> Made with love powered by inkyy.com </span>

            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-end">

            <div className="flex flex-col items-end justify-between h-[170px]">

              {/*Nav links*/}
              <div className="flex space-x-[45px] w-[401px] inter font-normal text-[16px] leading-[150%] text-[#8987A1] whitespace-nowrap">

                {['Home', 'About', 'How it works', 'Services'].map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              {/*Social Media Icons*/}
              <div className="flex items-end space-x-[32px] mt-[30px]">

                {[Insta, LinkedIn, Tiktok, Idk].map((icon, idx) => (
                  <div key={idx} className="flex justify-center items-center bg-[#F5F8FF] w-[48px] h-[48px] rounded-full">
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