import { SxProps, Theme } from '@mui/material';

export const footerContainer: SxProps<Theme> = {
  backgroundColor: '#f8f8f8',
  padding: { xs: '0px 0', md: '40px 0' },
  borderTop: '1px solid #e0e0e0',
  width: '100%',
};

export const newsletterSection: SxProps<Theme> = {
  backgroundColor: '#000',
  color: '#fff',
  padding: { xs: '20px', md: '36px 64px' },
  borderRadius: '20px',
  width: '80%',
  margin: '0 auto',
  marginTop: { xs: '-50px', md: '-130px' },
  textAlign: 'center',
  overflowX: 'hidden',
};

export const textFieldStyle: SxProps<Theme> = {
  bgcolor: '#fff',
  borderRadius: '30px',
  marginBottom: 2,
  width: { xs: '100%', md: 340 },
  height: 50,
};

export const buttonStyle: SxProps<Theme> = {
  borderRadius: '30px',
  bgcolor: '#fff',
  color: '#000',
  padding: '10px 30px',
  fontWeight: 'bold',
  width: { xs: '100%', md: 340 },
  height: 50,
};

export const footerContentContainer: SxProps<Theme> = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: { xs: '20px 16px', md: '40px 0' },
};

export const dividerStyle: SxProps<Theme> = {
  marginBottom: '20px',
  width: { xs: '90%', md: '82.5%' },
  margin: '0 auto',
};

export const copyrightText: SxProps<Theme> = {
  textAlign: 'left',
  marginBottom: '20px',
  marginTop: '50px',
  marginLeft: { xs: '16px', md: '160px' },
};

export const paymentIconsContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: { xs: 'center', md: 'flex-end' },
  gap: 2,
  paddingRight: { xs: '0', md: '140px' },
};
