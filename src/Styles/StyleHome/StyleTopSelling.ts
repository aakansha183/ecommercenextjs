import { SxProps, Theme } from "@mui/material";

export const containerStyle: SxProps<Theme> = {
  textAlign: "center",
  my: 5,
  px: { xs: 2, md: 10 },
};

export const dividerStyle: SxProps<Theme> = {
  marginBottom: 8,
  marginTop: -3,
  width: "100%",
};

export const cardContainerStyle: SxProps<Theme> = {
  p: 2,
  borderRadius: "8px",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

export const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: "15px",
};

export const ratingBoxStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  mt: 1,
  marginLeft: "10px",
};

export const priceContainerStyle: SxProps<Theme> = {
  mt: 1,
  textAlign: "left",
  marginLeft: "10px",
};

export const discountStyle: SxProps<Theme> = {
  color: "#FF3333",
  fontWeight: "bold",
  backgroundColor: "#FFE9F0",
  padding: { xs: "4px 10px", md: "6px 14px" },
  marginLeft: 17,
  marginTop: -4,
  width: "fit-content",
  borderRadius: "62px",
  textAlign: "center",
};

export const buttonStyle: SxProps<Theme> = {
  mt: 2,
  width: { xs: "150px", md: "218px" },
  height: { xs: "40px", md: "52px" },
  borderRadius: "62px",
  textTransform: "none",
  padding: { xs: "8px 20px", md: "16px 54px" },
  fontWeight: "bold",
  borderColor: "#D3D3D3",
  color: "black",
};

export const typographyStyles = {
  title: {
    fontWeight: "700",
    fontSize: { xs: "28px", md: "48px" },
    lineHeight: { xs: "35px", md: "57.6px" },
    fontFamily: "Poppins",
    marginBottom: "20px",
  },
  productTitle: {
    fontWeight: 700,
    mt: 2,
    textAlign: "left",
    marginLeft: "10px",
    fontSize: { xs: "16px", md: "20px" },
    lineHeight: { xs: "22px", md: "27px" },
  },
  ratingText: {
    marginLeft: "10px",
    fontWeight: "400",
    fontSize: { xs: "12px", md: "14px" },
    lineHeight: "18.9px",
  },
  price: {
    fontWeight: "700",
    fontSize: { xs: "18px", md: "24px" },
    lineHeight: { xs: "24px", md: "32.4px" },
  },
  originalPrice: {
    textDecoration: "line-through",
    ml: 1,
    color: "#D3D3D3",
    fontWeight: "700",
    fontSize: { xs: "16px", md: "24px" },
    lineHeight: { xs: "22px", md: "32.4px" },
  },
  buttonText: {
    fontWeight: "500",
    fontSize: { xs: "14px", md: "16px" },
    lineHeight: { xs: "18px", md: "21.6px" },
  },
};
