import React from "react";
import { BagFill, PersonFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

export default function PagesHeader() {
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
        <li className="px-[15px] pt-[3px]">
          <NavLink className="hover:text-[#0084d6]" to="/cart">
            <BagFill />
          </NavLink>
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
