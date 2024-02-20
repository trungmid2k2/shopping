import React from "react";
import { NavLink } from "react-router-dom";

export default function CategoriesHeader({ products }) {
  const uniqueCategory = [
    ...new Set(products.map((product, i) => product.category)),
  ];

  const listuniqueCate = uniqueCategory.map((category, i) => (
    <li key={i} className="px-[16px]">
      <NavLink
        className="hover:text-[#0084d6]"
        to={`products/category/${category}`}
      >
        {category.toUpperCase()}
      </NavLink>
    </li>
  ));

  return (
    <>
      <ul className="flex items-center">
        <li className="px-[16px]">
          <NavLink className="hover:text-[#0084d6]" to="/allproduct">
            EVERYTHING
          </NavLink>
        </li>
        {listuniqueCate}
      </ul>
    </>
  );
}
