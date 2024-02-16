import React, { useEffect } from "react";
import useProductStore from "../../store/products";
import Product from "./Product";

export default function ProductList() {
  const { products, fetchProducts } = useProductStore();

  const Products = ({ products }) => {
    const tenProducts = products.slice(0, 10);
    const listProduct = tenProducts.map((product) => (
      <Product key={product.id} product={product} />
    ));
    return <>{listProduct}</>;
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <Products products={products} />
    </>
  );
}
