"use client"
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import {  useMediaQuery, Badge } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';
import { headerContainer, appBar, logoText, navLinks, searchContainer, drawerStyles, drawerTitle } from './StyleCommonComponents/StyleHeader';
import { Translations } from '../Utils/Translation/Translation';
import SearchIcon from '../../public/assests/ImagesData/SearchIcon';
import CartIcon from '../../public/assests/ImagesData/CartIcon';
import AccountIcon from '../../public/assests/ImagesData/AccountIcon';
import useAuth from '@/Hooks/UseAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useHandleRegister } from '@/components/SignupHandlers';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50px',
  backgroundColor: theme.palette.grey[200],
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
  marginLeft: 0,
  width: '100%',
  maxWidth: '610px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  height: '48px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

const Header: React.FC = () => {
const router  = useRouter();
const{isLoggedIn} = useHandleRegister();
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    if (isLoggedIn) {
      await logout();
      toast.success("Successfully logged out", { theme: 'dark' });
      handleMenuClose();
    } else {
      toast.error("Please log in or sign up", { theme: 'dark' });
    }
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setDrawerOpen(open);
  };

  const handleSearchIconClick = () => {
    setMobileSearchOpen((prev) => !prev);
  };

  const drawerContent = (
    <Box sx={drawerStyles} role="presentation">
      <Typography variant="h6" sx={drawerTitle}>
       {Translations.SHOP_CO}
      </Typography>
      <Link href="/Category" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>{Translations.Shop}</Typography>
      </Link>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>{Translations.OnSale}</Typography>
      {/* <HashLink smooth to="/#newarrivals" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>{Translations.NEW_ARRIVALS}</Typography>
      </HashLink> */}
      <Typography variant="body1">{Translations.Brands}</Typography>
    </Box>
  );

  return (
    <Box sx={headerContainer}>
      <ToastContainer />
      <AppBar position="static" color="transparent" elevation={0} sx={appBar}>
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
              </Drawer>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  noWrap
                  sx={logoText}
                >
                  {Translations.SHOP_CO}
                </Typography>
              </Link>
            </>
          ) : (
            <>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  noWrap
                  sx={logoText}
                >
                 {Translations.SHOP_CO}
                </Typography>
              </Link>
              <Box sx={navLinks}>
                <Link href="/category" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body1">{Translations.Shop}</Typography>
                </Link>
                <Typography variant="body1">{Translations.OnSale}</Typography>
                {/* <HashLink smooth to="/#newarrivals" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body1">{Translations.New_Arrivals}</Typography>
                </HashLink> */}
                <Typography variant="body1">{Translations.Brands}</Typography>
              </Box>
            </>
          )}

          <Box sx={{ flexGrow: 1 }} />
          
          {!isMobile ? (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for products..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          ) : (
            <>
              <IconButton color="inherit" onClick={handleSearchIconClick}>
                <SearchIcon />
              </IconButton>
              {mobileSearchOpen && (
                <Search sx={searchContainer}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search for products..."
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              )}
            </>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '20px' }}>
            <IconButton color="inherit" onClick={() => router.push('/cart')} >
              <Badge badgeContent={cartQuantity} color="error">
                <CartIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <AccountIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {isLoggedIn ? (
                <MenuItem onClick={handleLogout}>
                  {Translations.Logout}
                </MenuItem>
              ) : (
                <MenuItem onClick={() => toast.error("Please log in or sign up", { theme: 'dark' })}>
                 {Translations.LoginORSignUp}
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
