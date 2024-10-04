"use client"
import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";  
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  containerStyles,
  mobileContainerStyles,
  headingStyles,
  mobileHeadingStyles,
  cartBoxStyles,
  mobileCartBoxStyles,
  itemBoxStyles,
  mobileItemBoxStyles,
  imgStyles,
  orderSummaryStyles,
  mobileOrderSummaryStyles,
  buttonStyles,
} from "../../Styles/StyleCart/StyleCartComponent"
import IncrementDecrementBox from "../ComponentProductDetails/ComponentIncrementDecrementBox";
import DeleteIcon from "../../../public/assests/ImagesData/DeleteIcon";
import { showToastInfo } from "@/CommonComponents/Toast";
import { removeItem, updateQuantity } from "@/Redux/cartSlice";
import { Translations } from "@/Utils/Translation/Translation";
import { RootState } from "@/Redux/Store";
import { useRouter } from "next/navigation";

type ItemId = string;

const CartComponent: React.FC = () => {
  const router =  useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleIncrement = (itemId: ItemId) => {
    const existingItem = cartItems.find((item) => item.id === itemId);
    if (existingItem) {
      dispatch(
        updateQuantity({ id: itemId, quantity: existingItem.quantity + 1 })
      );
    }
  };

  const handleDecrement = (itemId: ItemId) => {
    const existingItem = cartItems.find((item) => item.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      dispatch(
        updateQuantity({ id: itemId, quantity: existingItem.quantity - 1 })
      );
    }
  };

  const handleDelete = (itemId: ItemId) => {
    dispatch(removeItem(itemId));
    showToastInfo("Item is removed from cart")
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

 

  return (
    <Box
      sx={isMobile ? mobileContainerStyles : containerStyles}
    >
      <Typography
        sx={isMobile ? mobileHeadingStyles : headingStyles}
      >
       {Translations.YOURCART}
      </Typography>

      {cartItems.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="300px"
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", fontSize: "24px", color: "grey" }}
          >
            {Translations.CartSubHead}
          </Typography>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          padding={isMobile ? "15px" : "15px 170px"}
          sx={isMobile ? mobileCartBoxStyles : cartBoxStyles}
        >
          <Box
            flex={isMobile ? "none" : 1.3}
            sx={isMobile ? mobileItemBoxStyles : itemBoxStyles}
          >
            {cartItems.map((item, index) => (
              <Box key={item.id}>
                <Box
                  display="flex"
                  flexDirection={isMobile ? "column" : "row"}
                  alignItems="center"
                  mb={4}
                  sx={{ padding: "20px 24px" }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    sx={imgStyles}
                  />
                  <Box
                    flex={1}
                    pl={isMobile ? 0 : 2}
                    textAlign={isMobile ? "center" : "left"}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "27px",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="body2">
                      <span style={{ color: "black" }}>{Translations.Colors}:</span>
                      <Typography
                        variant="body2"
                        component="span"
                        style={{ color: "grey" }}
                      >
                        {item.color}
                      </Typography>
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: "5px" }}>
                      <span style={{ color: "black" }}>{Translations.Size}:</span>
                      <Typography
                        variant="body2"
                        component="span"
                        style={{ color: "grey" }}
                      >
                        {item.size}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "700",
                        marginTop: 1,
                        fontSize: "24px",
                        lineHeight: "32.4px",
                      }}
                    >
                      ${item.price}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection={isMobile ? "row" : "column"}
                    alignItems={isMobile ? "center" : "flex-end"}
                    gap={isMobile ? "10px" : "0"}
                  >
                    
                    <Box onClick={() => handleDelete(item.id)}>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                    <IncrementDecrementBox
                      count={item.quantity}
                      onIncrement={() => handleIncrement(item.id)}
                      onDecrement={() => handleDecrement(item.id)}
                    />
                  </Box>
                </Box>
                {index < cartItems.length - 1 && (
                  <Divider sx={{ margin: "0 24px" }} />
                )}
              </Box>
            ))}
          </Box>

          <Box
            flex={isMobile ? "none" : 1}
            sx={isMobile ? mobileOrderSummaryStyles : orderSummaryStyles}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "700",
                fontSize: isMobile ? "20px" : "24px",
                lineHeight: isMobile ? "28px" : "32.4px",
              }}
            >
             {Translations.OrderSummary}
            </Typography>
            <Box mb={2}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={12}>
                  <Grid container justifyContent="space-between">
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "400",
                        fontSize: isMobile ? "16px" : "20px",
                        lineHeight: isMobile ? "22px" : "27px",
                        color: "grey",
                      }}
                    >
                      {Translations.Subtotal}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "700",
                        fontSize: isMobile ? "16px" : "20px",
                        lineHeight: isMobile ? "22px" : "27px",
                      }}
                    >
                      ${subtotal}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid size={12}>
                  <Grid container justifyContent="space-between" mt={1}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "400",
                        fontSize: isMobile ? "16px" : "20px",
                        lineHeight: isMobile ? "22px" : "27px",
                        color: "grey",
                      }}
                    >
                      {Translations.Discount}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#FF3333",
                        fontWeight: "700",
                        fontSize: isMobile ? "16px" : "20px",
                        lineHeight: isMobile ? "22px" : "27px",
                      }}
                    >
                      -${discount.toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid size={12}>
                  <Grid container justifyContent="space-between" mt={1}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "400",
                        fontSize: isMobile ? "16px" : "20px",
                        lineHeight: isMobile ? "22px" : "27px",
                        color: "grey",
                      }}
                    >
                      {Translations.DeliveryFee}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "700",
                        fontSize: isMobile ? "16px" : "20px",
                        lineHeight: isMobile ? "22px" : "27px",
                      }}
                    >
                      ${deliveryFee}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid size={12}>
                  <Grid container justifyContent="space-between" mt={1}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "700",
                        fontSize: isMobile ? "16px" : "24px",
                        lineHeight: isMobile ? "22px" : "32.4px",
                      }}
                    >
                      {Translations.Total}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "700",
                        fontSize: isMobile ? "16px" : "24px",
                        lineHeight: isMobile ? "22px" : "32.4px",
                      }}
                    >
                      ${total.toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={buttonStyles}
              onClick={()=> router.push('/checkout')}
            >
             {Translations.ProceedtoCheckout}
            </Button>
          </Box>
        </Box>
      )}
      <ToastContainer />
    </Box>
  );
};

export default CartComponent;
