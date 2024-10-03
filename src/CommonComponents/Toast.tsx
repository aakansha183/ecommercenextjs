import { toast, ToastOptions } from "react-toastify";


export const showToastError = (message:string, options:ToastOptions = {}) => {
  toast.error(message, {
    theme: "dark",
    autoClose: 1000,
    ...options, 
  });
};

export const showToastSuccess = (message:string, options:ToastOptions = {}) => {
    toast.success(message, {
      theme: "dark",
      autoClose: 1000,
      ...options, 
    });
  };

  export const showToastInfo = (message:string, options:ToastOptions = {}) => {
    toast.info(message, {
      theme: "dark",
      autoClose: 1000,
      ...options, 
    });
  };
