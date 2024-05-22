import React, {
  DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES,
} from "react";
// import { useNavigate } from "react-router-dom";

import {
  DashBoardHelper,
  DashBoardLecturer,
  DashBoardStudent,
} from "./Dashboard.imports";
import Cookies from "js-cookie";

export const DashBoardHandler: React.FC = () => {
  const studentToken = Cookies.get("student-token");
  const lecturerToken = Cookies.get("lecturer-token");
  const helperToken = Cookies.get("helper-token");
  // const navigate = useNavigate();

  const option:
    | "student"
    | "lecturer"
    | "helper"
    | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES
    | undefined = studentToken
    ? "student"
    : lecturerToken
    ? "lecturer"
    : helperToken && "helper";

  if (option === "student") {
    return <DashBoardStudent />;
  } else if (option === "helper") {
    return <DashBoardHelper />;
  } else if (option === "lecturer") {
    return <DashBoardLecturer />;
  }
};
