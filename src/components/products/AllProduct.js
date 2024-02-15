import React, { useEffect } from "react";
import useProductStore from "../../store/products";
import Product from "./Product";

export default function AllProduct() {
  const { products, fetchProducts } = useProductStore();
  const Products = ({ products }) => {
    const listProducts = products.map((product) => (
      <Product key={products.id} product={product} />
    ));
    return <>{listProducts}</>;
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <div>
        <Products products={products} />
      </div>
    </>
  );
}
