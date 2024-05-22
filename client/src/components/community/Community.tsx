import { FC } from "react";
import { StudentCommunity } from "./StudentCommunity";
import { LecturerCommunity } from "./LecturerCommunity";
import { PageNotFound } from "../UI/PageNotFound";
import Cookies from "js-cookie";

export const Community: FC = () => {
  const studentToken = Cookies.get("student-token");
  const lecturerToken = Cookies.get("lecturer-token");

  return studentToken ? (
    <StudentCommunity />
  ) : lecturerToken ? (
    <LecturerCommunity />
  ) : (
    <PageNotFound />
  );
};
