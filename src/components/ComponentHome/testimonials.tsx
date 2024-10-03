"use client"
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  testimonialsContainer,
  headerContainer,
  headerText,
  iconButtonContainer,
  iconButton,
  testimonialsScrollContainer,
  testimonialCard,
  cardContent,
  starsSection,
  testimonialName,
  testimonialText,
} from "../../Styles/StyleHome/StyleTestimonial";
import { Translations } from "@/Utils/Translation/Translation";
import { TestimonialsIf } from "@/Utils/Interfaces/InterfaceTestimonials";
import axios from "axios";

const Testimonials: React.FC = () => {

  const [testimonials,setTestimonials] = useState<TestimonialsIf[]>([]);
  useEffect(()=>{
    const fetchtestimonials = async () =>{
      try{
        const response = await axios.get('/api/testimonials')
        setTestimonials(response.data);
      }catch(error){
        console.error("Error fetching testimonials", error);
      }
    };
    fetchtestimonials();    
  },[]);


  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Box sx={testimonialsContainer}>
      <Box sx={headerContainer}>
        <Typography variant="h4" component="h2" sx={headerText}>
         {Translations.OURHAPPYCUSTOMERS}
        </Typography>
        <Box sx={iconButtonContainer}>
          <IconButton onClick={scrollLeft} sx={iconButton}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={scrollRight} sx={iconButton}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      <Box ref={testimonialsRef} sx={testimonialsScrollContainer}>
        {testimonials.map((testimonial, index) => (
          <Card key={index} sx={testimonialCard}>
            <CardContent sx={cardContent}>
              <Box sx={starsSection}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#FFCC00" }} />
                ))}
              </Box>
              <Typography variant="h6" component="div" sx={testimonialName}>
                {testimonial.name}
                <CheckCircleIcon sx={{ color: "#00C853", marginLeft: 1 }} />
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={testimonialText}>
                "{testimonial.text}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
