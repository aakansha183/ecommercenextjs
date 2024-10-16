"use client"
import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import axios from "axios";
import {
    newArrivalBox,
    NewArrivalImage,
    newArrivalImageBox,
    newArrivalText,
    productPrice,
    productName,
    productRatingBox,
    productRatingText,
    viewAllButton,
    viewAllText,
} from "../../Styles/StyleHome/stylenewarrivals"
import Grid from "@mui/material/Grid2";
import { Translations } from "@/Utils/Translation/Translation";
import { discountStyle, typographyStyles } from "../../Styles/StyleHome/StyleTopSelling";
import { Product } from "@/Utils/Interfaces/InterfaceProduct";
import { useRouter } from "next/navigation";
import { Player } from "@lottiefiles/react-lottie-player";
import loader from "../../../public/assests/ImagesData/Loading.json"


const NewArrivals: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products/productsinfo');
                setProducts(response.data.slice(0, 4))
            } catch (error) {
                console.error("Error fetching products:", error);
            }
            finally {
                setLoading(false)
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

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Player
                    src={loader}
                    loop
                    autoplay
                />
            </Box>
        );
    }

    return (
        <Box id="newarrivals" sx={newArrivalBox}>
            <Typography variant="h4" sx={newArrivalText}>
                {Translations.NEW_ARRIVALS}
            </Typography>
            <Grid container spacing={4} justifyContent="center" wrap="wrap">
                {products.map((product) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>

                        <Box sx={NewArrivalImage}>
                            <Box
                                component="img"
                                onClick={() => {
                                    router.push(`/productdetails?id=${product.id}`)
                                }}

                                src={product.image}
                                alt={product.name}
                                sx={newArrivalImageBox}
                            />
                            <Typography variant="subtitle1" fontWeight="700" sx={productName}>
                                {product.name}
                            </Typography>
                            <Box sx={productRatingBox}>
                                {renderStars(product.rating)}
                                <Typography variant="body2" sx={productRatingText}>
                                    {product.rating}/5
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 1, textAlign: "left", marginLeft: "10px" }}>
                                <Typography variant="h6" sx={productPrice}>
                                    ${product.price}
                                    {product.originalPrice && (
                                        <Typography component="span" sx={typographyStyles.originalPrice}>
                                            ${product.originalPrice}
                                        </Typography>
                                    )}
                                </Typography>
                                {product.discount && (
                                    <Typography sx={discountStyle}>{product.discount}</Typography>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Button
                variant="outlined"
                sx={viewAllButton}
                onClick={() => router.push("/category")}
            >
                <Typography sx={viewAllText}>{Translations.ViewAll}</Typography>
            </Button>
        </Box>

    );
};
export default NewArrivals;
