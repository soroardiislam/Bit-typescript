import React from "react";

const Collapse: React.FC = () => {
  return (
    <section className="w-248 mx-auto ">
      <div className="text-center mb-7">
        <h1 className="text-[18px] text-white">Popular <span className="text-[#99E39E]">questions</span></h1>
        <h1 className="text-white text-[40px] ">Learn more about Crypgo</h1>
        <p className="text-[18px] text-white/60">We accept 100+ cryptocurrencies around the world</p>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus mb-5 border-base-300 bg-[#FFFFFF0D] border "
      >
        <div className="collapse-title text-[#99E39E] font-semibold text-2xl ">
          <p className="text-white">
            What is Crypgo?
          </p>
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      
       <div
        tabIndex={0}
        className="collapse collapse-plus mb-5 border-base-300 bg-[#FFFFFF0D] border "
      >
        <div className="collapse-title text-[#99E39E] font-semibold text-2xl ">
          <p className="text-white">
             Is Crypgo available worldwide?
          </p>
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
       <div
        tabIndex={0}
        className="collapse collapse-plus mb-5 border-base-300 bg-[#FFFFFF0D] border "
      >
        <div className="collapse-title text-[#99E39E] font-semibold text-2xl ">
          <p className="text-white">
            Which cryptocurrencies are supported on Crypgo?
          </p>
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
       <div
        tabIndex={0}
        className="collapse collapse-plus mb-5 border-base-300 bg-[#FFFFFF0D] border "
      >
        <div className="collapse-title text-[#99E39E] font-semibold text-2xl ">
          <p className="text-white">
            Is my personal information secure with Crypgo?
          </p>
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
       <div
        tabIndex={0}
        className="collapse collapse-plus mb-5 border-base-300 bg-[#FFFFFF0D] border "
      >
        <div className="collapse-title text-[#99E39E] font-semibold text-2xl ">
          <p className="text-white">
            Are there any deposit or withdrawal fees?
          </p>
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
       <div
        tabIndex={0}
        className="collapse collapse-plus mb-5 border-base-300 bg-[#FFFFFF0D] border "
      >
        <div className="collapse-title text-[#99E39E] font-semibold text-2xl ">
          <p className="text-white">
            Does Crypgo offer advanced trading tools?
          </p>
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      
    </section>
  );
};

export default Collapse;
