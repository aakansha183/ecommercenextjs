export interface LoginFormValues {
    username: string;
    password: string;
  };
  export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  export interface UserState {
    users: User[];
    currentUser: User | null;
  };
  export interface LoginTextFieldProps {
    id: string;
    label: string;
    type?: string;
    control: any;
    defaultValue?: string;
    rules?: object;
    error: boolean;
    helperText: string | undefined;
    fullWidth?: boolean;
    variant?: "filled" | "outlined" | "standard";
  }
  export interface TitleProps {
    title: string;
  }
  