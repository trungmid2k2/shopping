import React from "react";
import logo from "../../images/dnk.png";
import CategoriesHeader from "./CategoriesHeader";
import PagesHeader from "./PagesHeader";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="py-[15px] bg-[rgba(0,0,0,0.07)]">
        <div className="flex w-[100%] justify-between items-center h-[71px] px-[35px]  opacity-95">
          <div className="flex items-center">
            <div>
              <NavLink to="/">
                <img
                  className="w-[140px] h-[47px] pr-[10px]"
                  src={logo}
                  alt="logo"
                />
              </NavLink>
            </div>
            <div>
              <CategoriesHeader />
            </div>
          </div>
          <div>
            <PagesHeader />
          </div>
        </div>
      </div>
    </>
  );
}
