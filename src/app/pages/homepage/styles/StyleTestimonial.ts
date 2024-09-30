import { SxProps, Theme } from "@mui/material";

export const testimonialsContainer: SxProps<Theme> = {
  maxWidth: "100%",
  margin: "0 auto",
  overflow: "hidden",
  marginBottom: "120px",
  padding: { xs: "0 20px", md: "0 40px" },
};

export const headerContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 2,
  padding: { xs: "0 10px", md: "0 40px" },
};

export const headerText: SxProps<Theme> = {
  fontWeight: "700",
  fontSize: { xs: "24px", sm: "36px", md: "48px" },
  lineHeight: { xs: "32px", sm: "42px", md: "57.6px" },
  fontFamily: "Poppins",
  marginBottom: { xs: "20px", md: "40px" },
};

export const iconButtonContainer: SxProps<Theme> = {
  display: "flex",
  marginRight: { xs: "0px", sm: "10px", md: "30px" },
  height: { xs: "25px", sm: "30px" },
};

export const iconButton: SxProps<Theme> = {
  padding: { xs: "5px", sm: "10px" },
  "& svg": {
    fontSize: { xs: "16px", sm: "24px" },
  },
};

export const testimonialsScrollContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  gap: 3,
  overflowX: "hidden",
  scrollSnapType: "x mandatory",
};

export const testimonialCard: SxProps<Theme> = {
  width: { xs: "90%", sm: "70%", md: "500px" },
  height: { xs: "auto", md: "240px" },
  minHeight: "240px",
  flexShrink: 0,
  borderRadius: "20px",
  transition: "all 0.3s ease",
  border: "solid 1px #dee2e6",
  boxShadow: 0,
  scrollSnapAlign: "start",
};

export const cardContent: SxProps<Theme> = {
  height: "100%",
};

export const starsSection: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  marginBottom: 2,
};

export const testimonialName: SxProps<Theme> = {
  fontWeight: "bold",
  marginBottom: 1,
  fontSize: { xs: "16px", md: "20px" },
};

export const testimonialText: SxProps<Theme> = {
  fontSize: { xs: "14px", md: "16px" },
};
