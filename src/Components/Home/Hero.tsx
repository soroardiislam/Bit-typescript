import React from 'react'

export const Hero: React.FC = () => {
  return (
    <div className='py-17 grid grid-cols-2 gap-6'>
      <div>
        <div>
          <span className='mb-3 text-[#99E39E] font-medium text-base py-1.5 px-2.5 bg-[#99E39E1A] border rounded-full border-[#FFFFFF1A]'>Future of crypto trading</span>
        </div>
        <h1 className='text-[72px] font-medium leading-[120%] text-white'>Fast and Secure Cryptocurrency Exchange</h1>
        <p className='text-[#FFFFFFCC] mt-3 text-base'>
          Trade cryptocurrencies with ease, security, and advanced features on our cutting-edge platform.
        </p>
        <div className='mt-10'>
          <button className='button'>Explore more</button>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <img className='w-full h-auto' src="https://i.ibb.co.com/SDwhbwmf/image.png" alt="" />
      </div>
    </div>
  )
}
