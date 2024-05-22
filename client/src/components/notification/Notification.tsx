import { FC } from "react";
import { StudentNotification } from "./StudentNotification";
import { LecturerNotification } from "./LecturerNotifications";
import { PageNotFound } from "../UI/PageNotFound";
import Cookies from "js-cookie";

export const Notification: FC = () => {
  const studentToken = Cookies.get("student-token");
  const lecturerToken = Cookies.get("lecturer-token");

  return studentToken ? (
    <StudentNotification />
  ) : lecturerToken ? (
    <LecturerNotification />
  ) : (
    <PageNotFound />
  );
};
