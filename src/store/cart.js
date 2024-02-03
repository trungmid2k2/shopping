import { create } from "zustand";

const useCartStore = create((set, getState) => ({
  items: [],
  addToCart: (product, quantity = 1) =>
    set((state) => {
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          items: [...state.items, { ...product, quantity: quantity }],
        };
      }
    }),
  getTotalPrice: () => {
    const state = getState(); // Lấy trạng thái hiện tại
    const totalPrice = state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalPrice;
  },
  removeFromCart: (productId) =>
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== productId);
      return { items: updatedItems };
    }),
}));
export default useCartStore;
