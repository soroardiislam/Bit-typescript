import React from 'react'
import logo from '../../assets/logo.png'

export const Navbar: React.FC = () => {
  const links = <>
    <li>Features</li>
    <li>Benefits</li>
    <li>Services</li>
    <li>Why Crypgo</li>
    <li>FAQs</li>
  </>
  return (
    <div className='flex items-center justify-between py-8'>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className='flex items-center gap-8 text-white font-medium'>
        {links}
      </ul>
      <div>
        <button className='button'>
          Get template
        </button>
      </div>
    </div>
  )
}
