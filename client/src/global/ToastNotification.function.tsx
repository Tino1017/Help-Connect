import { toast } from "react-toastify";

  
export const successNotification: (message: string) => void = function (
    message: string
  ) {
    toast.success(message, {
      toastId: "success-notification",
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  export const infoNotification: (message: string) => void = function (
    message: string
  ) {
    toast.info(message, {
      toastId: "success-notification",
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  export const failedNotification: (message: string) => void = function (
    message: string
  ) {
    toast.error(message, {
      toastId: "error-notification",
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

