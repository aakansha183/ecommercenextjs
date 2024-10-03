import { SxProps, Theme } from "@mui/material";

const styles: {
  container: SxProps<Theme>,
  divider: SxProps<Theme>,
  filterWrapper: SxProps<Theme>,
} = {
  container: {
    overflowX: 'hidden',
  },
  divider: {
    mt: 2,
    width: { xs: '100%', md: '81%' },
    marginX: 'auto',
  },
  filterWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    padding: { xs: 1, md: 2 },
    mt: 4,
    mb: 18,
    maxWidth: '100%',
  },
};

export default styles;
