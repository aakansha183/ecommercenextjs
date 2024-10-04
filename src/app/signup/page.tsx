"use client"
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaRegister } from "../../validationschema/ValidationSchemaSignup/SignupValidation";
import { Translations } from "../../Utils/Translation/Translation";
import { ErrorMessage, MainContainer, SubmitButton, Title } from "../../CommonComponents/LoginCommonComponent";
import { FormData } from "../../Utils/Interfaces/SignupInterfaces";
import { useHandleRegister } from "../../components/SignupHandlers";
import Grid from '@mui/material/Grid2';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LoginTextField from "@/components/CommonTextInputField";
import { useLoginNavigate } from "@/routes/navigate";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const router =  useRouter();
  const [registrationError, setRegistrationError] = useState<string>(""); 
  const { onSubmit } = useHandleRegister(); 

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchemaRegister), 
  });

  const handleFormSubmit: SubmitHandler<FormData> = async (values) => {
    const error = await onSubmit(values); 
    if (error && typeof error === 'string') {
      setRegistrationError(error);
      setRegistrationError("An unknown error occurred.");
    } else {
    }
  };

  return (
    <Container maxWidth="sm">
       <MainContainer>
       <Title title={Translations.SHOP_CO} />
        <form onSubmit={handleSubmit(handleFormSubmit)} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid size ={{ xs:12}}>
              <LoginTextField
                id="username"
                label="Username"
                control={control}
                rules={{ required: "Username is required" }}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </Grid>

            <Grid size ={{ xs:12}}>
              <LoginTextField
                id="password"
                label="Password"
                type="password"
                control={control}
                rules={{ required: "Password is required" }}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>

            <Grid size ={{ xs:12}}>
              <LoginTextField
                id="email"
                label="Email"
                control={control}
                rules={{ required: "Email is required" }}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>

            <Grid size ={{ xs:12}}>
              <LoginTextField
                id="firstName"
                label="First Name"
                control={control}
                rules={{ required: "First name is required" }}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            </Grid>

            <Grid size ={{ xs:12}}>
              <LoginTextField
                id="lastName"
                label="Last Name"
                control={control}
                rules={{ required: "Last name is required" }}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </Grid>

            <Grid size ={{ xs:12}}>
            <SubmitButton isSubmitting={isSubmitting} label={Translations.Register} />

            
            
            </Grid>
          </Grid>
        </form>

        {registrationError && <ErrorMessage error={registrationError} />}

        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Grid size = {{xs:'auto'}}>
            <Typography variant="body2">
              {Translations.Alreadyregistered}{" "}
              <Link
                component="button"
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={()=>
                  router.push('/login')
                }
              >
                {Translations.Login}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </MainContainer>
    </Container>
  );
};

export default Register;
