import React from 'react';













const BannerAtom = ({ srcImg, title, heading }) => {
  return (
    <div className='relative mmd:h-[400px] -z-[50]'>
      <img src={srcImg} className={`absolute left-0 w-full h-full -top-24 sm:-top-12 object-cover mmd:-top-16`} alt='imgBanner' loading='lazy' />
       <section role="banner" aria-label="Main" className={` max-w-[1920px] mx-auto px-2 pt-8 pb-28 sm:pt-20 sm:pb-24 mmd:px-20 mmd:py-24 text-white`}>
         <div className='px-20 mb-4 z-50 relative sm:mb-20 lg:mb-24'>
          <p className="text-lapContactBody mb-4 font-rubik w-[100px] cursor-default select-none bg-white/10 border-l-4 pl-2 border-yellow-500 ">
            {title}
          </p>
          <span className="text-mobHeaderText sm:text-tabHeaderText lg:text-lapHeaderText cursor-default select-none font-rubik font-semibold leading-[23px] sm:leading-[30.81px]">
            {heading}
          </span> 
        </div>
      </section>
    </div>
  );
};

export default BannerAtom;
