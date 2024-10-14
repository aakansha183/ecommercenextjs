import { toast } from "react-toastify";
import { LoginFormValues } from "../Utils/Interfaces/LoginInterfaces";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"
import { useAppContext } from "@/context";

export const useLoginHandler = () => {
  const router = useRouter();
  const { setIsLoggedIn } = useAppContext();


  const onSubmit = async (values: LoginFormValues, setError: (error: string) => void) => {
    try {
      const success = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,

      });
      console.log("sucees status", success)
      if (success) {
        router.push("/home")
        setIsLoggedIn(true)
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
