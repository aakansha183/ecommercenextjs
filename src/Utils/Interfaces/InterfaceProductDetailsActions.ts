export interface ProductDetailsActionsProps {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    selectedSize: string | null;
    handleaddToCart: () => void;
    productId: string;  
  }
  export interface Product {
    id: string;
    image:string;
    name: string;
    rating: number;
    originalPrice?: number;
    price: number;
    discount: string;
  }
  export interface ProductImageProps {
    src: string;
    alt: string;
    style?: React.CSSProperties;
  }
  