import { FC, useContext } from "react";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { DashboardHeader } from "../UI/DashboardHeader";
import { DisplayPlanner } from "./DisplayPlanner";
import { DashboardUI } from "../UI/DashboardUI";
import Cookies from "js-cookie";

export const StudentPlanning: FC = () => {
  const { student, google } = useContext<IDataObject>(FetchUserDataContext);
  const tokenStudent = Cookies.get("student-token");
  const googleTokenStudent = Cookies.get("student-google");
  

  return (
    <>
      <DashboardUI>
        <header className="flex items-center justify-between">
          <div>
            <DashboardHeader
              header="Planning"
              stylesHeader="text-2xl mb-1 font-bold"
              stylesSubHeader="text-xs opacity-50"
              subHeader={greetUserBasedOnTime(
                tokenStudent
                  ? student.firstName
                  : googleTokenStudent
                  ? google.names
                  : ""
              )}
            />
          </div>
        </header>

        <section className="mt-10">
          <DisplayPlanner />
        </section>
      </DashboardUI>
    </>
  );
};
