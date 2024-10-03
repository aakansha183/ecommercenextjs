import React from 'react';
import { thumbnailsContainerStyles, thumbnailBoxStyles, thumbnailImageStyles } from '../../Styles/StyleProductDetails/StyleThumbnail';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { ProductThumbnailsProps } from '@/Utils/Interfaces/InterfacesThumbnail';

const ProductThumbnails: React.FC<ProductThumbnailsProps> = ({ thumbnails, selectedThumbnail, handleThumbnailClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        ...thumbnailsContainerStyles,
        flexDirection: isMobile ? 'row' : 'column',
        justifyContent: isMobile ? 'center' : 'flex-start',
      }}
    >
      {thumbnails.map((thumbnail, index) => (
        <Box
          key={index}
          sx={thumbnailBoxStyles}
          onClick={() => handleThumbnailClick(index)}
        >
          <img
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            style={{
              ...thumbnailImageStyles,
              border: selectedThumbnail === index ? '1px solid black' : 'none',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ProductThumbnails;
