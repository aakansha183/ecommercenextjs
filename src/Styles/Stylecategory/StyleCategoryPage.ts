import { theme } from '@/Theme/Theme';
import { SxProps, Theme } from '@mui/material/styles';
import { CSSProperties } from 'react';

export const containerStyles: SxProps<Theme> = {
  padding: 2,
  marginX: { xs: 1, sm: 2, md: 3 },
  overflowX: 'hidden',
};

export const headerBoxStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 2,
};

export const productTitleStyles: SxProps<Theme> = {
  fontWeight: 'bold',
  marginBottom: { xs: 2, sm: 1 },
};

export const filterTextBoxStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: 'center',
  marginBottom: { xs: 2, sm: 1 },
};

export const sortByTextBoxStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  ml: { xs: 0, sm: 2 },
};

export const sortByLabelStyles: SxProps<Theme> = {
  color: theme.colors.darkestgrey,
  display: 'inline',
};

export const sortByValueStyles: SxProps<Theme> = {
  color: theme.colors.selectedColor,
  display: 'inline',
  ml: 1,
};

export const productCardStyles: SxProps<Theme> = {
  marginTop: '30px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

export const productImageStyles: CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: '20px',
  marginBottom: 2,
  objectFit: 'cover',
};

export const productNameStyles: SxProps<Theme> = {
  fontWeight: '700',
  fontSize: { xs: '16px', sm: '18px', md: '20px' },
  lineHeight: '27px',
};

export const ratingStyles: SxProps<Theme> = {
  fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
  marginBottom: 1,
  color:theme.colors.yellow,
  marginTop: 1,
};

export const priceBoxStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 1,
};

export const priceStyles: SxProps<Theme> = {
  fontWeight: '700',
  fontSize: { xs: '18px', sm: '20px', md: '24px' },
  lineHeight: '32.4px',
};

export const originalPriceStyles: SxProps<Theme> = {
  textDecoration: 'line-through',
  marginLeft: 1,
  color: '#D3D3D3',
  fontWeight: '700',
  fontSize: { xs: '14px', sm: '16px', md: '20px' },
  lineHeight: '32.4px',
};

export const discountTagStyles: SxProps<Theme> = {
  backgroundColor: theme.colors.lightred,
  color: theme.colors.red,
  borderRadius: '62px',
  padding: '6px 14px',
  marginLeft: 0.5,
};

export const paginationBoxStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mt: 2,
};

export const buttonStyles: SxProps<Theme> = {
  color: theme.colors.selectedColor,
  borderColor: theme.colors.selectedColor,
  fontSize: 'bold',
};

