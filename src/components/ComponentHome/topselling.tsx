"use client"
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {
    containerStyle,
    dividerStyle,
    cardContainerStyle,
    imageStyle,
    ratingBoxStyle,
    priceContainerStyle,
    discountStyle,
    buttonStyle,
    typographyStyles,
} from "../../Styles/StyleHome/StyleTopSelling";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import { Translations } from "@/Utils/Translation/Translation";
import { Product } from "@/Utils/Interfaces/InterfaceProduct";
import { useRouter } from "next/navigation";


const TopSelling: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const router =  useRouter()
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data.slice(-4));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const renderStars = (rating: number) => {
        return (
            <>
                {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    if (rating >= ratingValue)
                        return <StarIcon key={index} style={{ color: "#ffcc00" }} />;
                    if (rating >= ratingValue - 0.5)
                        return <StarHalfIcon key={index} style={{ color: "#ffcc00" }} />;
                    return <StarOutlineIcon key={index} style={{ color: "#ffcc00" }} />;
                })}
            </>
        );
    };

    return (
        <Box sx={containerStyle}>
            <Divider sx={dividerStyle} />
            <Typography variant="h4" sx={typographyStyles.title}>
                {Translations.TOPSELLING}
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {products.map((product) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                        <Box sx={cardContainerStyle}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={imageStyle}
                            // onClick={() => }
                            />
                            <Typography variant="subtitle1" sx={typographyStyles.productTitle}>
                                {product.name}
                            </Typography>
                            <Box sx={ratingBoxStyle}>
                                {renderStars(product.rating)}
                                <Typography variant="body2" sx={typographyStyles.ratingText}>
                                    {product.rating}/5
                                </Typography>
                            </Box>
                            <Box sx={priceContainerStyle}>
                                <Typography variant="h6" sx={typographyStyles.price}>
                                    ${product.price}
                                    {product.originalPrice && (
                                        <Typography component="span" sx={typographyStyles.originalPrice}>
                                            ${product.originalPrice}
                                        </Typography>
                                    )}
                                </Typography>
                                {product.discount && (
                                    <Typography variant="body2" sx={discountStyle}>
                                        {product.discount}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Button variant="outlined" sx={buttonStyle} onClick={()=> router.push('/category')}>
                <Typography sx={typographyStyles.buttonText}>{Translations.ViewAll}</Typography>
            </Button>
        </Box>
    );
};

export default TopSelling;
