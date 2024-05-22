import React, { useContext, useEffect, useState } from "react";
import { FetchUserDataContext } from "../../../context/FetchUserData.context";
import { IDataObject } from "../../../context/Context.config";
import { greetUserBasedOnTime } from "../../../global/Functions.global";
import { IoNotifications as NotificationIcon } from "react-icons/io5";
import { RiFilePaper2Fill as WriteIcon } from "react-icons/ri";
import {
  HiUser as ProfileIcon,
  // HiUserGroup as CommunityIcon,
} from "react-icons/hi2";
import {
  // BsCameraVideoFill as LearningIcon,
  BsFillCalendarEventFill as EventIcon,
} from "react-icons/bs";
import { BiSolidReport as ReportIcon } from "react-icons/bi";
import { DashboardHeader } from "../../UI/DashboardHeader";
import { DashboardUI } from "../../UI/DashboardUI";
import { LecturerTracker } from "../../UI/LecturerTracker";
import Cookies from "js-cookie";
import { RiMenu3Fill as MenuIcon } from "react-icons/ri";
import { CgClose as MenuCloseIcon } from "react-icons/cg";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { SmallScreenNav } from "../../navigation/SmallScreenNav";
import axios from "axios";

export const DashBoardLecturer: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [announcementData, setAnnouncementData] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [eventData, setEventData] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [documentData, setDocumentData] = useState<any[]>([]);
  const { lecturer, isLoading, google } =
    useContext<IDataObject>(FetchUserDataContext);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const tokenLecturer = Cookies.get("lecturer-token");
  const googleTokenLecturer = Cookies.get("lecturer-google");
  const navigate: NavigateFunction = useNavigate();

  function navigateToNotification(): void {
    navigate("/notification");
  }

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
    async function HttpGetAnnouncement() {
      const announcementRes = await axios.get("/api/fetch-announcement");
      const data = announcementRes.data;
      setAnnouncementData(data);
    }
    HttpGetAnnouncement();
  }, []);

  useEffect(() => {
    async function HttpGetEvent() {
      const eventRes = await axios.get("/api/fetch-event");
      const data = eventRes.data;
      setEventData(data);
    }
    HttpGetEvent();
  }, []);

  useEffect(() => {
    async function HttpGetDocument() {
      const documentRes = await axios.get("/api/fetch-document");
      const data = documentRes.data;
      setDocumentData(data);
    }
    HttpGetDocument();
  }, []);


  if (isLoading && lecturer) {
    return <p>Loading....</p>;
  } else {
    return (
      <>
        <DashboardUI>
          <header className="flex items-center justify-between">
            <div>
              <DashboardHeader
                header="Dashboard"
                stylesHeader="text-2xl mb-1 font-bold"
                stylesSubHeader="text-xs opacity-50"
                subHeader={greetUserBasedOnTime(
                  tokenLecturer
                    ? lecturer.firstName
                    : googleTokenLecturer
                    ? google.names
                    : ""
                )}
              />
            </div>
            <div className="flex items-center gap-3">
              {/* <div className="h-10 hide w-10 flex items-center justify-center text-2xl rounded-full bg-slate-200">
                <div className="px-2 py-1 text-2xl text-slate-500">
                  <NotificationIcon />
                </div>
              </div> */}
              {lecturer.imageProperties?.fileData ? (
                <img
                  src={lecturer.imageProperties.fileData}
                  alt={lecturer.imageProperties.filename}
                  className="h-10 w-10 border rounded-full"
                />
              ) : googleTokenLecturer ? (
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
          {isOpenMenu && <SmallScreenNav />}
          <div
            onClick={navigateToNotification}
            className="menu absolute rounded-full flex items-center justify-center bottom-5 h-12 w-12 text-white z-[99999999] right-5 bg-blue-950"
          >
            <div className="px-2 py-1 text-2xl ">
              <NotificationIcon />
            </div>
          </div>
          <section className="mt-10 flex gap-3">
            <section className="flex-1 flex flex-col gap-3">
              <section className="flex flex-wrap gap-3">
                <section className="bg-white p-5 rounded border flex flex-col flex-wrap flex-1">
                  <DashboardHeader
                    header="Lecturer Statistics"
                    subHeader="Here you will find statistics based on your content"
                  />
                  <section className="mt-7 flex gap-3 items-center">
                    <section className="flex flex-wrap gap-2">
                      <LecturerTracker
                        header={`${
                          documentData ? documentData.length : 0
                        } Documents`}
                        bgStyle="bg-violet-50 hover:cursor-pointer"
                        iconStyle="text-violet-500"
                        explanation="Track how many students are enrolled in your course. You'll get some motivation"
                        children={<ReportIcon />}
                      />

                      <LecturerTracker
                        header={`${
                          announcementData ? announcementData.length : 0
                        } Announcements`}
                        bgStyle="bg-violet-50 hover:cursor-pointer"
                        iconStyle="text-violet-500"
                        styles="text-3xl"
                        explanation="Track how many students have comments in your course. You'll get some motivation"
                        children={<WriteIcon />}
                      />
                      <LecturerTracker
                        header={`${eventData ? eventData.length : 0} Events`}
                        bgStyle="bg-indigo-50 hover:cursor-pointer"
                        iconStyle="text-indigo-500"
                        explanation="Track how many ratings you already have so far. You'll get some motivation"
                        styles="text-3xl"
                        children={<EventIcon />}
                      />
                      {/* <LecturerTracker
                        header={`0 Video`}
                        bgStyle="bg-blue-50"
                        iconStyle="text-blue-500"
                        explanation="Track how many videos you have already posted so far. You'll get some motivation"
                        styles="text-3xl"
                      >
                        <LearningIcon />
                      </LecturerTracker> */}
                    </section>
                  </section>
                </section>
              </section>
              <section className="flex flex-wrap gap-3">
                <section className="bg-white flex-1 p-5 rounded border">
                  <DashboardHeader
                    header="Lecturer events"
                    subHeader="Here you will find listing of all events so that you created"
                  />
                  <section className="mt-7 mb-3">
                    {eventData.map((item) => (
                      <div
                        key={item._id}
                        className="bg-slate-100 p-3 rounded-xl"
                      >
                        <header className="flex items-center">
                          <div className="flex-1 flex items-center gap-2">
                            <span className="text-indigo-500">
                              <EventIcon />
                            </span>
                            <h1 className="text-sm text-gray-600">
                              {item.eventTopic}
                            </h1>
                          </div>
                          <p className="text-xs">
                            {showCreated(item.updatedAt)}
                          </p>
                        </header>
                      </div>
                    ))}
                  </section>
                </section>
                <section className="bg-white p-5 flex-1 rounded border">
                  <DashboardHeader
                    header="Latest announcements"
                    subHeader="Here you will find listing of all latest announcement that you created"
                  />
                  <section className="mt-7">
                    {announcementData.map((item) => (
                      <div
                        key={item._id}
                        className="bg-slate-100 p-3 rounded-xl"
                      >
                        <header className="flex items-center">
                          <div className="flex-1 flex items-center gap-2">
                            <span className="text-violet-500">
                              <WriteIcon />
                            </span>
                            <h1 className="text-sm text-gray-600">
                              {item.announcementTopic}
                            </h1>
                          </div>
                          <p className="text-xs">
                            {showCreated(item.updatedAt)}
                          </p>
                        </header>
                      </div>
                    ))}
                  </section>
                </section>
              </section>
              <section className="flex gap-3 flex-wrap">
                <section className="bg-white p-5 rounded border flex-1">
                  <DashboardHeader
                    header="Track history"
                    subHeader=" Here you will find all your history so that you can keep
                      track."
                  />
                  <section className="mt-7 flex flex-col gap-3">
                    {announcementData.map((item) => (
                      <div
                        key={item._id}
                        className="bg-slate-100 p-3 rounded-xl"
                      >
                        <header className="flex items-center">
                          <div className="flex-1 flex items-center gap-2">
                            <span className="text-indigo-500">
                              <WriteIcon />
                            </span>
                            <h1 className="text-sm text-gray-600">
                              {item.announcementTopic}
                            </h1>
                          </div>
                          <p className="text-xs">
                            {showCreated(item.updatedAt)}
                          </p>
                        </header>
                      </div>
                    ))}
                    {eventData.map((item) => (
                      <div
                        key={item._id}
                        className="bg-slate-100 p-3 rounded-xl"
                      >
                        <header className="flex items-center">
                          <div className="flex-1 flex items-center gap-2">
                            <span className="text-indigo-500">
                              <EventIcon />
                            </span>
                            <h1 className="text-sm text-gray-600">
                              {item.eventTopic}
                            </h1>
                          </div>
                          <p className="text-xs">
                            {showCreated(item.updatedAt)}
                          </p>
                        </header>
                      </div>
                    ))}
                    {documentData.map((item) => (
                      <div
                        key={item._id}
                        className="bg-slate-100 p-3 rounded-xl"
                      >
                        <header className="flex items-center">
                          <div className="flex-1 flex items-center gap-2">
                            <span className="text-indigo-500">
                              <ReportIcon />
                            </span>
                            <h1 className="text-sm text-gray-600">
                              {item.fileProperties.name}
                            </h1>
                          </div>
                          <p className="text-xs">
                            {showCreated(item.updatedAt)}
                          </p>
                        </header>
                      </div>
                    ))}
                  </section>
                </section>
              </section>
            </section>
          </section>
        </DashboardUI>
      </>
    );
  }
};
