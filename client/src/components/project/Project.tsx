import React, { useContext } from "react";
import { DashboardUI } from "../UI/DashboardUI";
import { DashboardHeader } from "../UI/DashboardHeader";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import Cookies from "js-cookie";
import { IDataObject } from "../../context/Context.config";

export const Project: React.FC = () => {
  const { student, google } = useContext<IDataObject>(FetchUserDataContext);
  const tokenStudent = Cookies.get("student-token");
  const googleToken = Cookies.get("student-google");
  return (
    <DashboardUI>
      <header className="flex items-center justify-between">
        <div>
          <DashboardHeader
            header="Projects"
            stylesHeader="text-2xl mb-1 font-bold"
            stylesSubHeader="text-xs opacity-50"
            subHeader={greetUserBasedOnTime(
              tokenStudent ? student.firstName : googleToken ? google.names : ""
            )}
          />
        </div>
      </header>
    </DashboardUI>
  );
};
