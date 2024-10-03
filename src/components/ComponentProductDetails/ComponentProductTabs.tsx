"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Translations } from '@/Utils/Translation/Translation';
import { Review } from '@/Utils/Interfaces/InterfaceReview';
import { initialReviews, defaultNewReview } from '@/Utils/Constants/ConstantsReview';
import FilterIcon from '../../../public/assests/ImagesData/FilterIcon';
import ReviewsList from './ComponentReviews';

function TabPanel(props: { children?: React.ReactNode; index: number; value: number }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ProductTabs: React.FC = () => {
  const [value, setValue] = useState(1);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newReview, setNewReview] = useState<Review>(defaultNewReview);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleWriteReviewClick = () => {
    setReviewOpen(true);
  };

  const handleReviewClose = () => {
    setReviewOpen(false);
  };

  const handleReviewSubmit = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const updatedReviews = [
      ...reviews,
      { ...newReview, date: currentDate, id: reviews.length + 1 },
    ];

    setReviews(updatedReviews);
    setNewReview(defaultNewReview);
    setReviewOpen(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          borderBottom: '1px solid #E0E0E0',
          '& .MuiTab-root': {
            textTransform: 'inherit',
            fontSize: isMobile ? '13px' : '20px',
            fontWeight: '400',
            color: '#757575',
            padding: isMobile ? '0px 24px' : '0px 90px',
            marginTop: '40px',
          },
          '& .Mui-selected': {
            color: '#000000',
            fontWeight: '500',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#000000',
          },
        }}
      >
        <Tab label="Product Details" />
        <Tab label="Rating & Reviews" />
        <Tab label="FAQs" />
      </Tabs>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: '700',
              fontSize: isMobile ? '20px' : '24px',
              color: '#000000',
              marginLeft: isMobile ? '0' : '-20px',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
           {Translations.AllReviews}({reviews.length})
          </Typography>
          <Box display="flex" alignItems="center" flexDirection={isMobile ? 'column' : 'row'}>
            <Box sx={{ marginRight: isMobile ? '0' : '10px' }}>
              <FilterIcon />
            </Box>
            <Box
              display="flex"
              flexDirection={isMobile ? 'column' : 'row'}
              alignItems="center"
              mt={isMobile ? 2 : 0}
            >
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#F5F5F5',
                  color: '#757575',
                  borderRadius: '62px',
                  width: isMobile ? '100%' : '120px',
                  height: '48px',
                  padding: '16px',
                  marginRight: isMobile ? '0' : '8px',
                  mb: isMobile ? 1 : 0,
                }}
              >
                {Translations.Latest}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Latest</MenuItem>
              </Menu>
              <Button
                variant="contained"
                onClick={handleWriteReviewClick}
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  borderRadius: '62px',
                  padding: '16px 20px',
                  width: isMobile ? '100%' : '166px',
                  height: '48px',
                }}
              >
                {Translations.WriteaReview}
              </Button>
            </Box>
          </Box>
        </Box>

        {reviewOpen && (
          <Box
            sx={{
              p: 3,
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              mt: 2,
              backgroundColor: '#FFFFFF',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              {Translations.WriteaReview}
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            />
            <Rating
              value={newReview.rating}
              onChange={(event, newValue) => setNewReview({ ...newReview, rating: newValue || 0 })}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Review"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 2 }}
              value={newReview.review}
              onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
            />
            <Button
              variant="contained"
              onClick={handleReviewSubmit}
              sx={{ mr: 2 }}
            >
              {Translations.Submit}
            </Button>
            <Button variant="outlined" onClick={handleReviewClose}>
              {Translations.Cancel}
            </Button>
          </Box>
        )}

        <ReviewsList reviews={reviews} />
      </TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Box>
  );
};

export default ProductTabs;
