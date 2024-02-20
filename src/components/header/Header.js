import React, { useEffect } from "react";
import logo from "../../images/dnk.png";
import CategoriesHeader from "./CategoriesHeader";
import PagesHeader from "./PagesHeader";
import { NavLink } from "react-router-dom";
import useProductStore from "../../store/products";

export default function Header() {
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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
              <CategoriesHeader products={products} />
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
