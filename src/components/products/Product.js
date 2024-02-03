import React, { useState } from "react";
import { BagFill, Star, StarFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import useCartStore from "../../store/cart";

export default function Product({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert("Thêm vào giỏ hàng thành công");
  };
  return (
    <>
      <div className="mx-[10px] mb-11 w-[248px] relative group">
        <div>
          <NavLink to={`/products/${product.id}`}>
            <img
              className="w-[248px] h-[248px] my-3 "
              src={product.image}
              alt="cc"
            />
          </NavLink>
        </div>
        <div className="absolute top-0 right-0 hidden mt-4 mr-4 group-hover:block">
          <button
            onClick={handleAddToCart}
            className="px-[8px] py-[8px] bg-[#868686] rounded-[50%] text-white"
          >
            <BagFill />
          </button>
        </div>
        <div className="text-[17px] font-semibold text-white my-3 w-[248px] whitespace-nowrap text-ellipsis overflow-hidden">
          <NavLink
            to={`/products/${product.id}`}
            className="hover:text-[#c2c2c2]"
          >
            {product.title}
          </NavLink>
        </div>
        <div className="text-[13.6px] text-[#c2c2c2] my-3">
          {product.category.toUpperCase()}
        </div>
        <div className="my-3 text-white "> ${product.price} </div>
        <div className="flex items-center my-3 text-white ">
          <div className="mr-2 text-[13.6px]">{product.rating.rate}</div>
          {product.rating.rate <= 1 ? (
            <>
              <StarFill /> <Star /> <Star /> <Star /> <Star />
            </>
          ) : product.rating.rate <= 2.5 ? (
            <>
              <StarFill /> <StarFill /> <Star /> <Star /> <Star />
            </>
          ) : product.rating.rate <= 3.5 ? (
            <>
              <StarFill /> <StarFill /> <StarFill /> <Star /> <Star />
            </>
          ) : product.rating.rate <= 4.5 ? (
            <>
              <StarFill /> <StarFill /> <StarFill /> <StarFill /> <Star />
            </>
          ) : product.rating.rate <= 5 ? (
            <>
              <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
