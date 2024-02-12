import { create } from "zustand";

interface CartStore {
  addCitiation(arg0: string): unknown;
  url: string;
}

const useCart = create<CartStore>((set, get) => ({
  url: "",
  addCitiation: (data: string) => {
    set({ url: data });
  },
}));

export default useCart;
