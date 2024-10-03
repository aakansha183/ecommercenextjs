import { SxProps, Theme } from '@mui/material/styles';

export const thumbnailsContainerStyles: SxProps<Theme> = {
  display: 'flex',
  gap: 4,
  mt: { xs: 2, sm: 0 },
};

export const thumbnailBoxStyles: SxProps<Theme> = {
  width: '150px',
  height: '150px',
  cursor: 'pointer',
};

export const thumbnailImageStyles: React.CSSProperties = {
  width: '100%',
  height: '100%',
  borderRadius: '20px',
  marginTop: '5px',
  marginRight: '50px',
};
