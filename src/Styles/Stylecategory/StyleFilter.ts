import { theme } from "@/Theme/Theme";
import { SxProps, Theme } from "@mui/material";

const styles: {
  container: SxProps<Theme>,
  colorOption: SxProps<Theme>,
  selectedColorText: SxProps<Theme>,
  sizeChip: SxProps<Theme>,
  dressStyleOption: SxProps<Theme>,
  accordionSummary: SxProps<Theme>,
  accordionHeading: SxProps<Theme>,
  slider: SxProps<Theme>,
  button: SxProps<Theme>,
} = {
  container: {
    width: { xs: "100%", sm: "80%", md: "70%", lg: "80%" },
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: 4,
    bgcolor: theme.colors.white,
    position: "relative",
    overflow: "auto",
    maxWidth: "120%",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
    marginLeft: { xs: 0, sm: "20px", md: "40px" },
  },
  colorOption: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "2px",
    cursor: "pointer",
  },
  selectedColorText: {
    fontSize: "10px",
    color: theme.colors.white,
    fontWeight: "bold",
  },
  sizeChip: {
    margin: "3px",
    borderRadius: "20px",
    borderColor: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'black' : 'transparent'),
    color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
    fontWeight: (theme) => (theme.palette.mode === 'dark' ? 'bold' : 'normal'),
    padding: "4px 8px",
  },
  dressStyleOption: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4px 0",
  },
  accordionSummary: {
    padding: 0,
  },
  accordionHeading: {
    fontWeight: "700",
    fontSize: "16px",
    color: theme.colors.selectedColor,
  },
  slider: {
    color: theme.colors.selectedColor,
  },
  button: {
    backgroundColor: theme.colors.selectedColor,
    borderRadius: '62px',
    width: '300px',
    height: '50px',
  },
};

export default styles;
