
"use client"
import React, { useState } from "react";
import {
  Box,
  Slider,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Chip,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sizes from "../../Utils/Constants/ConstantsFilter";
import styles from "../../Styles/Stylecategory/StyleFilter";
import FilterIcon from "../../../public/assests/ImagesData/FilterIcon";
import { Translations } from "@/Utils/Translation/Translation";
import { useFilter } from "./FilterContext";

const FilterComponent: React.FC = () => {
  const { priceRange, setPriceRange } = useFilter();
  const [selectedColors, setSelectedColors] = useState<string[]>(["Blue"]);
  const [selectedSize, setSelectedSize] = useState<string>("Large");
  const [selectedDressStyle, setSelectedDressStyle] = useState<string[]>([]);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleDressStyleChange = (style: string) => {
    setSelectedDressStyle((prevStyles) =>
      prevStyles.includes(style)
        ? prevStyles.filter((s) => s !== style)
        : [...prevStyles, style]
    );
  };

  const renderColorOptions = () => {
    const colors = [
      "#00C12B",
      "#F50606",
      "#F5DD06",
      "#F57906",
      "#06CAF5",
      "#063AF5",
      "#7D06F5",
      "#F506A4",
      "#FFFFFF",
      "#000000",
    ];
    return colors.map((color) => (
      <Box
        key={color}
        sx={{
          ...styles.colorOption,
          backgroundColor: color.toLowerCase(),
        }}
        onClick={() => handleColorChange(color)}
      >
        {selectedColors.includes(color) && (
          <Typography sx={styles.selectedColorText}>
            ✓
          </Typography>
        )}
      </Box>
    ));
  };

  const renderSizeOptions = () => {
    return sizes.map((size) => (
      <Chip
        key={size}
        label={size}
        onClick={() => handleSizeChange(size)}
        variant={selectedSize === size ? "filled" : "outlined"}
        sx={styles.sizeChip}
      />
    ));
  };

  const renderDressStyleOptions = () => {
    const stylesList = ["Casual", "Formal", "Party", "Gym"];
    return stylesList.map((style) => (
      <Box
        key={style}
        sx={styles.dressStyleOption}
        onClick={() => handleDressStyleChange(style)}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "12px",
            color: "#909090",
          }}
        >
          {style}
        </Typography>
        <IconButton size="small"></IconButton>
      </Box>
    ));
  };

  return (
    <Box sx={styles.container}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          {Translations.Filters}
        </Typography>
        <FilterIcon />
      </Box>
      <Divider sx={{ my: 1 }} />
      <List>
        {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((category) => (
          <ListItem disablePadding key={category}>
            <Accordion elevation={0} sx={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={styles.accordionSummary}
              >
                <Typography sx={{ fontWeight: "400", fontSize: "14px", color: "#909090" }}>
                  {category}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{Translations.Filteroptionsfor} {category}...</Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        ))}

        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={styles.accordionSummary}
            >
              <Typography sx={styles.accordionHeading}>
                {Translations.Price}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={50}
                max={200}
                sx={styles.slider}
              />
              <Typography variant="body2">
                ${priceRange[0]} - ${priceRange[1]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={styles.accordionSummary}
            >
              <Typography sx={styles.accordionHeading}>
                {Translations.Colors}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {renderColorOptions()}
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={styles.accordionSummary}
            >
              <Typography sx={styles.accordionHeading}>
                {Translations.Size}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {renderSizeOptions()}
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={styles.accordionSummary}
            >
              <Typography sx={styles.accordionHeading}>
                {Translations.DressStyle}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {renderDressStyleOptions()}
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>

      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 2, flexDirection: { xs: "column", sm: "row" } }}
      >
        <Button variant="contained" sx={styles.button}>
          {Translations.apply}
        </Button>
      </Stack>
    </Box>
  );
};

export default FilterComponent;
