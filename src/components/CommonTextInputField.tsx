
import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { LoginTextFieldProps } from "@/Utils/Interfaces/LoginInterfaces";
const LoginTextField: React.FC<LoginTextFieldProps> = ({
             id,
  label,
  type = "text",
  control,
  defaultValue = "",
                 rules,
  error,
  helperText,
  fullWidth = true,
  variant = "outlined",
}) => {
                          return (
    <Controller
      name={id}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
                render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant={variant}
          fullWidth={fullWidth}
          error={error}
          helperText={helperText}
          slotProps={{
            input: {
              style: {
                borderRadius: '28px',
              },
            },
          }}
          
        />
      )}
    />
  );
};

export default LoginTextField;
