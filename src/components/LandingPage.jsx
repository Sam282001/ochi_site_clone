import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstruct mt-52 px-20">
        {["We Create", "Mind Blowing", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                <motion.div 
                initial={{width: 0}} 
                animate={{width: "8vw"}}
                transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                className="mr-[1vw] w-[8vw] h-[5.5vw] rounded-md bg-red-500 relative top-[1.5vw]"></motion.div>)}
                <h1 className='flex items-center uppercase text-[9vw] leading-[7.5vw]  font-["Test_Founders_Grotesk_X"] font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}

        <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 ">
          {[
            "For Public and Private Companies",
            "From the First Pitch to IPO",
          ].map((item, index) => (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          ))}
          <div className="start flex items-center gap-5">
            <div className="px-4 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm uppercase">
              Start the Project
            </div>
            
            <div className="w-10 h-10 rounded-full border-[2px] border-zinc-500 flex items-center justify-center">
                <span className="rotate-[45deg]">
                <FaArrowUpLong />
                </span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
