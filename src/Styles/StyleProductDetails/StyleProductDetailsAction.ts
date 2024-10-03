import { theme } from "@/Theme/Theme";
import { SxProps } from "@mui/material";

export const productDetailsActionsBoxStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  mt: 3,
  gap: 2,
};

export const addToCartButtonStyle: SxProps = {
  mt: "30px",
  height: "52px",
  width: "400px",
  borderRadius: "62px",
  backgroundColor: theme.colors.selectedColor,
};
