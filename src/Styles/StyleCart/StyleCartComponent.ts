import { SxProps, Theme } from "@mui/material/styles";

export const containerStyles: SxProps<Theme> = {
  marginLeft: "20px",
  padding: "0",
};

export const mobileContainerStyles: SxProps<Theme> = {
  marginLeft: "5px",
  padding: "0 10px",
};

export const headingStyles: SxProps<Theme> = {
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "40px",
  lineHeight: "48px",
  marginLeft: "170px",
  marginTop: "80px",
  textAlign: "left",
};

export const mobileHeadingStyles: SxProps<Theme> = {
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "32px",
  marginLeft: "0",
  marginTop: "40px",
  textAlign: "center",
};

export const cartBoxStyles: SxProps<Theme> = {
  backgroundColor: "#ffffff",
  marginBottom: -15,
};

export const mobileCartBoxStyles: SxProps<Theme> = {
  backgroundColor: "#ffffff",
  marginBottom: -15,
  padding: "15px",
};

export const itemBoxStyles: SxProps<Theme> = {
  border: "1px solid #e0e0e0",
  marginRight: "20px",
  borderRadius: "20px",
  width: "auto",
};

export const mobileItemBoxStyles: SxProps<Theme> = {
  border: "1px solid #e0e0e0",
  borderRadius: "20px",
  width: "100%",
};

export const imgStyles: SxProps<Theme> = {
  borderRadius: "10px",
};

export const orderSummaryStyles: SxProps<Theme> = {
  border: "1px solid #e0e0e0",
  borderRadius: "20px",
  padding: "20px 24px",
};

export const mobileOrderSummaryStyles: SxProps<Theme> = {
  border: "1px solid #e0e0e0",
  borderRadius: "20px",
  padding: "20px",
  marginTop: "20px",
};

export const buttonStyles: SxProps<Theme> = {
  marginTop: "20px",
  padding: "12px 0",
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "16px",
  backgroundColor:'#000000',
  borderRadius:'20px',
  
};

export const typographyStyles: SxProps<Theme> = {
  fontFamily: "Poppins",
  fontWeight: "500",
  fontSize: "16px",
  color: "#333333",
};

export const typographyPriceStyles: SxProps<Theme> = {
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "16px",
  color: "#333333",
};

export const typographySummaryStyles: SxProps<Theme> = {
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "20px",
  marginBottom: "20px",
};
