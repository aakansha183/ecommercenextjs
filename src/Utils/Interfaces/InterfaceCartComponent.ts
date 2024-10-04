
export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    color: string;
    size: string;
  }
  
export  interface CartState {
    items: CartItem[];
  }
  