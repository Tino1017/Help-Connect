import React, { useContext } from "react";
import { IDataObject } from "../../context/Context.config";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { DashboardUI } from "../UI/DashboardUI";
import { DashboardHeader } from "../UI/DashboardHeader";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import Cookies from "js-cookie";
import { UploadContainer } from "./UploadContainer";

export const Creator: React.FC = () => {
  const { lecturer, google } = useContext<IDataObject>(FetchUserDataContext);
  const tokenLecturer = Cookies.get("lecturer-token");
  const googleTokenLecturer = Cookies.get("lecturer-google");
  return (
    <>
      <DashboardUI>
        <header className="flex items-center justify-between mb-5">
          <div>
            <DashboardHeader
              header="Creator"
              stylesHeader="text-2xl mb-1 font-bold"
              stylesSubHeader="text-xs opacity-50"
              subHeader={greetUserBasedOnTime(
                tokenLecturer
                  ? lecturer.firstName
                  : googleTokenLecturer
                  ? google.names
                  : ""
              )}
            />
          </div>
        </header>

        <UploadContainer />
      </DashboardUI>
    </>
  );
};
