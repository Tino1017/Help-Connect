import { FC, useContext } from "react";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { DashboardHeader } from "../UI/DashboardHeader";
import { DashboardUI } from "../UI/DashboardUI";
import Cookies from "js-cookie";

export const LecturerNotification: FC = () => {
  const { lecturer, google } =
    useContext<IDataObject>(FetchUserDataContext);
  const tokenLecturer = Cookies.get("lecturer-token");
  const googleTokenLecturer = Cookies.get("lecturer-google");

  return (
    <>
      <DashboardUI>
        <header className="flex items-center justify-between">
          <div>
            <DashboardHeader
              header="Notification"
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
      </DashboardUI>
    </>
  );
};
