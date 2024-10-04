import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../Hooks/UseAuth";
import { FormData } from "../Utils/Interfaces/SignupInterfaces";
import { User } from "@/Utils/Interfaces/LoginInterfaces";
import { useHomeNavigate } from "@/routes/navigate";
import { useRouter } from "next/navigation";


export const useHandleRegister = () => {
  const { register: registerUser } = useAuth();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormData> = async (values) => {
    try {
      const newUser: User = {
        id: Date.now().toString(),
        username: values.username,
        password: values.password,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
      };
      await registerUser(newUser);
      toast.success("Successfully Registered", {
        theme: "dark",
      });
      // useHomeNavigate();
      router.push("/home")
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      } else {
        return "An unknown error occurred";
      }
    }
  };

  return { onSubmit };
};
