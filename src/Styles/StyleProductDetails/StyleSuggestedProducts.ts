import { theme } from '@/Theme/Theme';
import { SxProps, Theme } from '@mui/material/styles';

export const suggestedProductsContainer: SxProps<Theme> = {
  textAlign: 'center',
  mt: 4,
  padding: { xs: '20px', sm: '40px 20px', md: '40px 100px' },
  marginRight: { xs: 0, md: 8 },
};

export const titleStyles: SxProps<Theme> = {
  fontWeight: '700',
  fontSize: { xs: '24px', sm: '36px', md: '48px' },
  lineHeight: { xs: '30px', sm: '40px', md: '57.6px' },
  fontFamily: 'Poppins',
  marginBottom: '20px',
};

export const productCardStyles: SxProps<Theme> = {
  p: 2,
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

export const productImageStyles: SxProps<Theme> = {
  width: '100%',
  height: 'auto',
  borderRadius: 4,
};

export const productNameStyles: SxProps<Theme> = {
  mt: 2,
  textAlign: 'left',
  marginLeft: '10px',
  fontSize: { xs: '16px', sm: '18px', md: '20px' },
  lineHeight: { xs: '24px', sm: '26px', md: '27px' },
  fontWeight: '700',
};

export const priceStyles: SxProps<Theme> = {
  fontWeight: '700',
  fontSize: { xs: '18px', sm: '20px', md: '24px' },
  lineHeight: { xs: '24px', sm: '30px', md: '32.4px' },
};

export const originalPriceStyles: SxProps<Theme> = {
  textDecoration: 'line-through',
  ml: 1,
  color: theme.colors.lightgrey,
  fontWeight: '700',
  fontSize: { xs: '18px', sm: '20px', md: '24px' },
  lineHeight: { xs: '24px', sm: '30px', md: '32.4px' },
};

export const discountStyles: SxProps<Theme> = {
  color: "#FF3333",
  fontWeight: "bold",
  backgroundColor: "#FFE9F0",
  padding: { xs: "4px 10px", md: "6px 14px" },
  marginLeft: 17,
  marginTop: -4,
  width: "fit-content",
  borderRadius: "62px",
  textAlign: "center",
};

export const ratingStyles: SxProps<Theme> = {
  marginLeft: '10px',
  fontWeight: '400',
  fontSize: { xs: '12px', sm: '14px', md: '14px' },
  lineHeight: { xs: '16px', sm: '18px', md: '18.9px' },
};

export const viewAllButtonStyles: SxProps<Theme> = {
  mt: 2,
  width: '218px',
  height: '52px',
  borderRadius: '62px',
  textTransform: 'none',
  padding: '16px 54px',
  fontWeight: 'bold',
  borderColor: theme.colors.grey,
  color: theme.colors.selectedColor,
  marginBottom: '100px',
};

export const viewAllTranslationstyles: SxProps<Theme> = {
  fontWeight: '500',
  fontSize: { xs: '14px', sm: '16px', md: '16px' },
  lineHeight: { xs: '18px', sm: '21.6px', md: '21.6px' },
};
