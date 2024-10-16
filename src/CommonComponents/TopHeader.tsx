"use client"
import React, { useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { topHeaderContainer, containerStyle, typographyStyle, iconButtonStyle, closeIconStyle } from "../CommonComponents/StyleCommonComponents/StyleTopHeder";
import { Translations } from "../Utils/Translation/Translation";
import Link from "next/link";
import { useAppContext } from "@/context";

const TopHeader: React.FC = () => {
  const { isLoggedIn } = useAppContext();
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (isLoggedIn || !isVisible) return null;

  return (
    <Box sx={topHeaderContainer}>
      <Container
        maxWidth={false}
        sx={containerStyle}
      >
        <Typography
          variant="body2"
          sx={typographyStyle}
        >
          {Translations.TopHeaderSubHead}{" "}
          <Link
            href="/signup"
            style={{
              color: "#ffffff",
              textDecoration: "underline",
            }}
          >
            {Translations.SignUpNow}
          </Link>
        </Typography>
        <IconButton
          sx={iconButtonStyle}
          onClick={handleClose}
        >
          <CloseIcon
            sx={closeIconStyle}
          />
        </IconButton>
      </Container>
    </Box>
  );
};

export default TopHeader;
