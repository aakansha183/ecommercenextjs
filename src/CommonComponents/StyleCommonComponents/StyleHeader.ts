import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const headerContainer: SxProps<Theme> = {
  overflow: 'hidden',
  padding: { xs: '0px 10px', sm: '0px 20px', md: '0px 40px', lg: '0px 150px' }
};

export const appBar: SxProps<Theme> = {
  marginTop: 2
};

export const logoText: SxProps<Theme> = {
  flexGrow: 1,
  color: '#000000',
  fontSize: { xs: '24px', md: '32px' },
  fontWeight: 'bold',
  fontFamily: 'Poppins',
  marginLeft: { xs: '10px', md: '20px' },
  marginRight: { xs: '0', md: '20px' }
};

export const navLinks: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  fontSize: '16px',
  color: '#000000',
  marginLeft: { xs: '10px', md: '20px' }
};

export const searchContainer: SxProps<Theme> = {
  position: 'absolute',
  top: 64,
  left: 0,
  right: 0
};

export const drawerStyles: SxProps<Theme> = {
  width: 250,
  padding: 2
};

export const drawerTitle: SxProps<Theme> = {
  flexGrow: 1,
  color: '#000000',
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: 'Poppins',
  marginBottom: 2
};
