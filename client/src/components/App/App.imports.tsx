import React from "react";
import { Landing } from "../Landing/Landing";
import { StudentLogin } from "../account/student/Login.student";
import { StudentRegister } from "../account/student/Register.student";
import { LecturerLogin } from "../account/lecturer/Lecturer.login";
import { LecturerRegister } from "../account/lecturer/Lecturer.register";
import { PageNotFound } from "../UI/PageNotFound";
import { AccountOptionsLogin } from "../account/AccountOptions.login";
import { AccountOptionsRegister } from "../account/AccountOptions.register";
import { VerifyEmail } from "../account/email/VerifyEmail";
import { RegisterService } from "../account/service/Register.service";
import { LoginService } from "../account/service/Login.service";
import { MoreInfoLecturer } from "../account/lecturer/MoreInfo.lecturer";
import { MoreInfoStudent } from "../account/student/MoreInfo.student";
import { VerifyEmailPin } from "../account/email/VerifyEmail.pin";

import { DashboardService } from "../account/service/Dashboard.service";
import { DashBoardStudent } from "../dashboard/student/Dashboard.student";
import { DashBoardLecturer } from "../dashboard/lecturer/Dashboard.lecturer";
import { Planning } from "../planner/Planning";
import { Community } from "../community/Community";
import { Notification } from "../notification/Notification";
import { Profile } from "../profile/Profile";
import { Support } from "../support/Support";
import { DashBoardHandler } from "../dashboard/Dashboard.handler";
import { LecturerLive } from "../learning/video/LecturerLive";
import { StudentView } from "../learning/video/StudentView";
import { LecturerView } from "../learning/video/LecturerView";
import { Creator } from "../learning/Creator";
import { Project } from "../project/Project";

export { React };

export {
  DashBoardHandler,
  Planning,
  Notification,
  Community,
  Profile,
  Support,
  LecturerLive,
  StudentView,
  LecturerView,
  Creator,
  Project,
};

export {
  Landing,
  StudentLogin,
  StudentRegister,
  LecturerRegister,
  LecturerLogin,
  PageNotFound,
  AccountOptionsLogin,
  AccountOptionsRegister,
  VerifyEmail,
  RegisterService,
  LoginService,
  MoreInfoLecturer,
  MoreInfoStudent,
  VerifyEmailPin,
};

export { DashBoardStudent, DashBoardLecturer, DashboardService };
