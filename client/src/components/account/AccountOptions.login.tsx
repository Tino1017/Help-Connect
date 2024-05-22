import React from "react";

import { Link } from "react-router-dom";

import { AccountLink } from "../UI/AccountLink";

import { AiFillSetting as ServicesIcon } from "react-icons/ai";
import { GiTeacher as LecturerIcon } from "react-icons/gi";
import { PiStudentFill as StudentIcon } from "react-icons/pi";

export const AccountOptionsLogin: React.FC = () => {
  return (
    <>
      <section className="flex items-center justify-center h-screen rounded bg-opacity-80 bg-blur-lg bg-slate-300 backdrop-blur-lg">
        <div className="py-7 max-w-[400px] mx-2 px-7 rounded-xl drop-shadow-xl bg-white">
          <header>
            <h1 className="mb-1 text-xl font-bold text-blue-950">
              Choose your category
            </h1>
            <p className="text-xs dark:text-gray-900 opacity-50">
              Please choose an option to register an account with help connect
            </p>
          </header>

          <section className="mt-3 flex flex-col gap-2">
            <AccountLink to="/student/login-account" name="Continue as student">
              <StudentIcon />
            </AccountLink>
            <AccountLink
              to="/lecturer/login-account"
              name="Continue as lecturer"
            >
              <LecturerIcon />
            </AccountLink>
            <AccountLink to="#" name="Continue as helper">
              <ServicesIcon />
            </AccountLink>
          </section>

          <div className="flex items-center justify-center gap-2 flex-wrap mt-5 opacity-60 text-sm">
            <p>Don't have an account?</p>
            <Link
              className="font-bold text-blue-900"
              to="/account/register-choice"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
