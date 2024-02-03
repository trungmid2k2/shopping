import React from "react";

export default function CategoriesHeader() {
  return (
    <>
      <ul className="flex items-center">
        <li className="px-[16px]">
          <a className="hover:text-[#0084d6]" href="ev">
            EVERYTHING
          </a>
        </li>
        <li className="px-[16px]">
          <a className="hover:text-[#0084d6]" href="cc">
            WOMEN
          </a>
        </li>
        <li className="px-[16px]">
          <a className="hover:text-[#0084d6]" href="cc">
            MEN
          </a>
        </li>
        <li className="px-[16px]">
          <a className="hover:text-[#0084d6]" href="cc">
            ACESSORIES
          </a>
        </li>
      </ul>
    </>
  );
}
