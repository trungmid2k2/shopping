import React, { useEffect } from "react";
import BestSeller from "./BestSeller";
import Product from "./Product";
import { useParams } from "react-router-dom";
import useCategoryProducts from "../../store/cateproducts";

export default function ProductsByCategory() {
  const { category } = useParams();
  const { products, fetchCategoryProduct, setCategory } = useCategoryProducts();

  useEffect(() => {
    setCategory(category);
    fetchCategoryProduct();
  }, [setCategory, category, fetchCategoryProduct]);

  const ProductsFillter = () => {
    const listProductFillter = products.map((product) => (
      <Product product={product} key={product.id} />
    ));
    return <>{listProductFillter}</>;
  };

  console.log("products by category");
  return (
    <>
      <div className=" py-[64px]">
        <div className="w-[1320px] mx-[auto] px-[20px] flex">
          <div className="w-[25%] pr-[50px]">
            <div>
              <div className="mb-6">
                <input
                  className="w-[210px] p-2 outline-none border-solid border-gray-500 border-[1px]"
                  placeholder="Type here to search..."
                  type="text"
                />
                <button className="h-[40px] w-[40px] bg-[#427bf3] text-white ml-2 ">
                  &gt;
                </button>
              </div>
              <div>
                <div className="text-[25px] font-medium">Categories</div>
                <div>
                  <ul className="text-[18px]">
                    <li className="my-4">Accessories</li>
                    <li className="my-4">Man</li>
                    <li className="my-4">Women</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="text-[25px] font-medium">Our Best Sellers</div>
                <div>
                  <BestSeller />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[75%] bg-[#005076] ">
            {products.length === 0 ? (
              <div className="py-[30%] text-center">
                <p className="text-white">Loading...</p>
              </div>
            ) : (
              <div className="flex flex-wrap w-[810px] mx-auto py-5">
                <ProductsFillter />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
