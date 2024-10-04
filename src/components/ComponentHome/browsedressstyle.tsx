"use client"
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"; 
import { Translations } from "@/Utils/Translation/Translation";
import { styles, text } from "../../Styles/StyleHome/styleshome";
import { useRouter } from "next/navigation";

const DressStyleComponent = () => {
const router = useRouter();
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
            onClick={()=> router.push('/category')}
              
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
              onClick={()=> router.push('/category')}
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
              onClick={()=> router.push('/category')}
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
              onClick={()=> router.push('/category')}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DressStyleComponent;