import * as yup from "yup";

export const validationSchemaLogin = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });