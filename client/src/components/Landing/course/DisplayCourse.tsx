import React from "react";
import {
  AllCourse,
  Primary,
  Secondary,
  Tertiary,
  CourseNotFound,
} from "./Course.imports";

interface IDisplayCourse {
  isAllCourse: boolean;
  isPrimary: boolean;
  isSecondary: boolean;
  isTertiary: boolean;
}

export const DispalyCourses: React.FC<IDisplayCourse> = ({
  isAllCourse,
  isPrimary,
  isSecondary,
  isTertiary,
}) => {
  if (isAllCourse) {
    return <AllCourse />;
  } else if (isPrimary) {
    return <Primary />;
  } else if (isSecondary) {
    return <Secondary />;
  } else if (isTertiary) {
    return <Tertiary />;
  } else {
    return <CourseNotFound />;
  }
};
