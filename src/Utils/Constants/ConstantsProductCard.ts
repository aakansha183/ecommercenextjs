import { Product } from "../Interfaces/InterfacesProductCard";
import BlueTshirt from '../../../../Assests/Images/BlueShirt.png';
import PrintedTshirt from '../../../../Assests/Images/PrintedShirt.png';
import PinkTshirt from '../../../../Assests/Images/PinkT-Shirt.png';
import CheckTshirt from  '../../../public/assests/Images/BlueShirt.png'
export const products: Product[] = [
    {
      id: 10,
      name: 'Polo with Contrast Trims',
      image: '../../../public/assests/Images/BlueShirt.png',
      price: 212,
      originalPrice: 242,
      discount: '-20%',
      rating: 4.0,
    },
    {
      id: 15,
      name: 'Gradient Graphic T-shirt',
      image: '../../../public/assests/Images/BlueShirt.png',
      price: 145,
      rating: 3.5,
    },
    {
      id: 1,
      name: 'Polo with Tipping Details',
      image: '../../../public/assests/Images/BlueShirt.png',
      price: 180,
      rating: 4.5,
    },
    {
      id: 13,
      name: 'Black Striped T-shirt',
      image: '../../../public/assests/Images/BlueShirt.png',
      price: 120,
      originalPrice: 150,
      discount: '-30%',
      rating: 5.0,
    },
  ];