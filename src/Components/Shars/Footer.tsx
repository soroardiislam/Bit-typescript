import React from 'react'
import logo from "../../assets/logo.png"
import icon from "../../assets/Frame 194.png"
import icon2 from "../../assets/Frame 195.png"
import icon3 from "../../assets/Frame 196.png"
import google from "../../assets/Frame 26.png"
import app from "../../assets/Frame 27.png"

export const Footer: React.FC = () => {
  return (
    <section className="">
    <div className="flex justify-between py-15">
        <div className="footer-left ">
         <div className="logo pb-5">
          <img src={logo} alt="" />
        </div>
        <p className="text-white/60 text-md" >
          Transform your crypto business with Crypgo 
        </p>
        <p className="text-white/60 text-m">Framer, a template for startups and blockchain services.</p>
        <div className="social-media flex pt-5">
          <img src={icon} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
        </div>
      </div>
      <div className="footer-right flex justify-between  list-none gap-20">
        <div className="">
          <h1 className="text-2xl text-white mb-3">Links</h1>
          <li className="text-white/60 text-4 mb-2">Features</li>
          <li className="text-white/60 text-4 mb-2">Benefits</li>
          <li className="text-white/60 text-4 mb-2">Services</li>
          <li className="text-white/60 text-4 mb-2">Why Crypgo</li>
          <li className="text-white/60 text-4">FAQs</li>
        </div>
         <div className="">
          <h1 className="text-2xl text-white mb-3 ">Other Pages</h1>
          <li className="text-white/60 text-4 mb-2">Error 404</li>
          <li className="text-white/60 text-4 mb-2">Terms & Conditions</li>
          <li className="text-white/60 text-4 ">Privacy Policy </li>
          
        </div>
         <div className=" ">
          <h1 className="text-2xl mb-3 text-white ">Download app</h1>
          <img className="mb-3 " src={google} alt="" />
          <img src={app} alt="" />
        </div>
        
      </div>
    </div><hr className="text-white/20 w-full pt-10" />
    <p className="text-white/20 w-full pb-10 text-center">Copyright ©2025 Crypgo. All rights reserved</p>
    </section>
  )
}

export default Footer
