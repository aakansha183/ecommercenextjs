import React from "react";
import { redirect } from "next/navigation";
import useAuth from "@/Hooks/UseAuth";
import { AppProps } from "next/app";
import User from "../../models/user";

export default function withAuth(Component:React.ComponentType<AppProps>) {
  return function WithAuth(props: AppProps) {
   

    // console.log(User,"current user")
    
    //   if (User!==null) {
    //     redirect('/');
    //   }
   

    return <Component {...props} />;
  };
}