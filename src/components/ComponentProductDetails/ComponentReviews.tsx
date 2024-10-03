"use client"
import React, { useState } from 'react';
import { CheckCircle } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { dateTranslationstyles, loadMoreButtonStyles, loadMoreButtonTranslationstyles, nameBoxStyles, nameTranslationstyles, ratingStyles, reviewCardContentStyles, reviewCardStyles, reviewsListContainerStyles, reviewTranslationstyles } from '../../Styles/StyleProductDetails/StyleReviewList';
import Grid from "@mui/material/Grid2";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import { Translations } from '@/Utils/Translation/Translation';
import { Review, ReviewsListProps } from '@/Utils/Interfaces/InterfaceReview';


const ReviewCard: React.FC<Review> = ({ name, rating, date, review }) => {
  return (
    <Card variant="outlined" sx={reviewCardStyles}>
      <CardContent sx={reviewCardContentStyles}>
        <Box sx={nameBoxStyles}>
          <Rating value={rating} precision={0.5} readOnly sx={ratingStyles} />
        </Box>
        <Box sx={nameBoxStyles}>
          <Typography variant="h6" sx={nameTranslationstyles}>
            {name}
          </Typography>
          <CheckCircle sx={{ color: 'green' }} />
        </Box>
        <Typography variant="body1" gutterBottom sx={reviewTranslationstyles}>
          {review}
        </Typography>
        <Typography variant="body2" sx={dateTranslationstyles}>
          {`Posted on ${date}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sortedReviews = reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + (isMobile ? 4 : 6));
  };

  return (
    <Box sx={reviewsListContainerStyles}>
      <Grid container spacing={{ xs: 3, sm: 3, md: 2 }} justifyContent="center">
        {sortedReviews.slice(0, visibleCount).map((review) => (
          <Grid  key={review.id} size = {{xs:12, sm:12, md:6}}>
            <ReviewCard {...review} />
          </Grid>
        ))}
      </Grid>
      {visibleCount < sortedReviews.length && (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Button
            variant="outlined"
            sx={loadMoreButtonStyles}
            onClick={handleLoadMore}
          >
            <Typography sx={loadMoreButtonTranslationstyles}>
              {Translations.LoadMoreReviews}
            </Typography>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ReviewsList;
