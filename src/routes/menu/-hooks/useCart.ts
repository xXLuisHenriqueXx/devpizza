import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItemInput {
  productId: string | number;
  category: string;
  title: string;
  unitPrice: number;
  options?: Record<string, string | number>;
}

export interface CartItem extends CartItemInput {
  id: string;
  quantity: number;
}

export interface DeliveryAddress {
  street: string;
  number: string;
  district: string;
  complement: string;
}

const EMPTY_ADDRESS: DeliveryAddress = {
  street: "",
  number: "",
  district: "",
  complement: "",
};

interface CartState {
  items: CartItem[];
  address: DeliveryAddress;
  notes: string;

  addItem: (item: CartItemInput, quantity?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;

  setAddress: (address: Partial<DeliveryAddress>) => void;
  setNotes: (notes: string) => void;

  totalItems: () => number;
  subtotal: () => number;
}

function getItemKey(item: CartItemInput): string {
  return JSON.stringify([
    item.category,
    item.productId,
    Object.entries(item.options ?? {}).sort(([a], [b]) => a.localeCompare(b)),
  ]);
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      address: EMPTY_ADDRESS,
      notes: "",

      addItem: (item, quantity = 1) => {
        if (!Number.isInteger(quantity) || quantity < 1) return;
        if (!Number.isFinite(item.unitPrice) || item.unitPrice < 0) return;

        const id = getItemKey(item);

        set((state) => {
          const existing = state.items.find((cartItem) => cartItem.id === id);
          if (existing)
            return {
              items: state.items.map((cartItem) =>
                cartItem.id === id
                  ? {
                      ...cartItem,
                      quantity: cartItem.quantity + quantity,
                    }
                  : cartItem,
              ),
            };

          return {
            items: [
              ...state.items,
              {
                ...item,
                id,
                quantity,
              },
            ],
          };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      setQuantity: (id, quantity) => {
        if (!Number.isInteger(quantity)) return;

        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((item) => item.id !== id)
              : state.items.map((item) =>
                  item.id === id ? { ...item, quantity } : item,
                ),
        }));
      },

      // esvazia os itens e as observações do pedido; o endereço é mantido
      clearCart: () => set({ items: [], notes: "" }),

      setAddress: (address) =>
        set((state) => ({ address: { ...state.address, ...address } })),

      setNotes: (notes) => set({ notes }),

      totalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      subtotal: () =>
        get().items.reduce(
          (total, item) => total + item.unitPrice * item.quantity,
          0,
        ),
    }),
    {
      name: "devpizza-cart",
      version: 1,
    },
  ),
);


/** Quantidade total (somando variações) de um produto no carrinho. */
export const useProductQuantity = (
  category: string,
  productId: string | number,
) =>
  useCart((state) =>
    state.items.reduce(
      (total, item) =>
        item.category === category && item.productId === productId
          ? total + item.quantity
          : total,
      0,
    ),
  );

/** Quantidade total de unidades no carrinho. */
export const useCartTotalItems = () =>
  useCart((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );
