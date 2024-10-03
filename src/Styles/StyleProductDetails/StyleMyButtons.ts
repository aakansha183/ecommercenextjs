import { theme } from '@/Theme/Theme';
import { SxProps, Theme } from '@mui/material/styles';

export const typographyStyles: SxProps<Theme> = {
  marginBottom: '10px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '21.6px',
  color: 'GrayText',
};

export const buttonContainerStyles: SxProps<Theme> = {
  display: 'flex',
  gap: '12px',
  mt: 1,
};

export const styledButtonStyles = (isClicked: boolean): SxProps<Theme> => ({
  borderRadius: '62px',
  width: '90px',
  height: '46px',
  backgroundColor: isClicked ? theme.colors.selectedColor : theme.colors.grey,
  color: isClicked ? theme.colors.white : theme.colors.darkgrey,
  '&:hover': {
    backgroundColor: isClicked ? theme.colors.selectedColor : theme.colors.darkgrey,
    color: isClicked ? theme.colors.white : theme.colors.white,
  },
});
