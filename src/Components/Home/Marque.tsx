import React from 'react'
import marque from '../../assets/marque.png'

export const Marque: React.FC = () => {
  return (
    <div className='py-18'>
      <p className='text-center text-white font-semibold text-lg mb-10'>Trusted by top  <span className='text-[#99E39E]'>crypto platforms</span></p>
      <div>
        <img className='w-full' src={marque} alt="" />
      </div>
    </div>
  )
}
