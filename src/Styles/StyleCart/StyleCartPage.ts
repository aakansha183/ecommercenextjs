import { SxProps, Theme } from "@mui/material";

export const containerStyles: SxProps<Theme> = {
  width: "100%",
  overflowX: "hidden",
};

export const headerBoxStyles: SxProps<Theme> = (theme) => ({
  mt: theme.breakpoints.down("sm") ? 2 : 0,
});

export const dividerStyles: SxProps<Theme> = (theme) => ({
  mt: 2,
  width: theme.breakpoints.down("sm") ? '90%' : '81%',
  mx: theme.breakpoints.down("sm") ? 'auto' : '168px',
});

export const cartBoxStyles: SxProps<Theme> = (theme) => ({
  marginBottom: '250px',
  mt: theme.breakpoints.down("sm") ? 3 : 0,
  px: theme.breakpoints.down("sm") ? 2 : 0,
});

export const footerBoxStyles: SxProps<Theme> = (theme) => ({
  mt: theme.breakpoints.down("sm") ? 4 : 0,
});
