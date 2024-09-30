export interface CartItem {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
    color: string | null;
    size:string
  }
  
  export interface CartState {
    items: CartItem[];
  }
  