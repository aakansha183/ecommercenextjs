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
import { ErrorMessage, MainContainer, SubmitButton, Title } from "../../CommonComponents/LoginCommonComponent";
import LoginTextField from "@/CommonComponents/CommonTextInputField";
import { useLoginHandler } from "@/components/LoginHandlers";
import { useRouter } from "next/navigation";
import withAuth from "@/CommonComponents/withAuth";

const Login: React.FC = () => {
  const [error, setError] = useState<string>("");
  const { onSubmit } = useLoginHandler();
  const router = useRouter();
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
              <SubmitButton isSubmitting={isSubmitting} label={Translations.Login}
              />

            </Grid>
          </Grid>
        </form>

        {error && <ErrorMessage error={error} />}

        <Grid container justifyContent="center">
          <Grid size={{ xs: 'auto' }}>
            {Translations.LoginSubHead}{" "}
            <Link component="button" variant="body2" onClick={() => router.push('/signup')} >
              {Translations.Register}

            </Link>
          </Grid>
        </Grid>
      </MainContainer>
    </Container>
  );
};

export default withAuth(Login);
