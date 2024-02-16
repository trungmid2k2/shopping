import React from "react";
import useCartStore from "../../store/cart";
import ListItems from "./ListItems";

export default function Cart() {
  const items = useCartStore((state) => state.items);

  //   const getTotalQuantity = useCartStore((state) => state.getTotalQuantity);

  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  return (
    <>
      <div>
        <div className="w-[1200px] mx-auto text-center my-[100px]">
          <div>
            <h2>Giỏ hàng</h2>
            <div className="mb-[50px]">U have {items.length}</div>
            <li className="flex items-center my-3 border-b border-black border-solid border-1 pb-[20px]">
              <div className="w-[500px] text-start">Tên sản phẩm</div>
              <div className="w-[200px]">Ảnh</div>
              <div className="w-[150px]">Số lượng</div>
              <div className="w-[150px]">Giá tiền</div>
              <div className="w-[200px]">Tùy chọn</div>
            </li>
            {items.length === 0 ? (
              <div>Bạn chưa thêm gì vào giỏ hàng</div>
            ) : (
              <div>
                <ul>
                  <ListItems />
                </ul>
              </div>
            )}
          </div>
          <div className="border-t border-black border-solid border-1 mt-[20px] flex">
            {/* <p>Total Quantity: {getTotalQuantity()}</p> */}
            <div className="w-[850px] text-start">Total prices: </div>
            <p className=" w-[150px] text-center">${getTotalPrice()}</p>

            <div className="w-[200px] text-start"></div>
          </div>
        </div>
      </div>
    </>
  );
}
