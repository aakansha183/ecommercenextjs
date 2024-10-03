import * as yup from "yup";
export const validationSchemaRegister = yup.object({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
  });