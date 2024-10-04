import { theme } from "@/Theme/Theme";
import { SxProps, Theme } from "@mui/material";

const styles: {
  divider: SxProps<Theme>,
  container: SxProps<Theme>,
  headingBox: SxProps<Theme>,
  headingText: SxProps<Theme>,
  messageText: SxProps<Theme>,
  button: SxProps<Theme>,
  footerBox: SxProps<Theme>,
} = {
  divider: {
    mt: "20px",
    width: { xs: "90%", md: "86%" },
    marginLeft: { xs: "5%", md: "120px" },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  headingBox: {
    position: "relative",
    marginTop: { xs: "40px", md: "90px" },
    marginBottom: "30px",
  },
  headingText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: { xs: "24px", md: "34px" },
    lineHeight: "22px",
    textAlign: "center",
    zIndex: 1,
  },
  messageText: {
    color: theme.colors.selectedColor,
    fontFamily: "Poppins",
    fontSize: { xs: "20px", md: "30px" },
    fontWeight: "500",
  },
  button: {
    backgroundColor: theme.colors.selectedColor,
    color: theme.colors.white,
    padding: "16px 54px",
    width: { xs: "80%", md: "310px" },
    height: "52px",
    borderRadius: "62px",
    marginTop: "-41px",
  },
  footerBox: {
    marginTop: "120px",
  },
};

export default styles;
