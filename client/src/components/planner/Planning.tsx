import { FC } from "react";
import { StudentPlanning } from "./StudentPlanner";
import { LecturerPlanning } from "./LecturerPlanner";
import { PageNotFound } from "../UI/PageNotFound";
import Cookies from "js-cookie";

export const Planning: FC = () => {
  const lecturerToken = Cookies.get("lecturer-token");
  const studentToken = Cookies.get("student-token")

  return lecturerToken ? <LecturerPlanning /> : studentToken ? <StudentPlanning /> : <PageNotFound />;
};
