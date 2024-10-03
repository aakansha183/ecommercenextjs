import { toast } from "react-toastify";
// import { useHomeNavigate } from "../../../Routes/Navigation";
import { LoginFormValues } from "../Utils/Interfaces/LoginInterfaces";
import useAuth from "@/Hooks/UseAuth";

export const useLoginHandler = () => {
  const { login } = useAuth();
  // const { navigateToHome } = useHomeNavigate();

  const onSubmit = async (values: LoginFormValues, setError: (error: string) => void) => {
    try {
      const success = await login(values.username, values.password);
      if (success) {
        // navigateToHome();
        toast.success("Successfully Logged In", { theme: "dark" });
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Invalid username or password.");
    }
  };

  return { onSubmit };
};
