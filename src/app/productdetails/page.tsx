"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Provider, useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid2";
import {
  containerStyles,
  dividerStyles,
  thumbnailsContainerStyles,
  imageBoxStyles,
  productImageStyles,
  descriptionTranslationstyles,
  actionsBoxStyles,
  footerBoxStyles,
} from "../../Styles/StyleProductDetails/StyleProductDetails";
import { Product } from "../../Utils/Interfaces/InterfaceProductDetailsActions";
import { Box, Divider } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { addToCart } from "@/Redux/cartSlice";
import { Translations } from "@/Utils/Translation/Translation";
import { showToastError, showToastSuccess } from "@/CommonComponents/Toast";
import { theme } from "@/Theme/Theme";
import SuggestedProducts from "@/components/ComponentProductDetails/ComponentProductCard";
import ProductTabs from "@/components/ComponentProductDetails/ComponentProductTabs";
import ProductInfo from "@/components/ComponentProductDetails/ComponentProductInfo";
import ProductDetailsActions from "@/components/ComponentProductDetails/ComponentDetailedAction";
import ProductImage from "@/components/ComponentProductDetails/ComponentImage";
import ProductThumbnails from "@/components/ComponentProductDetails/ComponentThumbnail";
import MyButtons from "@/components/ComponentProductDetails/ComponentButton";
import { RootState } from "../../Redux/Store";
import TopHeader from "@/CommonComponents/TopHeader";
import Header from "@/CommonComponents/Header";
import Footer from "@/CommonComponents/Footer";

