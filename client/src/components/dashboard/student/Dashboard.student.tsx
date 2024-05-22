import React, { useContext, useState, useEffect } from "react";
// import { useNavigate, NavigateFunction } from "react-router-dom";
import { FetchUserDataContext } from "../../../context/FetchUserData.context";
import { IDataObject } from "../../../context/Context.config";
import { greetUserBasedOnTime } from "../../../global/Functions.global";
// import { IoNotifications as NotificationIcon } from "react-icons/io5";
import { HiUser as ProfileIcon } from "react-icons/hi2";
// import { IoIosAddCircle as AddIcon } from "react-icons/io";
import { IQuote, quoteStructure } from "../Dashboard.config";
import { DailyQuotes } from "../Dashboard.imports";
import { DashboardHeader } from "../../UI/DashboardHeader";
import { DashboardUI } from "../../UI/DashboardUI";
// import { Course } from "../../UI/Course";
import axios from "axios";
import { RiMenu3Fill as MenuIcon } from "react-icons/ri";
import { CgClose as MenuCloseIcon } from "react-icons/cg";
import Cookies from "js-cookie";
import { SmallScreenNav } from "../../navigation/SmallScreenNav";
// import { IoCloseSharp as CloseIcon } from "react-icons/io5";
import {
  // BsCameraVideoFill as LearningIcon,
  BsFillCalendarEventFill as EventIcon,
} from "react-icons/bs";
import { RiFilePaper2Fill as WriteIcon } from "react-icons/ri";

interface IEventData {
  _id: string;
  eventTopic: string;
  eventDescription: string;
  updatedAt: string;
}

interface IAnnouncementData {
  _id: string;
  announcementTopic: string;
  announcementDescription: string;
  updatedAt: string;
}

