import { User } from "../../Pages/PageLogin/Types/LoginInterfaces";

export interface AuthState {
    currentUser: User | null;
    isLoggedIn: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => Promise<void>;
    register: (newUser: User) => Promise<void>;
  }
  