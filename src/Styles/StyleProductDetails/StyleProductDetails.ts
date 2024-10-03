import { theme } from '@/Theme/Theme';
import { SxProps, Theme } from '@mui/material/styles';

export const containerStyles: SxProps<Theme> = {
  overflowX: 'hidden',
};

export const dividerStyles: SxProps<Theme> = {
  mt: 2,
  width: { xs: '100%', md: '81%' },
  marginLeft: { xs: 0, md: '170px' },
};

export const thumbnailsContainerStyles: SxProps<Theme> = {
  display: 'flex',
  gap: 3,
  flexDirection: { xs: 'column', md: 'row' },
};

export const imageBoxStyles: SxProps<Theme> = {
  flex: 1,
};

export const productImageStyles: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  objectFit: 'contain',
};

export const descriptionTranslationstyles: SxProps<Theme> = {
  mt: 2,
  fontSize: { xs: '14px', sm: '16px' },
  lineHeight: '22px',
  fontWeight: '400',
  color: theme.colors.darkgrey,
};

export const actionsBoxStyles: SxProps<Theme> = {
  mt: '40px',
};

export const footerBoxStyles: SxProps<Theme> = {
  marginTop: '120px',
};
