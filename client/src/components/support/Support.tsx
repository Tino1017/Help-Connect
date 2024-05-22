import { FC } from "react";
import { StudentSupport } from "./StudentSupport";
import { LecturerSupport } from "./LecturerSupport";
import { PageNotFound } from "../UI/PageNotFound";
import Cookies from "js-cookie";

export const Support: FC = () => {
  const studentToken = Cookies.get("student-token");
  const lecturerToken =  Cookies.get("lecturer-token");

  return studentToken ? (
    <StudentSupport />
  ) : lecturerToken ? (
    <LecturerSupport />
  ) : (
    <PageNotFound />
  );
};
