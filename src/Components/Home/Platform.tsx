import React from 'react'

export const Platform: React.FC = () => {
  return (
    <div
      className="relative my-18 p-16 w-full flex items-center justify-between overflow-hidden rounded-[18px] border border-[#FFFFFF1A] bg-[#FFFFFF0D] 
      
    
      bg-[url('./assets/Frame.png')] bg-no-repeat bg-contain bg-right

    "
    >
      <div className="relative z-10">
        <h1 className="text-[40px] font-semibold text-white">
          Crypgo powered by framer platform
        </h1>
        <p className="text-[#FFFFFF99] max-w-xl mt-2">
          Our landing page empower framer developers to have free, safer and
          more trustworthy experiences
        </p>
      </div>

      <div className="relative z-10">
        <button className="button">Explore more</button>
      </div>
    </div>
  );
};
