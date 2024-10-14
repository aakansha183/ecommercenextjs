import { Box, Button, Paper, Typography } from "@mui/material";
import { loginStyles } from "@/Styles/StyleLogin/StyleLogin";
import { TitleProps } from "@/Utils/Interfaces/LoginInterfaces";

export const MainContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={loginStyles.container}>
    <Paper sx={loginStyles.paper}>{children}</Paper>
  </Box>
);

export const Title: React.FC<TitleProps> = ({ title }) => (
  <Typography variant="h4" gutterBottom sx={loginStyles.title}>
    {title}
  </Typography>
);


export const SubmitButton: React.FC<{ isSubmitting: boolean; label: string, }> = ({ isSubmitting, label }) => (
  <Button
    type="submit"
    variant="contained"
    color="primary"
    fullWidth
    size="large"
    disabled={isSubmitting}
    sx={loginStyles.button}
  >
    {label}
  </Button>
);


export const ErrorMessage: React.FC<{ error: string }> = ({ error }) => (
  <Typography variant="body1" color="error" sx={loginStyles.errorText}>
    {error}
  </Typography>
);
