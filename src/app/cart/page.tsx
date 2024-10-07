"use client"
import { Box, Divider } from "@mui/material";
import React from "react";
import TopHeader from "../../CommonComponents/TopHeader";
import Header from "../../CommonComponents/Header";
import Footer from "../../CommonComponents/Footer";
import {
  containerStyles,
  headerBoxStyles,
  dividerStyles,
  cartBoxStyles,
  footerBoxStyles,
} from "../../Styles/StyleCart/StyleCartPage";
import CartComponent from "@/components/ComponentCart/CartComponent";

const CartPage: React.FC = () => {

  return (
    <Box sx={containerStyles}>
      <TopHeader />
      <Box sx={headerBoxStyles}>
        <Header />
      </Box>
      <Divider sx={dividerStyles} />
      <Box sx={cartBoxStyles}>
        <CartComponent />
      </Box>
      <Box sx={footerBoxStyles}>
        <Footer />
      </Box>
    </Box>
  );
};

export default CartPage;
