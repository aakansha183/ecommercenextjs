"use client"
import React, { useState } from "react";
import {
  Container,
  Link,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormValues } from "../../Utils/Interfaces/LoginInterfaces";
import { validationSchemaLogin } from "../../validationschema/LoginValidation";
import { Translations } from "../../Utils/Translation/Translation";
// import { useRegisterNavigate } from "../../Routes/Navigation";
import { ErrorMessage, MainContainer, SubmitButton, Title } from "../../CommonComponents/LoginCommonComponent";
import LoginTextField from "@/components/CommonTextInputField";
import { useLoginHandler } from "@/components/LoginHandlers";

const Login: React.FC = () => {
  // const { navigateToRegister } = useRegisterNavigate();
  const [error, setError] = useState<string>("");
  const { onSubmit } = useLoginHandler();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(validationSchemaLogin),
  });

  return (
    <Container maxWidth="sm">
      <MainContainer>
      
      <Title title={Translations.SHOP_CO} />


        <form onSubmit={handleSubmit((values) => onSubmit(values, setError))}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <LoginTextField
                id="username"
                label="Username"
                control={control}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <LoginTextField
                id="password"
                label="Password"
                type="password"
                control={control}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
            <SubmitButton isSubmitting={isSubmitting} label={Translations.Login} />

            </Grid>
          </Grid>
        </form>

        {error && <ErrorMessage error={error} />}

        <Grid container justifyContent="center">
          <Grid size={{ xs: 'auto' }}>
            {Translations.LoginSubHead}{" "}
            <Link component="button" variant="body2" >
              {Translations.Register}
            </Link>
          </Grid>
        </Grid>
      </MainContainer>
    </Container>
  );
};

export default Login;
