import { FC, useContext } from "react";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { DashboardHeader } from "../UI/DashboardHeader";
import { DashboardUI } from "../UI/DashboardUI";
import { HiUser as StudentIcon } from "react-icons/hi2";
import Cookies from "js-cookie";

export const LecturerProfile: FC = () => {
  const { lecturer, google } = useContext<IDataObject>(FetchUserDataContext);
  const {
    firstName,
    address,
    bio,
    email,
    idNumber,
    lastName,
    phone,
    whatYouTeach,
    imageProperties,
  } = lecturer;
  const tokenLecturer = Cookies.get("lecturer-token");
  const googleTokenLecturer = Cookies.get("lecturer-google");

  function displayData(header: string, data: string): string | JSX.Element {
    return (
      <p className="mt-5 text-gray-800 flex items-center gap-2">
        <span className="font-medium">{header}: </span>
        <span className="opacity-90">{data}</span>
      </p>
    );
  }

  return (
    <>
      <DashboardUI>
        <header className="flex items-center justify-between">
          <div>
            <DashboardHeader
              header="Profile"
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
        <section className="flex items-center justify-center">
          <section className="mt-10 bg-white p-5 w-[50%] rounded">
            <div>
              {imageProperties?.fileData ? (
                <img
                  src={imageProperties?.fileData}
                  alt={imageProperties?.filename}
                  className="h-48 w-48 rounded-full border mx-auto"
                />
              ) : googleTokenLecturer ? (
                <img
                  src={google.profile}
                  alt={google.names}
                  className="h-48 w-48 rounded-full border mx-auto"
                />
              ) : (
                <section>
                  <div className="h-40 w-40 rounded-full bg-slate-200 flex items-center justify-center mx-auto">
                    <span className="text-6xl">
                      <StudentIcon />
                    </span>
                  </div>
                </section>
              )}
            </div>
            {tokenLecturer ? (
              <section>
                {displayData("First Name", firstName as string)}
                {displayData("Last Name", lastName as string)}
                {displayData("Phone Number", phone as string)}
                {displayData("Email Address", email as string)}
                {displayData("Address", address as string)}
                {displayData("ID Number", idNumber as string)}
                {displayData(`${firstName} teaches`, whatYouTeach as string)}
                {displayData("Bio", bio as string)}
              </section>
            ) : (
              <section>
                {displayData("Names", google.names as string)}
                {google.email
                  ? displayData("Email", "Unknown")
                  : displayData("Email", google.email as string)}
              </section>
            )}
          </section>
        </section>
      </DashboardUI>
    </>
  );
};