const ProductDetail: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Use searchParams to get the product info from the query
  const productParam = searchParams.get("product");

  // Parse productParam as JSON (assuming it's passed as a JSON string)
  const product: Product = productParam ? JSON.parse(productParam): null;

  useEffect(() => {
    if (!product) {
      router.push("/404"); // Redirect if no product is found
    }
  }, [product, router]);

  const handleThumbnailClick = (index: number) => {
    setSelectedThumbnail(index);
  };

  const updateQuantity = (action: "increment" | "decrement") => {
    setQuantity((prevQuantity) =>
      action === "increment" ? prevQuantity + 1 : Math.max(prevQuantity - 1, 1)
    );
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      showToastError("Select a Size");
      return;
    } else {
      const selectedColor = theme.colors.selectedColor;

      const isItemInCart = cartItems.find(
        (item) => item.id === product.id && item.size === selectedSize
      );

      if (isItemInCart) {
        showToastError("Item is already in the cart");
      } else {
        dispatch(
          addToCart({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity,
            color: selectedColor,
            size: selectedSize,
          })
        );

        showToastSuccess("Item added to Cart Successfully");
      }
    }
  };

  return (
    <Box sx={containerStyles}>
      <TopHeader />
      <Header />
      <Divider sx={dividerStyles} />
      <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={thumbnailsContainerStyles}>
              <ProductThumbnails
                thumbnails={[product.image, product.image, product.image]}
                selectedThumbnail={selectedThumbnail}
                handleThumbnailClick={handleThumbnailClick}
              />
              <Box sx={imageBoxStyles}>
                <ProductImage
                  src={product.image}
                  alt="Product"
                  style={productImageStyles}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ProductInfo
              name={product.name}
              rating={product.rating}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
            <Typography variant="body1" sx={descriptionTranslationstyles}>
              {Translations.ProductDes}
            </Typography>

            <Divider sx={{ mt: 3 }} />
            <Box sx={actionsBoxStyles}>
              <MyButtons onSelectSize={setSelectedSize} />
            </Box>
            <Divider sx={{ mt: 3 }} />
            <ProductDetailsActions
              productId={product.id}
              quantity={quantity}
              onIncrement={() => updateQuantity("increment")}
              onDecrement={() => updateQuantity("decrement")}
              selectedSize={selectedSize}
              handleaddToCart={handleAddToCart}
            />
          </Grid>
        </Grid>
        <ProductTabs />
      </Container>
      <SuggestedProducts />
      <Box sx={footerBoxStyles}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProductDetail;
// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import Grid from "@mui/material/Grid2";
// import {
//   containerStyles,
//   dividerStyles,
//   thumbnailsContainerStyles,
//   imageBoxStyles,
//   productImageStyles,
//   descriptionTranslationstyles,
//   actionsBoxStyles,
//   footerBoxStyles,
// } from "../../Styles/StyleProductDetails/StyleProductDetails";
// import { Product } from "../../Utils/Interfaces/InterfaceProductDetailsActions";
// import { Box, Divider } from "@mui/material";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import { addToCart } from "@/Redux/cartSlice";
// import { Translations } from "@/Utils/Translation/Translation";
// import { showToastError, showToastSuccess } from "@/CommonComponents/Toast";
// import { theme } from "@/Theme/Theme";
// import SuggestedProducts from "@/components/ComponentProductDetails/ComponentProductCard";
// import ProductTabs from "@/components/ComponentProductDetails/ComponentProductTabs";
// import ProductInfo from "@/components/ComponentProductDetails/ComponentProductInfo";
// import ProductDetailsActions from "@/components/ComponentProductDetails/ComponentDetailedAction";
// import ProductImage from "@/components/ComponentProductDetails/ComponentImage";
// import ProductThumbnails from "@/components/ComponentProductDetails/ComponentThumbnail";
// import MyButtons from "@/components/ComponentProductDetails/ComponentButton";
// import { RootState } from "../../Redux/Store";

// const ProductDetail: React.FC = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [selectedThumbnail, setSelectedThumbnail] = useState<number | null>(null);
//   const [quantity, setQuantity] = useState<number>(1);

//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: RootState) => state.cart.items);

//   // Use searchParams to get the product info from the query
//   const productParam = searchParams.get("product");

//   // Parse productParam as JSON (assuming it's passed as a JSON string)
//   const product: Product | null = productParam ? JSON.parse(productParam) : null;

//   useEffect(() => {
//     if (!product) {
//       router.push("/404"); // Redirect if no product is found
//     }
//   }, [product, router]);

//   const handleThumbnailClick = (index: number) => {
//     setSelectedThumbnail(index);
//   };

//   const updateQuantity = (action: "increment" | "decrement") => {
//     setQuantity((prevQuantity) =>
//       action === "increment" ? prevQuantity + 1 : Math.max(prevQuantity - 1, 1)
//     );
//   };

//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       showToastError("Select a Size");
//       return;
//     } else {
//       const selectedColor = theme.colors.selectedColor;

//       const isItemInCart = cartItems.find(
//         (item) => item.id === product?.id && item.size === selectedSize
//       );

//       if (isItemInCart) {
//         showToastError("Item is already in the cart");
//       } else {
//         dispatch(
//           addToCart({
//             id: product?.id,
//             name: product?.name,
//             image: product?.image,
//             price: product?.price,
//             quantity,
//             color: selectedColor,
//             size: selectedSize,
//           })
//         );

//         showToastSuccess("Item added to Cart Successfully");
//       }
//     }
//   };

//   // Check if product is loaded before rendering
//   if (!product) {
//     return <Typography variant="h6">Loading product details...</Typography>;
//   }

//   return (
//     <Box sx={containerStyles}>
//       <Divider sx={dividerStyles} />
//       <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
//         <Grid container spacing={4}>
//           <Grid size={{ xs: 12, md: 6 }}>
//             <Box sx={thumbnailsContainerStyles}>
//               <ProductThumbnails
//                 thumbnails={[product.image, product.image, product.image]}
//                 selectedThumbnail={selectedThumbnail}
//                 handleThumbnailClick={handleThumbnailClick}
//               />
//               <Box sx={imageBoxStyles}>
//                 <ProductImage
//                   src={product.image}
//                   alt="Product"
//                   style={productImageStyles}
//                 />
//               </Box>
//             </Box>
//           </Grid>

//           <Grid size={{ xs: 12, md: 6 }}>
//             <ProductInfo
//               name={product.name}
//               rating={product.rating}
//               price={product.price}
//               originalPrice={product.originalPrice}
//               discount={product.discount}
//             />
//             <Typography variant="body1" sx={descriptionTranslationstyles}>
//               {Translations.ProductDes}
//             </Typography>

//             <Divider sx={{ mt: 3 }} />
//             <Box sx={actionsBoxStyles}>
//               <MyButtons onSelectSize={setSelectedSize} />
//             </Box>
//             <Divider sx={{ mt: 3 }} />
//             <ProductDetailsActions
//               productId={product.id}
//               quantity={quantity}
//               onIncrement={() => updateQuantity("increment")}
//               onDecrement={() => updateQuantity("decrement")}
//               selectedSize={selectedSize}
//               handleaddToCart={handleAddToCart}
//             />
//           </Grid>
//         </Grid>
//         <ProductTabs />
//       </Container>
//       <SuggestedProducts />
//       <Box sx={footerBoxStyles}>
//         {/* <Footer /> */}
//       </Box>
//     </Box>
//   );
// };

// export default ProductDetail;