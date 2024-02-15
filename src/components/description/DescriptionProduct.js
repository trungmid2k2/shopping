import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDesCriptionStore from "../../store/description";
import useCartStore from "../../store/cart";

export default function DescriptionProduct() {
  const { id } = useParams();
  const { product, fetchProduct } = useDesCriptionStore();
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  if (!product) {
    return (
      <div className="py-[30%] text-center">
        <p>Loading...</p>
      </div>
    );
  }
  const handleAddToCart = () => {
    addToCart(product, parseInt(quantity, 10));
    // alert(`Thêm ${quantity} sản phẩm ${product.title} vào giỏ hàng!`);
    alert("Thêm vào giỏ hàng thành công");
  };

  return (
    <>
      <div className="my-[100px]">
        <div className="w-[1200px] mx-auto flex justify-between">
          <div className="w-[600px] ">
            <div>
              <img
                className="w-[600px] h-[600px]"
                src={product.image}
                alt="cc"
              />
            </div>
          </div>
          <div className="w-[555px] ">
            <div className="text-[16px] font-mediummb-[20px]">
              {product.category}
            </div>
            <div className="mb-[50px]">
              <h2 className="text-[30px] font-medium">{product.title}</h2>
            </div>
            <div className="mb-[50px]">
              <span className="text-[24px] font-medium">${product.price}</span>+
              Free Shipping
            </div>
            <div className="mb-[50px]">{product.description}</div>
            <div className="mb-[50px]">
              <input
                type="number"
                className="outline-1 outline outline-black w-[50px] pl-3 py-[4px] mr-5"
                min="1"
                defaultValue={1}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button
                className="py-[5px] px-7 bg-[#0084d6] text-white hover:opacity-75"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </div>
            <div className="mb-[50px]">Categories: {product.category}</div>
          </div>
        </div>
      </div>
    </>
  );
}
