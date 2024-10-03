import { theme } from "@/Theme/Theme";
import { SxProps } from "@mui/material";

export const loginStyles: Record<string, SxProps> = {
  container: {
    marginTop: { xs: "40px", sm: "80px" },
  },
  paper: {
    boxShadow: 0,
    padding: { xs: "32px", sm: "64px" },
    border: "2px solid #f0f0f0",
    borderRadius: "22px",
    backgroundColor: theme.colors.white,
    marginBottom: { xs: "20px", sm: "50px" },
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    color: theme.colors.selectedColor,
    fontSize: { xs: "32px", sm: "40px" },
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  button: {
    backgroundColor: "#000000",
    borderRadius: "40px",
    height: "50px",
    width: { xs: "100%", sm: "350px" },
    marginLeft: { xs: "0", sm: "auto", md: "30px" },
    marginRight: { xs: "0", sm: "auto" },
  },
  errorText: {
    marginTop: "1rem",
    textAlign: "center",
  },
  gridContainer: {
    marginTop: "1rem",
  },
  custominputprops:{
    borderRadius:'28px'
  }
};
