import { toast } from "react-toastify";
import { LoginFormValues } from "../Utils/Interfaces/LoginInterfaces";
import useAuth from "@/Hooks/UseAuth";
import { useHomeNavigate } from "@/routes/navigate";

export const useLoginHandler = () => {
  const { login } = useAuth();
  const onSubmit = async (values: LoginFormValues, setError: (error: string) => void) => {
    try {
      const success = await login(values.username, values.password);
      if (success) {
        useHomeNavigate()
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
