import { FC, useContext } from "react";
import { DashboardUI } from "../UI/DashboardUI";
import { PostComponent } from "./Post";
import { DashboardHeader } from "../UI/DashboardHeader";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";

export const StudentCommunity: FC = () => {
  const { student } = useContext<IDataObject>(FetchUserDataContext);
  return (
    <>
      <DashboardUI>
        <header className="flex relative dashboard-header items-center justify-between mb-10">
          <div>
            <DashboardHeader
              header="Community"
              stylesHeader="text-2xl mb-1 font-bold"
              stylesSubHeader="text-xs opacity-50"
              subHeader={greetUserBasedOnTime(student.firstName)}
            />
          </div>
        </header>
        <PostComponent />
      </DashboardUI>
    </>
  );
};
