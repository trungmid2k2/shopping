import { create } from "zustand";

const useProductStore = create((set, get) => ({
  products: [],
  product: {},
  id: null,
  setId: (id) => set({ id }),
  fetchProducts: async () => {
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products data");
      }
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.log(error);
    }
  },
  fetchDescriptionProduct: async () => {
    const id = get();
    const url = `https://fakestoreapi.com/products/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products data");
      }
      const data = await response.json();
      set({ product: data });
    } catch (error) {
      console.log(error);
    }
  },
}));
export default useProductStore;