export const DashBoardStudent: React.FC = () => {
  // const [isAddingCourse, setIsAddingCourse] = useState<boolean>(false);
  const { student, isLoading, google } =
    useContext<IDataObject>(FetchUserDataContext);
  const [dailyQuote, setDailyQuote] = useState<IQuote>(quoteStructure);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [, setLecturerDocument] = useState<Array<any>>([]);
  const [lecturerEvent, setLecturerEvent] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [lecturerAnnouncement, setLecturerAnnouncement] = useState<Array<any>>(
    []
  );
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const tokenStudent = Cookies.get("student-token");
  const googleTokenStudent = Cookies.get("student-google");
  // const navigate: NavigateFunction = useNavigate();

  // function navigateToNotification(): void {
  //   navigate("/notification");
  // }

  function showCreated(date: string) {
    const created = new Date(date);
    const now = new Date();

    const diffTime = Math.abs(now.getTime() - created.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 1) {
      return "Today";
    } else if (diffDays < 1) {
      return "Yesterday";
    } else {
      return created.toLocaleDateString();
    }
  }

  useEffect(() => {
    async function HttpGetQuote() {
      const quoteRes = await axios.get("/api/get-quotes");
      const data = quoteRes.data;
      setDailyQuote(data.quote);
    }

    HttpGetQuote();
  }, []);

  useEffect(() => {
    async function HttpGetLecturer() {
      const lecturerDocumentsRes = await axios.get(
        "/api/fetch-lecturer-document"
      );
      const data = lecturerDocumentsRes.data;
      setLecturerDocument(data);
      console.log(data);
    }

    HttpGetLecturer();
  }, []);

  useEffect(() => {
    async function HttpGetLecturer() {
      const lecturerDocumentsRes = await axios.get("/api/fetch-lecturer-event");
      const data = lecturerDocumentsRes.data;
      setLecturerEvent(data);
      console.log(data);
    }

    HttpGetLecturer();
  }, []);

  useEffect(() => {
    async function HttpGetLecturer() {
      const lecturerDocumentsRes = await axios.get(
        "/api/fetch-lecturer-announcement"
      );
      const data = lecturerDocumentsRes.data;
      setLecturerAnnouncement(data);
      console.log(data);
    }

    HttpGetLecturer();
  }, []);

  if (isLoading && !student) {
    return <p>Loading....</p>;
  } else {
    return (
      <>
        <DashboardUI>
          <header className="flex relative dashboard-header items-center justify-between">
            <div>
              <DashboardHeader
                header="Dashboard"
                stylesHeader="text-2xl mb-1 font-bold"
                stylesSubHeader="text-xs opacity-50"
                subHeader={greetUserBasedOnTime(
                  tokenStudent
                    ? student.firstName
                    : googleTokenStudent
                    ? google.names
                    : ""
                )}
              />
            </div>
            <div className="flex items-center gap-3 hover:cursor-pointer">
              {/* <div className="h-10 hide w-10 flex items-center justify-center text-2xl rounded-full bg-slate-200">
                <div className="px-2 py-1 text-2xl text-slate-500">
                  <NotificationIcon />
                </div>
              </div> */}
              {student.imageProperties?.fileData ? (
                <img
                  src={student.imageProperties.fileData}
                  alt={student.imageProperties.filename}
                  className="h-10 w-10 border rounded-full"
                />
              ) : googleTokenStudent ? (
                <img
                  src={google.profile}
                  alt={google.names}
                  className="h-10 w-10 border rounded-full"
                />
              ) : (
                <div className="h-10 w-10 flex items-center justify-center text-xl rounded-full bg-slate-200">
                  <span className="text-slate-500">
                    <ProfileIcon />
                  </span>
                </div>
              )}
              <section className="menu">
                {!isOpenMenu ? (
                  <div
                    onClick={() => setIsOpenMenu(true)}
                    className="h-10 w-10 flex items-center justify-center text-2xl rounded-full bg-slate-200"
                  >
                    <span className="text-slate-600">
                      <MenuIcon />
                    </span>
                  </div>
                ) : (
                  <div
                    onClick={() => setIsOpenMenu(false)}
                    className="h-10 w-10 flex items-center justify-center text-2xl rounded-full bg-slate-200"
                  >
                    <span className="text-slate-600">
                      <MenuCloseIcon />
                    </span>
                  </div>
                )}
              </section>
            </div>
          </header>
          {isOpenMenu && (
            <section className="menu">
              <SmallScreenNav />
            </section>
          )}
          {/* <div
            onClick={navigateToNotification}
            className="menu absolute rounded-full flex items-center justify-center bottom-5 h-12 w-12 text-white z-[99999999] right-5 bg-blue-950"
          >
            <div className="px-2 py-1 text-2xl ">
              <NotificationIcon />
            </div>
          </div> */}
          <section className="mt-10 flex gap-3">
            <section className="flex-1 flex flex-wrap flex-col gap-3">
              {/* <section className="flex flex-wrap gap-3">
                <section className="bg-white p-5 rounded border flex flex-col flex-wrap flex-1">
                  <DashboardHeader
                    header="Courses overview"
                    subHeader="Here you will find the overview for the courses that you
                      will be studying."
                  />
                  <section className="mt-7 flex flex-wrap gap-3 items-center">
                    <div
                      onClick={() => setIsAddingCourse(true)}
                      className="h-48 course-media w-52 flex flex-col items-center justify-center bg-green-50 p-4 rounded transition-all duration-700 ease-linear hover:cursor-pointer hover:bg-green-100"
                    >
                      <span className="text-4xl text-green-500">
                        <AddIcon />
                      </span>
                      <h6 className="text-base mt-2">Add course</h6>
                      <p className="text-[0.6rem] opacity-50 mt-1 text-center">
                        You need to finish the current course in order to add a
                        new course. giving you extra lessons you wished for.
                      </p>
                    </div>
                    {isAddingCourse && (
                      <section className="absolute top-0 left-0 w-full h-screen bg-opacity-60 bg-black flex items-center justify-center">
                        <section className="bg-white w-1/2 p-4 rounded">
                          <header className="flex items-center justify-between">
                            <h1 className="text-base">Adding Course</h1>
                            <button
                              className="flex items-center text-sm bg-red-300 p-2"
                              onClick={() => setIsAddingCourse(false)}
                              type="submit"
                            >
                              <span>
                                <CloseIcon />
                              </span>
                              <span>Close</span>
                            </button>
                          </header>
                        </section>
                      </section>
                    )}
                    <section>
                      <Course
                        header={"Primary course"}
                        hoverStyle={"hover:bg-cyan-100 hover:cursor-pointer"}
                        explanation={
                          "You are currently enrolled in a primary course. And help connect wishes you all the best."
                        }
                        bgStyle={"bg-cyan-50"}
                        iconStyle={"text-cyan-500"}
                      />
                    </section>
                  </section>
                </section>
              </section> */}
              <section className="flex flex-wrap gap-3">
                <section className="bg-white flex-1 p-5 rounded border">
                  <DashboardHeader
                    header="Upcoming events"
                    subHeader=" Here you will find listing of all upcoming events so that you don't miss any."
                  />
                  <section className="mt-7">
                    {lecturerEvent.map((event: IEventData) => (
                      <div
                        key={event._id}
                        className="bg-slate-100 p-3 rounded-xl"
                      >
                        <header className="flex items-center">
                          <div className="flex-1 flex items-center gap-2">
                            <span className="text-indigo-500">
                              <EventIcon />
                            </span>
                            <h1 className="text-sm text-gray-600">
                              {event.eventTopic}
                            </h1>
                          </div>
                          <p className="text-xs">
                            {showCreated(event.updatedAt)}
                          </p>
                        </header>
                      </div>
                    ))}
                  </section>
                </section>
                <section className="bg-white p-5 flex-1 rounded border">
                  <DashboardHeader
                    header="Latest announcements"
                    subHeader="Here you will find listing of all latest announcement so
                      that you don't miss any."
                  />
                  <section className="mt-7">
                    {lecturerAnnouncement.map((announce: IAnnouncementData) => (
                      <div
                        key={announce._id}
                        className="bg-slate-100 p-3 rounded-xl"
                      >
                        <header className="flex items-center">
                          <div className="flex-1 flex items-center gap-2">
                            <span className="text-indigo-500">
                              <WriteIcon />
                            </span>
                            <h1 className="text-sm text-gray-600">
                              {announce.announcementTopic}
                            </h1>
                          </div>
                          <p className="text-xs">
                            {showCreated(announce.updatedAt)}
                          </p>
                        </header>
                      </div>
                    ))}
                  </section>
                </section>
                <section className="bg-white flex-1 p-5 rounded border">
                  <DashboardHeader header="Daily motivations" subHeader="" />
                  <section className="mt-3">
                    <DailyQuotes
                      author={dailyQuote.author && dailyQuote.author}
                      category={dailyQuote.category}
                      quote={dailyQuote.quote && dailyQuote.quote}
                    />
                  </section>
                </section>
              </section>
              {/* <section className="flex gap-3 flex-wrap">
                <section className="bg-white p-5 rounded border flex-1">
                  <DashboardHeader
                    header="Track history"
                    subHeader=" Here you will find all your history so that you can keep
                      track."
                  />
                  <section className="mt-7"></section>
                </section>
              </section> */}
            </section>
          </section>
        </DashboardUI>
      </>
    );
  }
};
