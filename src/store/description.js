import { create } from "zustand";

const useDesCriptionStore = create((set, get) => ({
  // product: {},
  product: null,
  fetchProduct: async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      set({ product: data });
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  },
}));
export default useDesCriptionStore;
