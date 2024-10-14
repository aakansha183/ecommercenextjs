"use client"
import React, { useState } from 'react';
import { typographyStyles, buttonContainerStyles, styledButtonStyles } from '../../Styles/StyleProductDetails/StyleMyButtons';
import { StyledButtonProps } from '../../Utils/Interfaces/InterfaceButton';
import { buttons } from '../../Utils/Constants/ConstantsMybuttons';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Translations } from '@/Utils/Translation/Translation';



const StyledButton: React.FC<StyledButtonProps> = ({ name, isClicked, onClick }) => {
  return (
    <Button sx={styledButtonStyles(isClicked)} onClick={() => onClick(name)}>
      {name}
    </Button>
  );
};

const MyButtons: React.FC<{ onSelectSize: (size: string) => void }> = ({ onSelectSize }) => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName);
    onSelectSize(buttonName);
  };


  return (
    <Box>
      <Typography sx={typographyStyles}>{Translations.ChooseSize}</Typography>
      <Box sx={buttonContainerStyles}>
        {buttons.map((button) => (
          <StyledButton
            key={button}
            name={button}
            isClicked={clickedButton === button}
            onClick={handleClick}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MyButtons;
