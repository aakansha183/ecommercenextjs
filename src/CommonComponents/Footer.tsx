"use client"
import React from 'react';
import { Box, Typography, TextField, Button, InputAdornment, Divider } from '@mui/material';
import { Email } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';  
import {
  footerContainer,
  newsletterSection,
  textFieldStyle,
  buttonStyle,
  footerContentContainer,
  dividerStyle,
  copyrightText,
  paymentIconsContainer,
} from '../CommonComponents/StyleCommonComponents/StyleFooter';
import { Translations } from '../Utils/Translation/Translation';
import TwitterIcon from '../../public/assests/ImagesData/TwitterIcon';
import InstaIcon from '../../public/assests/ImagesData/InstaIcon';
import FacebookIcon from '../../public/assests/ImagesData/FacebookIcon';
import GithubIcon from '../../public/assests/ImagesData/GithubIcon';
import VisaIcon from '../../public/assests/ImagesData/VisaIcon';
import Mastercard from '../../public/assests/ImagesData/MasterCardIcon';
import PayPalIcon from '../../public/assests/ImagesData/PayPal';
import IphonePay from '../../public/assests/ImagesData/IPhonePayIcon';
import GpayIcon from '../../public/assests/ImagesData/GPayIcon';

const socialIcons = [
  { icon: <TwitterIcon />, link: 'https://x.com/?lang=en' },
  { icon: <FacebookIcon />, link: 'https://www.facebook.com/' },
  { icon: <InstaIcon />, link: 'https://www.instagram.com/' },
  { icon: <GithubIcon />, link: 'https://github.com/' },
];

const paymentIcons = [
  { icon: <VisaIcon />, link: 'https://www.visa.co.in/' },
  { icon: <Mastercard />, link: 'https://www.mastercard.co.in/en-in.html/' },
  { icon: <PayPalIcon />, link: 'https://www.paypal.com/in/home' },
  { icon: <IphonePay />, link: 'https://www.apple.com/apple-pay/' },
  { icon: <GpayIcon />, link: 'https://payments.google.com/gp/w/u/0/home/signup' },
];

const companyInfo = [
  { title: 'COMPANY', items: ['About', 'Features', 'Works', 'Career'] },
  { title: 'HELP', items: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
  { title: 'FAQ', items: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] },
  { title: 'RESOURCES', items: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'] },
];

const Footer: React.FC = () => {
  return (
    <Box sx={footerContainer}>
      <Box sx={newsletterSection}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              fontWeight="700"
              fontSize={{ xs: '25px', md: '40px' }}
              lineHeight={'45px'}
              fontFamily={'Poppins'}
            >
              {Translations.FooterSubHead}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <TextField
                variant="outlined"
                placeholder="Enter your email address"
                sx={textFieldStyle}
                InputProps={{
                  style: { color: 'black' },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" sx={buttonStyle}>
                {Translations.SubscribetoNewsletter}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={footerContentContainer}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography
              variant="h6"
              fontWeight="700"
              fontSize={{ xs: '25px', md: '33.45px' }}
              fontFamily="Poppins"
            >
              {Translations.SHOP_CO}
            </Typography>
            <Typography
              variant="body2"
              color="Translationsecondary"
              sx={{ marginTop: 3, fontWeight: 400, fontSize: '14px', lineHeight: '22px', fontFamily: 'Poppins' }}
            >
              {Translations.FooterDescription}
            </Typography>
            <Box sx={{ display: 'flex', marginTop: 5, gap: 2 }}>
              {socialIcons.map((social, index) => (
                <a href={social.link} target="_blank" key={index} rel="noopener noreferrer">
                  {social.icon}
                </a>
              ))}
            </Box>
          </Grid>

          {companyInfo.map((section, index) => (
            <Grid size={{ xs: 6, sm: 2 }} key={index}>
              <Typography variant="h6" fontWeight="550" fontSize={'16px'} marginTop={2} letterSpacing="3px">
                {section.title}
              </Typography>
              {section.items.map((item, idx) => (
                <Typography
                  variant="body2"
                  color="Translationsecondary"
                  sx={{ marginTop: 3, fontSize: '16px', fontWeight: 400 }}
                  key={idx}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={dividerStyle} />
      <Typography variant="body2" color="#6c757d" fontFamily="Poppins" sx={copyrightText}>
        {Translations.RightsReserved}
      </Typography>

      <Box sx={paymentIconsContainer}>
        {paymentIcons.map((payment, index) => (
          <a href={payment.link} target="_blank" key={index} rel="noopener noreferrer">
            {payment.icon}
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
