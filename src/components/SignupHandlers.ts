import { SubmitHandler } from "react-hook-form";
import { FormData } from "../Utils/Interfaces/SignupInterfaces";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context";

export const useHandleRegister = () => {

  const { setIsLoggedIn } = useAppContext();

  const router = useRouter();
  const onSubmit: SubmitHandler<FormData> = async (values) => {
    console.log("userdata", ({
      username: values.username,
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName
    }))
    try {
      const res = await fetch('/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName
        })

      });

      if (!values.username) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }


      if (res.ok) {
        setIsLoggedIn(true)
        router.push("/home")
      }
      else {
        console.log("Cannot register user");
      }
      console.log(res.ok, 'status')

    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("An unknown error occurred");
      }
    }

  }

  return { onSubmit }
}