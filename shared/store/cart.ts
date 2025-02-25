import { create } from 'zustand';
import { Api } from '../services/api-client';
import { getCartDetails } from '../lib';
import { CartStateItem } from '../lib/getCartDetails';

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  fetchCartItems: () => Promise<void>;

  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  addCartItem: () => Promise<void>;

  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({
        loading: true,
        error: false,
      });
      const data = await Api.cart.getCart();
      const details = getCartDetails(data);
      set(details);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({
        loading: true,
        error: false,
      });
      const data = await Api.cart.updateItemQuantity(id, quantity);
      const details = getCartDetails(data);
      set(details);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: number) => {},

  addCartItem: async () => {},
}));
