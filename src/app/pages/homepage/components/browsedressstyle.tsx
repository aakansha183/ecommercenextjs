import { Box, Typography } from "@mui/material";
import Casual from "../../../../../public/assests/Images/Casual.png";
import Formal from "../../../../../public/assests/Images/Formal.png";
import Party from "../../../../../public/assests/Images/Party.png";
import Gym from "../../../../../public/assests/Images/Gym.png";
// import { useCategoryNavigate } from "../../../Routes/Navigation";
import Grid from "@mui/material/Grid2"; 
import { Translations } from "@/Utils/Translation/Translation";
import { styles, text } from "../styles/styleshome";

const DressStyleComponent = () => {
//   const { navigateToCategoryNavigate } = useCategoryNavigate();

  return (
    <Box sx={styles.container}>
      <Typography
        variant="h4"
        fontWeight="700"
        align="center"
        sx={text}
      >
        {Translations.BROWSEBYDRESSSTYLE}
      </Typography>

      <Grid container spacing={2}>
        <Grid size = {{ xs:12, sm:6 }}>
          <Box
            sx={{
              ...styles.gridItem,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <img
              src= "/assests/Images/Casual.png"
              alt="Casual"
              style={{ ...styles.image ,marginBottom:'-130px'}}
            //   onClick={navigateToCategoryNavigate}
              
            />
          </Box>
        </Grid>

        <Grid size = {{ xs:12, sm:6}}>
          <Box
            sx={{
              ...styles.gridItem,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <img
              src = '/assests/Images/Formal.png'
              alt="Formal"
              style={{ ...styles.image }}
            //   onClick={navigateToCategoryNavigate}
            />
          </Box>
        </Grid>

        <Grid size = {{ xs:12, sm:6}}>
          <Box
            sx={{
              ...styles.gridItem,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <img
              src="/assests/Images/Party.png"
              alt="Party"
              style={{ ...styles.image }}
            //   onClick={navigateToCategoryNavigate}
            />
          </Box>
        </Grid>

        <Grid size = {{ xs:12, sm:6}}>
          <Box
            sx={{
              ...styles.gridItem,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <img
              src="/assests/Images/Gym.png"
              alt="Gym"
              style={{ ...styles.image,marginBottom:'-140px'  }}
            //   onClick={navigateToCategoryNavigate}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DressStyleComponent;