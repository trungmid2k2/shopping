import React from "react";

export default function BannerSale() {
  return (
    <>
      <div className="mx-auto w-[1200px] py-[200px]">
        <div className="text-[66px] font-semibold">
          Raining Offers For <br />
          <span>Hot Summer!</span>
        </div>
        <div className="text-[26px] font-bold my-[30px]">
          25% Off On All Products
        </div>
        <div>
          <div className="font-bold">
            <button
              className="px-[28px] py-[16px] bg-white text-[black]
            border-[1px] border-solid border-white mr-[20px] 
            hover:bg-black hover:border-black hover:text-white"
            >
              SHOP NOW
            </button>
            <button
              className="px-[28px] py-[16px] 
            border-[1px] border-solid border-white ml-[20px]
            hover:bg-white hover:text-black
            "
            >
              FIND MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
