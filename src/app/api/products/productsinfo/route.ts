import { NextResponse } from 'next/server';
import { Product } from '@/Utils/Interfaces/InterfaceProduct';

const products: Product[] = [
  {
    id: 1,
    name: 'Polo with Contrast Trims',
    image: "/assests/Images/PrintedShirt.png",
    price: 112,
    originalPrice: 242,
    discount: '-20%',
    rating: 4.0,
  },
  {
    id: 2,
    name: 'Gradient Graphic T-shirt',
    price: 145,
    rating: 3.5,
    image: "/assests/Images/BlueShirt.png"
  },
  {
    id: 3,
    name: 'Polo with Tipping Details',
    price: 180,
    rating: 4.5,
    image: "/assests/Images/PinkT-Shirt.png"

  },
  {
    id: 4,
    name: 'Black Striped T-shirt',
    price: 120,
    originalPrice: 150,
    discount: '-30%',
    rating: 5.0,
    image: "/assests/Images/GreenShirt.png",

  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 132,
    originalPrice: 232,
    discount: "-20%",
    rating: 5.0,
    image: "/assests/Images/OrangeBlackTshirt.png",

  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    image: "/assests/Images/OrangeTshirt.png",

  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    image: "/assests/Images/DenimShorts.png",

  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    image: "/assests/Images/Jeans.png",

  },

];

export async function GET() {
  return NextResponse.json(products);
}