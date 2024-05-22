import { FC, useContext } from "react";
import { DashboardUI } from "../UI/DashboardUI";
import { PostComponent } from "./Post";
import { IDataObject } from "../../context/Context.config";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { DashboardHeader } from "../UI/DashboardHeader";
import { greetUserBasedOnTime } from "../../global/Functions.global";

export const LecturerCommunity: FC = () => {
  const { lecturer } = useContext<IDataObject>(FetchUserDataContext);
  return (
    <>
      <DashboardUI>
        <header className="flex items-center justify-between">
          <div>
            <DashboardHeader
              header="Community"
              stylesHeader="text-2xl mb-1 font-bold"
              stylesSubHeader="text-xs opacity-50"
              subHeader={greetUserBasedOnTime(lecturer.firstName)}
            />
          </div>
        </header>
        <PostComponent />
      </DashboardUI>
    </>
  );
};
