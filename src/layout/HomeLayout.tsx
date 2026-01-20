import React from 'react'
import { Navbar } from '../Components/Shars/Navbar'
import { Hero } from '../Components/Home/Hero'
import { Marque } from '../Components/Home/Marque'
import { Crypto } from '../Components/Home/Crypto'
import { Platform } from '../Components/Home/Platform'
import Currency from '../Components/Home/Currency'

export const HomeLayout: React.FC = () => {
  return (
    <div className=' mx-auto px-12.5'>
      <Navbar/>
      <Hero></Hero>
      <Marque></Marque>
      <Crypto></Crypto>
      <Platform></Platform>
      <Currency></Currency>
      
      
    </div>
  )
}
