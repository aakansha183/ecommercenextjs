import { theme } from '@/Theme/Theme';
import { SxProps, Theme } from '@mui/material';
export const tabPanelStyles: SxProps<Theme> = {
  p: 3,
};

export const tabsStyles = (theme: Theme): SxProps<Theme> => ({
  borderBottom: '1px solid #E0E0E0',
  '& .MuiTab-root': {
    textTransform: 'inherit',
    fontSize: theme.breakpoints.down('sm') ? '13px' : '20px',
    fontWeight: '400',
    color: '#757575',
    padding: theme.breakpoints.down('sm') ? '0px 24px' : '0px 90px',
    marginTop: '40px',
  },
  '& .Mui-selected': {
    color: '#000000',
    fontWeight: '500',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#000000',
  },
});

export const reviewSectionStyles = (theme: Theme): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: theme.breakpoints.down('sm') ? 'column' : 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  mb: 2,
});

export const reviewTitleStyles = (theme: Theme): SxProps<Theme> => ({
  fontWeight: '700',
  fontSize: theme.breakpoints.down('sm') ? '20px' : '24px',
  color: '#000000',
  marginLeft: theme.breakpoints.down('sm') ? '0' : '-20px',
  textAlign: theme.breakpoints.down('sm') ? 'center' : 'left',
});

export const buttonStyles = (theme: Theme): SxProps<Theme> => ({
  textTransform: 'none',
  backgroundColor: '#F5F5F5',
  color: '#757575',
  borderRadius: '62px',
  width: theme.breakpoints.down('sm') ? '100%' : '120px',
  height: '48px',
  padding: '16px',
  marginRight: theme.breakpoints.down('sm') ? '0' : '8px',
  mb: theme.breakpoints.down('sm') ? 1 : 0,
});

export const submitButtonStyles: SxProps<Theme> = {
  textTransform: 'none',
  backgroundColor: theme.colors.selectedColor,
  color: theme.colors.white,
  borderRadius: '62px',
  padding: '16px 20px',
  width: '166px',
  height: '48px',
};

export const reviewFormStyles: SxProps<Theme> = {
  p: 3,
  border: '1px solid #E0E0E0',
  borderRadius: '8px',
  mt: 2,
  backgroundColor: theme.colors,
};
