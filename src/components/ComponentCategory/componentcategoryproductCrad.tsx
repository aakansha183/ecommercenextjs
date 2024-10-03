"use client"
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Rating,
  Pagination,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; 
import {
  containerStyles,
  headerBoxStyles,
  productTitleStyles,
  filterTextBoxStyles,
  sortByTextBoxStyles,
  sortByLabelStyles,
  sortByValueStyles,
  productCardStyles,
  productImageStyles,
  productNameStyles,
  ratingStyles,
  priceBoxStyles,
  priceStyles,
  originalPriceStyles,
  discountTagStyles,
  paginationBoxStyles,
  buttonStyles,
} from '../../Styles/Stylecategory/StyleCategoryPage';
import { Translations } from "@/Utils/Translation/Translation";
import axios from "axios";
import { Product } from "@/Utils/Interfaces/InterfaceProduct";
import { useFilter } from "./FilterContext";
// import { useProductNavigate } from "../../../Routes/Navigation";

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get('/api/products');
              setProducts(response.data);
              console.log(response.data)
          } catch (error) {
              console.error("Error fetching products:", error);
          }
      };
      fetchProducts();
  }, []);
  // const { navigateToProductDetails } = useProductNavigate();
  const { priceRange } = useFilter();

  const filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <Box sx={containerStyles}>
      <Box sx={headerBoxStyles}>
        <Typography variant="h4" sx={productTitleStyles}>
          {Translations.Casual}
        </Typography>
        <Box sx={filterTextBoxStyles}>
          <Typography variant="body1" sx={{ color: "#808080" }}>
            {Translations.MostPopular} {filteredProducts.length} {Translations.Products}
          </Typography>
          <Box sx={sortByTextBoxStyles}>
            <Typography variant="body1" sx={sortByLabelStyles}>
              {Translations.Sortby}
            </Typography>
            <Typography variant="body1" sx={sortByValueStyles}>
              {Translations.MostPopular}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredProducts.map((product) => (
          <Grid size = {{xs:12 ,sm:6, md:4 }} key={product.id}>
            <Box sx={productCardStyles}>
              <Box
                component="img"
                onClick={() => {
                  // navigateToProductDetails(product); 
                }}
                src={product.image}
                alt={product.name}
                sx={productImageStyles}
              />
              <Typography variant="body1" sx={productNameStyles}>
                {product.name}
              </Typography>
              <Rating
                name="read-only"
                value={product.rating}
                precision={0.5}
                readOnly
                sx={ratingStyles}
              />
              <Box sx={priceBoxStyles}>
                <Typography variant="h6" sx={priceStyles}>
                  ${product.price}
                </Typography>
                {product.originalPrice && (
                  <>
                    <Typography variant="body2" sx={originalPriceStyles}>
                      ${product.originalPrice}
                    </Typography>
                    <Typography variant="body2" sx={discountTagStyles}>
                      {product.discount}
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ marginY: 3, width: { xs: '100%', sm: 'auto' } }} />
      <Box sx={paginationBoxStyles}>
        <Button variant="outlined" sx={buttonStyles}>
          {Translations.Previous}
        </Button>
        <Pagination count={10} shape="rounded" />
        <Button variant="outlined" sx={buttonStyles}>
          {Translations.Next}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductGrid;
