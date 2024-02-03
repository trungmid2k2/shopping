import React from "react";
import atrox from "../../images/aatrox-splash.jpg";
import akali from "../../images/akali.jpg";
import orn from "../../images/ornn-splash.jpg";
// import Conclude from "../footer/Conclude";

export default function Introduce() {
  return (
    <>
      <div>
        <hr className="bg-[#88c8e9] text-[#88c8e9] mb-[30px]" />
        <div className="w-[1200px] mx-auto py-[80px] ">
          <div className="flex justify-between">
            <div>
              <div className="w-[370px] relative">
                <img
                  className="w-[100%] h-[480px] object-cover"
                  src={atrox}
                  alt="atrox"
                />
                <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] flex flex-col h-[100%] w-[100%] justify-end p-[50px]">
                  <div className="text-[26px] font-semibold">
                    20% Lord On Top Lane
                  </div>
                  <div className="my-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ac dictum.
                  </div>
                  <div>
                    <button
                      className="px-[28px] py-[16px] font-bold bg-white text-[black]
            border-[1px] border-solid border-white mr-[20px] 
            hover:bg-black hover:border-black hover:text-white"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div>
              <div className="w-[370px] relative">
                <img
                  className="w-[370px] h-[480px] object-cover"
                  src={akali}
                  alt="akali"
                />
                <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] flex flex-col h-[100%] w-[100%] justify-end p-[50px]">
                  <div className="text-[26px] font-semibold">
                    20% Super crap Akali
                  </div>
                  <div className="my-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ac dictum.
                  </div>
                  <div>
                    <button
                      className="px-[28px] py-[16px] font-bold bg-white text-[black]
            border-[1px] border-solid border-white mr-[20px] 
            hover:bg-black hover:border-black hover:text-white"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[370px] relative">
                <img
                  className="w-[370px] h-[480px] object-cover"
                  src={orn}
                  alt="orn"
                />
                <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] flex flex-col h-[100%] w-[100%] justify-end p-[50px]">
                  <div className="text-[26px] font-semibold">
                    20% Tanker? No That Shjt
                  </div>
                  <div className="my-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ac dictum.
                  </div>
                  <div>
                    <button
                      className="px-[28px] py-[16px] font-bold bg-white text-[black]
            border-[1px] border-solid border-white mr-[20px] 
            hover:bg-black hover:border-black hover:text-white"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
