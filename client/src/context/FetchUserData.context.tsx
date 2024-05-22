import React, { useState, useEffect, createContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  IContext,
  IDataObject,
  IGetUserData,
  ContextDataStructure,
} from "./Context.config";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

export const FetchUserDataContext: React.Context<IDataObject> =
  createContext<IDataObject>(ContextDataStructure);
export const FetchUserDataProvider: React.FC<IContext> = ({ children }) => {
  const [studentData, setStudentData] = useState<object>({});
  const [lecturerData, setLecturerData] = useState<object>({});
  const [googleData, setGoogleData] = useState<object>({});
  const studentToken: string | undefined = Cookies.get("student-token");
  const lecturerToken: string | undefined = Cookies.get("lecturer-token");
  const studentGoogleToken: string | undefined = Cookies.get("student-google");
  const lecturerGoogleToken: string | undefined =
    Cookies.get("lecturer-google");
  const navigate: NavigateFunction = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const sendUserData: IGetUserData = {
      token: studentToken || lecturerToken,
    };

    // function navigateUser(path: string): void {
    //   navigate(path, { replace: true });
    // }

    async function HttpGetUsersData() {
      setIsLoading(true);
      if (studentToken || lecturerToken) {
        const response: AxiosResponse = await axios.post(
          "/api/fetch-data",
          sendUserData
        );

        // console.log(response)

        if (studentToken) {
          setStudentData(response.data);
          // navigateUser("/dashboard");
        } else if (lecturerToken) {
          setLecturerData(response.data);
          // navigateUser("/dashboard");
        } else {
          localStorage.clear();
        }
      } else if (studentGoogleToken) {
        const response: AxiosResponse = await axios.get("/api/auth/success");
        setGoogleData(response.data as object);
      } else if (lecturerGoogleToken) {
        const response: AxiosResponse = await axios.get("/api/auth/success");
        setGoogleData(response.data as object);
      }
    }
    HttpGetUsersData();
    setIsLoading(false);
  }, [
    navigate,
    studentToken,
    lecturerToken,
    studentGoogleToken,
    lecturerGoogleToken,
  ]);

  return (
    <FetchUserDataContext.Provider
      value={{
        student: studentData,
        lecturer: lecturerData,
        isLoading,
        google: googleData,
      }}
    >
      {children}
    </FetchUserDataContext.Provider>
  );
};
