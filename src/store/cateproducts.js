import { create } from "zustand";

const useCategoryProducts = create((set, get) => ({
  products: [],

  currentPage: 1,
  itemsPage: 10,
  category: "",

  setCurrentPage: (page) => set({ currentPage: page }),

  setCategory: (category) => set({ category }),

  fetchCategoryProduct: async () => {
    const { category } = get();
    const url = `https://fakestoreapi.com/products/category/${category}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch category products data");
      }
      const data = await response.json();
      const filteredProducts = data.filter(
        (product) => product.category === category
      );
      set({ products: filteredProducts });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useCategoryProducts;
