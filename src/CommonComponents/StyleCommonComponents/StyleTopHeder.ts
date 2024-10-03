import { SxProps, Theme } from '@mui/material';

export const topHeaderContainer: SxProps<Theme> = {
  backgroundColor: "#000000",
  height: "38px",
  width: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  zIndex: 9999
};

export const containerStyle: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#ffffff",
  px: { xs: 2, sm: 3, md: 4 },
  textAlign: 'center'
};

export const typographyStyle: SxProps<Theme> = {
  fontSize: { xs: "12px", sm: "14px", md: "16px" },
  fontFamily: "sans-serif",
  textAlign: "center",
};

export const iconButtonStyle: SxProps<Theme> = {
  position: "absolute",
  right: { xs: "8px", sm: "16px" },
  top: { xs: "4px", sm: "8px" },
  color: "#ffffff",
  width: { xs: "24px", sm: "28px", md: "32px" }, 
  height: { xs: "24px", sm: "28px", md: "32px" }, 
  padding: 0, 
};

export const closeIconStyle: SxProps<Theme> = {
  fontSize: { xs: "16px", sm: "20px", md: "24px" }, 
};
