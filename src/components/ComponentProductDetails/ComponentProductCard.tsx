import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid2";
import {
  suggestedProductsContainer,
  titleStyles,
  productCardStyles,
  productImageStyles,
  productNameStyles,
  priceStyles,
  originalPriceStyles,
  ratingStyles,
  viewAllButtonStyles,
  viewAllTranslationstyles,
  discountStyles,
} from '../../Styles/StyleProductDetails/StyleSuggestedProducts';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Translations } from '@/Utils/Translation/Translation';
import { theme } from '@/Theme/Theme';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Product } from '@/Utils/Interfaces/InterfaceProduct';

const SuggestedProducts: React.FC = () => {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const renderStars = (rating: number) => (

    <Rating value={rating} precision={0.5} readOnly sx={{ color: theme.colors.yellow }} />
  );
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products/productsinfo')
        setProducts(response.data.slice(0, 4))
      }
      catch (error) {
        console.log("Error Fetching data")
      }
    }
    fetchProducts();
  }, [])


  return (
    <Box sx={suggestedProductsContainer}>
      <Typography variant="h4" sx={titleStyles}>
        {Translations.suggestedProductsSubhead}
      </Typography>
      <Grid container spacing={7} justifyContent="center">
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
            <Box sx={productCardStyles}>
              <Box
                component="img"
                onClick={() => {
                  router.push(`/productdetails?id=${product.id}`)
                }}
                src={product.image}
                alt={product.name}
                sx={productImageStyles}
              />
              <Typography sx={productNameStyles}>
                {product.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, marginLeft: '10px' }}>
                {renderStars(product.rating)}
                <Typography variant="body2" sx={ratingStyles}>
                  {product.rating}/5
                </Typography>
              </Box>
              <Box sx={{ mt: 1, textAlign: 'left', marginLeft: '10px' }}>
                <Typography sx={priceStyles}>
                  ${product.price}
                  {product.originalPrice && (
                    <Typography component="span" sx={originalPriceStyles}>
                      ${product.originalPrice}
                    </Typography>
                  )}
                </Typography>
                {product.discount && (
                  <Typography sx={discountStyles}>
                    {product.discount}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        onClick={() => router.push('/category')}
        sx={viewAllButtonStyles}
      >
        <Typography sx={viewAllTranslationstyles}>{Translations.ViewAll}</Typography>
      </Button>
    </Box>
  );
};

export default SuggestedProducts;
