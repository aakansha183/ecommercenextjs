import React from 'react';
import { ProductImageProps } from '../../Utils/Interfaces/InterfaceProductDetailsActions';

const ProductImage: React.FC<ProductImageProps> = ({ src, alt, style }) => {
  return <img src={src} alt={alt} style={style} />;
};

export default ProductImage;
