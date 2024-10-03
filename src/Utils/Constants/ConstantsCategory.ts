import Jeans from '../../../Assests/Images/Jeans.png';
import PrintedShirt from '../../../Assests/Images/PrintedShirt.png';
import PinkShirt from '../../../Assests/Images/PinkT-Shirt.png';
import CheckedShirt from '../../../Assests/Images/CheckT-shirt.png'
import BlueRedCheckedShirt from "../../../Assests/Images/BlueRedCheckedShirt.png"
import OrangeBlackShirt from "../../../Assests/Images/OrangeBlackTshirt.png"
import DenimShorts from "../../../Assests/Images/DenimShorts.png"
import OrangeTshirt from "../../../Assests/Images/OrangeTshirt.png"
import GreenShirt from "../../../Assests/Images/GreenShirt.png"
 const products = [
    {
      id: 15,
      name: 'Gradient Graphic T-shirt',
      price: 145,
      rating: 3.5,
      image: PrintedShirt,
      originalPrice: null,
      discount: null,
      colors:['blue','white','pink']
    },
    {
      id: 2,
      name: 'Polo with Tipping Details',
      price: 180,
      rating: 4.5,
      image: PinkShirt,
      originalPrice: null,
      discount: null,
    },
    {
      id: 3,
      name: 'Black Striped T-shirt',
      price: 120,
      rating: 4.0,
      image: CheckedShirt,
      originalPrice: 160,
      discount: '30%',
    },
    {
      id: 4,
      name: 'Skinny Fit Jeans',
      price: 140,
      rating: 3.5,
      image: Jeans,
      originalPrice: 260,
      discount: '20%',
    },
    {
      id: 5,
      name: 'Checkered Shirt',
      price: 180,
      rating: 4.5,
      image: BlueRedCheckedShirt,
      originalPrice: null,
      discount: null,
    },
    {
      id: 6,
      name: 'Sleeve Striped T-shirt',
      price: 130,
      rating: 4.5,
      image: OrangeBlackShirt,
      originalPrice: 160,
      discount: '30%',
    },
    {
      id: 7,
      name: 'Vertical Striped Shirt',
      price: 100,
      rating: 5.0,
      image: GreenShirt,
      originalPrice: 320,
      discount: '30%',
    },
    {
      id: 8,
      name: 'Courage Graphic T-shirt',
      price: 145,
      rating: 4.0,
      image: OrangeTshirt,
      originalPrice: null,
      discount: null,
    },
    {
      id: 9,
      name: 'Loose Fit Bermuda Shorts',
      price: 80,
      rating: 3.0,
      image: DenimShorts,
      originalPrice: null,
      discount: null,
    },
  ];
  export default products;