import React from 'react'
import crypto from '../../assets/crypto.png'
import { IoMdLink } from 'react-icons/io'

export const Crypto: React.FC = () => {
  return (
    <div className='grid grid-cols-2 py-18 gap-6'>
      <div>
      <p className=' text-white font-semibold text-lg mb-10'>Wgy you choice <span className='text-[#99E39E]'>crypto</span></p>
      <h2 className='text-white font-semibold text-[40px] leading-[120%] mt-3'>Features of the crypto framer mobile application</h2>
      <div className='mt-10 grid grid-cols-2 gap-12'>
        <div className='flex items-center gap-4'>
          <div className='p-3 rounded-full bg-[#FFFFFF1A]'>
            <IoMdLink className='text-[#99E39E] text-xl' />
          </div>
          <p className='text-white font-medium'>Designed for crypto trading platforms</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='p-3 rounded-full bg-[#FFFFFF1A]'>
            <IoMdLink className='text-[#99E39E] text-xl' />
          </div>
          <p className='text-white font-medium'>Designed for crypto trading platforms</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='p-3 rounded-full bg-[#FFFFFF1A]'>
            <IoMdLink className='text-[#99E39E] text-xl' />
          </div>
          <p className='text-white font-medium'>Designed for crypto trading platforms</p>
        </div>
      </div>
      </div>
      <div className='flex items-center justify-center'>
        <img className='w-full h-auto' src={crypto} alt="" />
      </div>
    </div>
  )
}
