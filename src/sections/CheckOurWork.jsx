import React, { useState } from 'react';
import ImageCont from '../components/CheckOurWorkComp/ImageCont'
import ReviewImage from '../components/CheckOurWorkComp/ReviewImage'
import LeftArrow from '../assets/CheckOurWorkAsset/leftArrow.svg'
import RightArrow from '../assets/CheckOurWorkAsset/RightArrow.svg'
import BlueFlower from '../assets/CheckOurWorkAsset/BlueFlower.svg'
import LeftRect from '../assets/CheckOurWorkAsset/leftRect.png'
import MiddleRect from '../assets/CheckOurWorkAsset/MidRect.svg'
import RightRect from '../assets/CheckOurWorkAsset/rightRect.png'

function CheckOurWork() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesData = [
    { src: LeftRect, alt: 'Left Rectangle' },
    { src: MiddleRect, alt: 'Middle Rectangle' },
    { src: RightRect, alt: 'Right Rectangle' }
  ];

  const handleNextImg = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
  };

  const handlePrevImg = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagesData.length) % imagesData.length);
  };

  const getVisibleImages = () => {
    const imagesCount = imagesData.length;
    const prevIndex = (currentImageIndex - 1 + imagesCount) % imagesCount;
    const nextIndex = (currentImageIndex + 1) % imagesCount;
    return [
      imagesData[prevIndex],
      imagesData[currentImageIndex],
      imagesData[nextIndex]
    ];
  };

  return (
    <section className="relative w-full flex flex-col items-center  overflow-x-hidden">

      <div className="relative w-full flex flex-col items-center">


        {/*Blue Flower BAckground Image*/}
        <div className="opacity-100 absolute left-1/2 -translate-x-1/2 mix-blend-color-burn pointer-events-none bg-no-repeat bg-contain bg-center z-0 inset-0 w-[340px] mt-14 lg:mt-[-120px] xl:mt-0 sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]"
          style={{
            backgroundImage: `url(${BlueFlower})`,
            transform: 'rotate(13deg)',
          }}
        />

        <div className="flex items-center gap-[20px] sm:gap-[30px] md:gap-[50px] lg:gap-[100px] xl:gap-[188px] mt-[150px] xl:mt-[216px] z-10">

          {/* Left Arrow Circle */}
          <div onClick={handlePrevImg} className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[60px] xl:w-[78px] xl:h-[78px] bg-white rounded-full flex justify-center items-center cursor-pointer mb-[-8px] md:mb-[-12px] lg:[-16px] xl:mb-[-18px] shadow-md transition-transform hover:scale-105 whitespace-nowrap">
            <img src={LeftArrow} alt="Left Arrow" className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]" />
          </div>

          {/* Heading */}
          <h1 className="raleway font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] z-10 leading-[120%] text-[#252432] whitespace-nowrap">
            Check our Work
          </h1>

          {/* Right Arrow Circle */}
          <div onClick={handleNextImg} className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[60px] xl:w-[78px] xl:h-[78px] bg-white rounded-full flex justify-center items-center cursor-pointer mb-[-8px] md:mb-[-12px] lg:[-16px] xl:mb-[-18px] shadow-md transition-transform hover:scale-105">
            <img src={RightArrow} alt="Right Arrow" className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]" />
          </div>
        </div>

        {/* Sub-heading */}
        <p className="mt-4 xl:mt-8 mx-[40px] md:w-[449px] text-center inter font-normal text-[14px] leading-[150%] text-[#8987A1] z-10"> Take a look at some of our recent projects to see how we've helped businesses like yours succeed online. </p>

        <div className="relative w-full overflow-hidden mt-4 sm:mt-8 md:mt-12 lg:mt-16">
          <ImageCont visibleImages={getVisibleImages()} />
        </div>

      </div>

      <div><ReviewImage /></div>
      
    </section>
  )
}

export default CheckOurWork
