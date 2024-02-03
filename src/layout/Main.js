import React from "react";
import ProductList from "../components/products/ProductList";
import Introduce from "../components/introduce/Introduce";
import BannerSale from "../components/header/BannerSale";

export default function Main() {
  return (
    <>
      <div className="bg-[#001d2b] text-white h-[100%]">
        <BannerSale />
      </div>
      <div className="bg-[#001d2b] text-white h-[100%]">
        <Introduce></Introduce>
      </div>
      <div className="bg-[#005076] ">
        <div className="w-[1340px] mx-auto py-[56px]">
          <div className="text-center text-[42px] font-bold text-white">
            Feature Products
          </div>
          <div className="w-[100px] mx-auto py-[50px]">
            <hr className="w-[100px]" />
          </div>
          <div>
            <div className="flex flex-wrap">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
