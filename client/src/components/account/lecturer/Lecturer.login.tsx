import React, { useState } from "react";
import { Link, Mail, LockIcon, LecturerIcon } from "./Lecturer.imports";
import {
  SetLecturerEmail,
  SetLecturerID,
  SetLecturerUsername,
} from "./Lecturer.imports";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios, { AxiosError } from "axios";
import {
  failedNotification,
  infoNotification,
  successNotification,
} from "../../../global/ToastNotification.function";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface IUserData {
  email: string;
  password: string;
}

interface IErrorMessage {
  errorMessage: string;
}

export const LecturerLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  const emailValidatorHandler: () => void = function () {
    const emailRegex: RegExp =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email.trim()) === false) {
      setEmailError("Please enter valid email");
    } else if (!email.trim()) {
      setEmailError("Please enter email");
    } else {
      setEmailError("");
    }
  };

  const passwordValidatorHandler: () => void = function () {
    if (password.trim().length < 8) {
      setPasswordError("Password must be more than 8 characters");
    } else if (!password.trim()) {
      setPasswordError("Please Enter password");
    } else {
      setPasswordError("");
    }
  };

  const submitDataHandler: (e: React.FormEvent<HTMLFormElement>) => void =
    async function (e: React.FormEvent<HTMLFormElement>) {
      try {
        e.preventDefault();

        emailValidatorHandler();
        passwordValidatorHandler();

        const userData: IUserData = {
          email,
          password,
        };

        if (emailError.trim() || passwordError.trim()) {
          // Handle validation errors
          failedNotification("Please fix the validation errors.");
        } else {
          const res = (
            await axios.post("/api/lecturer/login-account", userData)
          ).data;
          // if account exist we want to redirect the user to login form
          if (!res.hasAccount) {
            infoNotification(res.message);
            navigate("/lecturer/register-account");
            // if account doesn't exist then we welcome the user to the dash board
          } else if (res.hasAccount && res.lecturer.lecturerID) {
            const lecturerID: string = res.lecturer.lecturerID;
            const lecturerUsername: string = res.lecturer.username;
            const lecturerEmail: string = res.lecturer.email;
            const message: string = res.message;

            successNotification(message);
            // saving token to local storage
            Cookies.set("lecturer-token", lecturerID);
            // dispatching data to redux store
            dispatch(SetLecturerID(lecturerID));
            dispatch(SetLecturerUsername(lecturerUsername));
            dispatch(SetLecturerEmail(lecturerEmail));
            navigate("/dashboard", { replace: true });
            window.location.reload();
          } else {
            failedNotification(res.errorMessage);
          }
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError: AxiosError<IErrorMessage> =
            error as AxiosError<IErrorMessage>;
          const axios_response = axiosError.response;

          if (axios_response) {
            const { data } = axios_response;
            failedNotification(data.errorMessage);
          }
        } else {
          failedNotification("Internal server error😓");
        }
      }
    };

  // async function HttpGoogleAuthenticationHandler(): Promise<void> {
  //   window.open("/api/auth/google", "_self");
  //   const response = (await axios.get("/api/auth/success")).data;
  //   localStorage.setItem("lecturer-google", response.student.studentID);
  // }
  return (
    <>
      <section className="register-container rounded bg-opacity-80 bg-blur-lg bg-slate-300 backdrop-blur-lg">
        <form
          className="py-7 mx-2 px-7 rounded-xl drop-shadow-xl"
          onSubmit={(e) => submitDataHandler(e)}
        >
          <h1 className="text-2xl mb-1 font-bold text-blue-950">
            Login as Lecturer
          </h1>
          <p className="opacity-40 text-sm mb-3">
            Please enter your information to proceed
          </p>
          <div className="flex items-start flex-col w-full mb-2">
            <label className="text-sm opacity-50 mb-1" htmlFor="email">
              Email
            </label>
            <div
              className={`flex items-center w-full border ${
                emailError && "border-red-500"
              } rounded`}
            >
              <span className="px-2  py-[10px] bg-slate-100 rounded-l text-slate-500">
                <Mail />
              </span>
              <input
                id="email"
                type="email"
                placeholder="someone@example.com"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                  emailValidatorHandler();
                }}
                value={email}
                className="w-full flex-1 text-sm outline-none px-[3px] py-[8px] bg-slate-100 rounded-r"
              />
            </div>
            {emailError && (
              <span className="text-sm text-red-500 mt-1">{emailError}</span>
            )}
          </div>
          <div className="flex items-start flex-col w-full mb-2">
            <label className="text-sm opacity-50 mb-1" htmlFor="password">
              Password
            </label>
            <div
              className={`flex items-center w-full border ${
                passwordError && "border-red-500"
              } rounded`}
            >
              <span className="px-2 py-[11px] bg-slate-100 rounded-l text-slate-500 text-sm">
                <LockIcon />
              </span>
              <input
                id="password"
                type="password"
                placeholder="Password must be more than 8 characters"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                  passwordValidatorHandler();
                }}
                value={password}
                className="w-full flex-1 text-sm outline-none px-[3px] py-[8px] bg-slate-100 rounded-r"
              />
            </div>
            {passwordError && (
              <span className="text-sm text-red-500 mt-1">{passwordError}</span>
            )}
          </div>
          <p className="text-xs opacity-50">
            By registering an account you agree to our{" "}
            <span className="text-blue-600 opacity-100">terms</span> and{" "}
            <span className="text-blue-600 opacity-100">conditions</span>.
            Please read our terms and condition before you continue
          </p>
          <div className="flex mt-2 mb-2 flex-wrap items-center gap-2">
            <button
              type="submit"
              className="transition-all duration-700 ease-linear hover:bg-blue-900 w-full flex  items-center justify-center gap-2 bg-blue-950 text-sm text-white px-[0.4rem] py-[0.5rem] rounded"
            >
              <span>
                <LecturerIcon />
              </span>{" "}
              <span>Continue as Lecturer</span>
            </button>
          </div>
          {/* <div className="flex items-center gap-1">
            <Link
              className="transition-all duration-700 ease-linear hover:bg-slate-100 px-[0.4rem] py-[0.5rem] google-login-button text-sm border flex items-center justify-center text-[#333]"
              to="#"
              onClick={HttpGoogleAuthenticationHandler}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
                className="google-logo"
              />
              Google
            </Link>
          </div> */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-5 opacity-60 text-sm">
            <p>Already have an account?</p>
            <Link
              className="font-bold text-blue-900"
              to="/lecturer/register-account"
            >
              Log in
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};
