import React, { useEffect } from "react";
import useProductStore from "../../store/products";
import { Star, StarFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
export default function BestSeller() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (products.length === 0) {
    return (
      <div className="py-[30%] text-center">
        <p>Loading...</p>
      </div>
    );
  }
  const BestSellerProduct = ({ product }) => {
    return (
      <>
        <div className="py-2 my-4 border-b border-black border-solid">
          <div className="flex">
            <div>
              <NavLink to={`/products/${product.id}`}>
                <img
                  className="w-[64px] h-[64px]"
                  src={product.image}
                  alt="cc"
                />
              </NavLink>
            </div>
            <div className="pl-3">
              <div className=" w-[190px] overflow-hidden whitespace-nowrap text-ellipsis">
                <NavLink to={`/products/${product.id}`}>
                  {product.title}
                </NavLink>
              </div>
              <div className="flex">
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
                    <StarFill /> <StarFill /> <StarFill /> <StarFill />{" "}
                    <StarFill />
                  </>
                ) : (
                  <>
                    <Star /> <Star /> <Star /> <Star /> <Star />
                  </>
                )}
              </div>
              <div>${product.price}</div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const BestSellerList = () => {
    const fiveProducts = products.slice(0, 5);
    const listSeller = fiveProducts.map((product) => (
      <BestSellerProduct key={product.id} product={product} />
    ));
    return <>{listSeller}</>;
  };
  return (
    <>
      <div>
        <BestSellerList />
      </div>
    </>
  );
}
