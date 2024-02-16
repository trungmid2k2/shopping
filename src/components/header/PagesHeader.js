import React from "react";
import { BagFill, PersonFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import useCartStore from "../../store/cart";

export default function PagesHeader() {
  const items = useCartStore((state) => state.items);

  return (
    <>
      <ul className="flex text-[15px]">
        <li className="px-[15px]">
          <a className="hover:text-[#0084d6]" href="cc">
            ABOUT
          </a>
        </li>
        <li className="px-[15px]">
          <a className="hover:text-[#0084d6]" href="cc">
            CONTACT US
          </a>
        </li>
        <li className="px-[15px] pt-[3px] ">
          <div className="relative w-[30px]">
            <NavLink className="hover:text-[#0084d6]" to="/cart">
              <BagFill />
            </NavLink>
            <div className="absolute top-[-13px] right-0 font-semibold text-black bg-white w-[20px] h-[20px] text-center rounded-[50%]">
              {items.length}
            </div>
          </div>
        </li>
        <li className="px-[15px] pt-[3px]">
          <NavLink className="hover:text-[#0084d6]" to="profile">
            <PersonFill className="" />
          </NavLink>
        </li>
      </ul>
    </>
  );
}
