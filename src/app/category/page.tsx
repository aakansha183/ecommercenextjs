import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../Styles/Stylecategory/StyleCategory";
import { FilterProvider } from "../../components/ComponentCategory/FilterContext";
import FilterComponent from "@/components/ComponentCategory/ComponentFilter";
import ProductGrid from "@/components/ComponentCategory/componentcategoryproductCrad";

const CategoryDetails: React.FC = () => {
  return (
    <Box sx={styles.container}>
      {/* <TopHeader /> */}
      {/* <Header /> */}

      {/* <Divider sx={styles.divider} /> */}

      <FilterProvider>
        <Box sx={styles.filterWrapper}>
          <Grid container spacing={2}>
            <Grid size = {{ xs:12, md:3}}>
              <FilterComponent /> 
            </Grid>
            <Grid size = {{ xs:12, md:9}}>
              <ProductGrid />
            </Grid>
          </Grid>
        </Box>
      </FilterProvider>
      
      {/* <Footer /> */}
    </Box>
  );
};

export default CategoryDetails;
