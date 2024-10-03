import { theme } from '@/Theme/Theme';
import { SxProps, Theme } from '@mui/material/styles';

export const reviewCardStyles: SxProps<Theme> = {
  marginBottom: 2,
  borderRadius: '20px',
  padding: '20px',
};

export const reviewCardContentStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
};

export const ratingStyles: SxProps<Theme> = {
  color: theme.colors.yellow,
};

export const nameBoxStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 1,
};

export const nameTranslationstyles: SxProps<Theme> = {
  marginRight: 1,
};

export const reviewTranslationstyles: SxProps<Theme> = {
  flexGrow: 1,
};

export const dateTranslationstyles: SxProps<Theme> = {
  color: 'Translationsecondary',
};

export const reviewsListContainerStyles: SxProps<Theme> = {
  padding: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 3,
};

export const gridContainerStyles: SxProps<Theme> = {
  spacing: { xs: 3, sm: 3, md: 2 },
  justifyContent: 'center',
};

export const loadMoreButtonStyles: SxProps<Theme> = {
  width: '250px',
  height: '52px',
  borderRadius: '62px',
  borderColor: theme.colors.grey,
};

export const loadMoreButtonTranslationstyles: SxProps<Theme> = {
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '21.6px',
  color: theme.colors.selectedColor,
  fontFamily: 'Poppins',
};
