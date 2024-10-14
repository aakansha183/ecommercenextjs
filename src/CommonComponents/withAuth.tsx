import React from "react";
import { redirect } from "next/navigation";
import { AppProps } from "next/app";
import User from "../../models/user";
import { useAppContext } from "@/context";

export default function withAuth(Component:React.ComponentType<AppProps>) {
  return function WithAuth(props: AppProps) {
    // const{isLoggedIn,setIsLoggedIn} = useAppContext();


    // console.log(User,"current user")
    
    //   if (isLoggedIn) {
    //     redirect('/');
    //   }
   

    return <Component {...props} />;
  };
}