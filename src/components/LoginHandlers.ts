import { toast } from "react-toastify";
import { LoginFormValues } from "../Utils/Interfaces/LoginInterfaces";
import useAuth from "@/Hooks/UseAuth";
import { useRouter } from "next/navigation";

export const useLoginHandler = () => {
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit = async (values: LoginFormValues, setError: (error: string) => void) => {
    try {
      const success = await login(values.username, values.password);
      if (success) {
        router.push("/home")
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
