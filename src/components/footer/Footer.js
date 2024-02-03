import React from "react";
import logo from "../../images/dnk.png";
import { NavLink } from "react-router-dom";
import Conclude from "./Conclude";
export default function Footer() {
  return (
    <>
      <hr />
      <div className="mt-20 mx-auto w-[1200px]">
        <div className="flex justify-between">
          <div className="grid-cols-[300px]">
            <div>
              <img className="w-[90px] h-[30px] mb-11" src={logo} alt="logo" />
            </div>
            <div className="text-[22px] font-bold">
              The best look anytime, anywhere.
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[26px] mb-[20px]">For Her</h2>
            </div>
            <div>
              <ul className="grid grid-rows-4 gap-4">
                <li className="my-3">
                  <a href="#c">Clothing for real The</a>
                </li>
                <li className="my-3">
                  <a href="#c">Clothing for real The black</a>
                </li>
                <li className="my-3">
                  <a href="#c">Clothing for real</a>
                </li>
                <li className="my-3">
                  <a href="#c">Clothing for real</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[26px] mb-[20px]">For Her</h2>
            </div>
            <div>
              <ul className="grid grid-rows-4 gap-4">
                <li className="my-3">
                  <a href="#c">Clothing for real</a>
                </li>
                <li className="my-3">
                  <a href="#c">Clothing for real</a>
                </li>
                <li className="my-3">
                  <a href="#c">Clothing for real</a>
                </li>
                <li className="my-3">
                  <a href="#c">Clothing for real</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[26px] mb-[20px]">Subscribes</h2>
            </div>
            <div className="text-black">
              <input
                className="w-[220px] px-6 py-3 ]"
                placeholder="Your email here..."
              />
            </div>
            <div>
              <button className="font-bold border-[#0084d6] border-solid border-[1px] bg-[#0084d6] px-7 py-3 mt-5 hover:bg-[#046099] hover:border-[#046099]">
                SUBCRIBES
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <Conclude />
    </>
  );
}
