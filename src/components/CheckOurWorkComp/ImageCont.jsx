import React from 'react';

function ImageCont({ visibleImages }) {
  return (
    <div className="relative w-full overflow-hidden ">
      
        <div className="flex justify-center items-center px-4 md:px-0 gap-4 transition-transform duration-500 ease-in-out">

        {visibleImages.map((image, index) => (
          
          // White outer rectangle with image
          <div key={index} className="flex-shrink-0 py-6 rounded-[10px] shadow-lg bg-white/70 overflow-hidden w-[300px] h-[220px] sm:w-[400px] sm:h-[280px] md:w-[500px] md:h-[350px] lg:w-[800px] lg:h-[500px]">
            <img src={image.src} alt={image.alt} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCont;
