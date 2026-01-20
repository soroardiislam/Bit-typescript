import React from "react";
import bg2 from "../../assets/bg2.png";
import icon1 from '../../assets/Frame51(2).png'
import icon2 from '../../assets/Frame51(1).png'
import icon3 from '../../assets/Frame51.png'

const Currency: React.FC = () => {
  return (
    <section className="flex justify-between items-center pb-18">
      <div className="image ">
        <img className=" " src={bg2} alt="" />
      </div>
      <div className="text gap-10 pl-8 w-146.25 items-center">
        <h5 className="text-[18px] text-white ">
          Crypto landing page <span className=" text-[#99E39E]">template</span>
        </h5>
        <h1 className="text-[40px] text-white">
          Create your cryptocurrency portfolio today
        </h1>
        <p className="text-white/60 text-[16px]">
          Coinbase has a variety of features that make it the best place 
        </p>
        <p className="text-white/60 text-[16px] pb-5">to start trading.</p>

        <div className="flex py-5">
          <img src={icon1} alt="" /> <p className="text-[20px] text-white pl-5 mt-2">Manage your portfolio</p>
        </div><hr  className="text-white/10 text-center"  />

        <div className="flex py-5">
          <img src={icon2} alt="" /> <p className="text-[20px] text-white pl-5 mt-2">Vault protection</p>
        </div><hr  className="text-white/10 text-center"  />

        <div className="flex py-5">
          <img src={icon3} alt="" /> <p className="text-[20px] text-white pl-5 mt-2">Mobile apps</p>
        </div><hr  className="text-white/10 text-center"  />
      </div>
      
      
    </section>
  );
};

export default Currency;
