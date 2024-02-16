import React, { useState } from "react";
import useCartStore from "../../store/cart";
import { NavLink } from "react-router-dom";

export default function ListItems() {
  const items = useCartStore((state) => state.items);

  const setQuantity = useCartStore((state) => state.setQuantity);

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleIncreaseQuantity = (productId) => {
    const currentQuantity = items.find(
      (item) => item.id === productId
    ).quantity;
    setQuantity(productId, currentQuantity + 1);
  };

  const handleDecreaseQuantity = (productId) => {
    const currentQuantity = items.find(
      (item) => item.id === productId
    ).quantity;
    if (currentQuantity > 1) {
      setQuantity(productId, currentQuantity - 1);
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const listCart = items.map((item, index) => (
    <li key={item.id} className="flex items-center my-3 py-[10px]">
      <div className="w-[500px] text-start">
        <NavLink to={`/products/${item.id}`}>{item.title}</NavLink>
      </div>
      <div className="w-[200px] flex justify-center">
        <img
          className="w-[124px] h-[124px]"
          src={item.image}
          alt="{item.image}"
        />
      </div>
      <div className="w-[150px] flex items-center justify-center">
        <button
          className="w-[30px] border-[#a9a9a9] border text-[16px]"
          onClick={() => handleDecreaseQuantity(item.id)}
        >
          -
        </button>

        <div className="px-4 border-y border-y-[#a9a9a9]">{item.quantity}</div>

        <button
          className="w-[30px] border-[#a9a9a9] border text-[16px]"
          onClick={() => handleIncreaseQuantity(item.id)}
        >
          +
        </button>
      </div>
      <div className="w-[150px]">
        ${item.price * item.quantity} (<span>${item.price}</span>)
      </div>
      <div className="w-[200px]">
        <button
          onClick={() => handleRemoveFromCart(item.id)}
          className="w-[80px] py-2 mx-1 bg-red-500 text-white hover:opacity-70"
        >
          Xóa
        </button>
      </div>
    </li>
  ));

  return <>{listCart}</>;
}
