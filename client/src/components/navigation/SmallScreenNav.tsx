import React from "react";
import { BiSolidDashboard as DashboardIcon } from "react-icons/bi";
import { BsCameraVideoFill as LearningIcon } from "react-icons/bs";
import {
  IoNotifications as NotificationIcon,
  IoLogOut as LogoutIcon,
} from "react-icons/io5";
import { BsFillCalendarCheckFill as PlannerIcon } from "react-icons/bs";
import { MdContactSupport as SupportIcon } from "react-icons/md";
import {
  HiUserGroup as CommunityIcon,
  HiUser as StudentIcon,
  HiDocumentText as DocumentIcon,
} from "react-icons/hi2";
import { FaUserTie as LecturerIcon } from "react-icons/fa6";
import HELP_CONNECT_VERSION from "../../../package.json";
import { LinkNav } from "./LinkNav";
import Cookies from "js-cookie";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const SmallScreenNav: React.FC = () => {
  const studentToken = Cookies.get("student-token");
  const lecturerToken = Cookies.get("lecturer-token");
  const navigate: NavigateFunction = useNavigate();

  function logoutLecturer() {
    Cookies.remove("lecturer-token");
    // window.location.reload();
    navigate("/account/login-choice", { replace: true });
  }

  function logoutStudent() {
    Cookies.remove("student-token");
    // window.location.reload();
    navigate("/account/login-choice", { replace: true });
  }

  return (
    <div className="absolute left-0 z-[99999] px-5 py-5 bg-[#f6f6f6] h-[84.5vh] mt-5 w-full">
      <section>
        <h1 className="text-sm">Main</h1>
        <ul>
          <li className="mt-2">
            <LinkNav path="/dashboard" name="Dashboard">
              <DashboardIcon />
            </LinkNav>
          </li>
          <li className="mt-2">
            <LinkNav path="/room" name={"The room"}>
              <LearningIcon />
            </LinkNav>
          </li>
          <li className="mt-2">
            <LinkNav
              path={studentToken ? "/project" : lecturerToken ? "/creator" : ""}
              name={studentToken ? "Projects" : lecturerToken ? "Creator" : ""}
            >
              <DocumentIcon />
            </LinkNav>
          </li>
          <li className="mt-2">
            <LinkNav path="/planning" name="My Planning">
              <span className="text-[0.9rem]">
                <PlannerIcon />
              </span>
            </LinkNav>
          </li>
          <li className="mt-2">
            <LinkNav path="/notification" name="Notifications">
              <NotificationIcon />
            </LinkNav>
          </li>
          <li className="mt-2">
            <LinkNav path="/community" name="Community">
              <CommunityIcon />
            </LinkNav>
          </li>
          <li className="mt-2">
            <LinkNav path="/profile" name="Profile">
              {studentToken ? (
                <StudentIcon />
              ) : lecturerToken ? (
                <LecturerIcon />
              ) : null}
            </LinkNav>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h1 className="text-sm">More settings</h1>
        <ul>
          <li className="mt-2">
            <LinkNav path="/support" name="Help & support">
              <SupportIcon />
            </LinkNav>
          </li>
          {studentToken ? (
            <li className="mt-2">
              <button
                type="submit"
                onClick={logoutStudent.bind(this)}
                className={`flex gap-2 items-center w-full p-2 rounded transition-all duration-700 ease-linear hover:bg-slate-300`}
              >
                <span className="text-slate-500">
                  <LogoutIcon />
                </span>
                <span className="text-sm text-gray-600">Log out</span>
              </button>
            </li>
          ) : lecturerToken ? (
            <li className="mt-2">
              <button
                type="submit"
                onClick={logoutLecturer.bind(this)}
                className={`flex gap-2 items-center w-full p-2 rounded transition-all duration-700 ease-linear hover:bg-slate-300`}
              >
                <span className="text-slate-500">
                  <LogoutIcon />
                </span>
                <span className="text-sm text-gray-600">Log out</span>
              </button>
            </li>
          ) : null}
          <li className="mt-7 text-xs opacity-30">
            Help connect version {HELP_CONNECT_VERSION.version}
          </li>
        </ul>
      </section>
    </div>
  );
};
