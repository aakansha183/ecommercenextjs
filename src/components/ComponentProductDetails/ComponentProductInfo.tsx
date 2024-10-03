import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarOutline';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {
  productInfoContainer,
  productNameStyles,
  starRatingContainer,
  starRatingText,
  priceStyles,
  originalPriceStyles,
  discountStyles
} from '../../Styles/StyleProductDetails/StyleProductInfo';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ProductInfoProps } from '@/Utils/Interfaces/InterfacesProductInfo';

const ProductInfo: React.FC<ProductInfoProps> = ({ name, rating, price, originalPrice, discount }) => {
  const renderStars = (rating: number) => (
    <>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        if (rating >= ratingValue) return <StarIcon key={index} style={{ color: '#ffcc00' }} />;
        if (rating >= ratingValue - 0.5) return <StarHalfIcon key={index} style={{ color: '#ffcc00' }} />;
        return <StarOutlineIcon key={index} style={{ color: '#ffcc00' }} />;
      })}
    </>
  );

  return (
    <Box sx={productInfoContainer}>
      <Typography variant="h4" sx={productNameStyles}>
        {name}
      </Typography>
      <Box sx={starRatingContainer}>
        {renderStars(rating)}
        <Typography variant="body2" sx={starRatingText}>
          {rating}/5
        </Typography>
      </Box>
      <Typography variant="h5" sx={priceStyles}>
        ${price}
        {originalPrice && (
          <Typography component="span" sx={originalPriceStyles}>
            ${originalPrice}
          </Typography>
        )}
        {discount && (
          <Box component="span" sx={discountStyles}>
            {discount}
          </Box>
        )}
      </Typography>
    </Box>
  );
};

export default ProductInfo;

