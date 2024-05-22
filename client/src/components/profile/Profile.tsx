import { FC } from "react";
import { StudentProfile } from "./StudentProfile";
import { LecturerProfile } from "./LecturerProfile";
import { PageNotFound } from "../UI/PageNotFound";
import Cookies from "js-cookie";

export const Profile: FC = () => {
  const studentToken = Cookies.get("student-token");
  const lecturerToken = Cookies.get("lecturer-token");

  return studentToken ? (
    <StudentProfile />
  ) : lecturerToken ? (
    <LecturerProfile />
  ) : (
    <PageNotFound />
  );
};
