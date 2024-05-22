import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { BiSolidLike as LikeIcon, BiLike as UnlikeIcon } from "react-icons/bi";
import { FaGraduationCap as AssistIcon } from "react-icons/fa6";
import { IDataObject } from "../../context/Context.config";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { successNotification } from "../../global/ToastNotification.function";
// import {
//   FaHandshake as UsefulIcon,
//   FaHandshakeSlash as UnUsefulIcon,
// } from "react-icons/fa6";

interface IPostText {
  username: string;
  postHeader: string;
  postTime: string;
  isImage: boolean;
  imageURL: string;
  alt: string;
}

export const PostText: React.FC<IPostText> = ({
  username,
  postTime,
  postHeader,
  isImage,
  imageURL,
  alt,
}) => {
  const { lecturer } = useContext<IDataObject>(FetchUserDataContext);
  const [likeCounter, setLikeCounter] = useState<number>(0);
  const tokenLecturer = Cookies.get("lecturer-token");
  const [isAssist, setIstAssist] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [yourName, setYourName] = useState<string>("");
  const [meetingId, setMeetingId] = useState<string>("");
  // const [usefulCounter, setUsefulCounter] = useState<number>(0);
  function likesHandler() {
    setLikeCounter(likeCounter + 1);
  }

  function unlikeHandler() {
    if (likeCounter === 0) return;

    setLikeCounter(likeCounter - 1);
  }

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const res = await axios.post("/api/assist", {meetingId, yourName, email, lecturerEmail: lecturer.email});
      if(res.data) {
        successNotification(res.data.message)
        setIstAssist(false)
      }
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // async function assistHandler() {
  //   try {
  //     const res = await axios.post("/api/assist")
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // function usefulHandler() {
  //   setUsefulCounter(usefulCounter + 1);
  // }

  // function unUsefulHandler() {
  //   if (usefulCounter === 0) return;

  //   setUsefulCounter(usefulCounter - 1);
  // }

  return (
    <>
      <section className="w-full flex items-center flex-col gap-4">
        <section className="bg-white w-1/2 rounded-xl py-6 px-7 drop-shadow-sm">
          <header className="flex items-center gap-3">
            {isImage ? (
              <img
                className="h-12 w-12 rounded-full"
                src={imageURL}
                alt={alt}
              />
            ) : (
              <div className="h-12 w-12 bg-red-500 rounded-full"></div>
            )}
            <div>
              <p className="text-base mb-1 text-gray-500">{username}</p>
              <p className="text-xs opacity-50">{postTime}</p>
            </div>
          </header>
          <section className="mt-4">
            <p className="text-sm text-gray-700">{postHeader}</p>
          </section>

          <section className="mt-5 flex items-center gap-3">
            {likeCounter >= 1 ? (
              <button
                onClick={unlikeHandler}
                type="submit"
                className="flex px-3 items-center gap-2 bg-red-200 p-2 text-slate-600"
              >
                <span>
                  <LikeIcon />
                </span>
                <span className="text-sm">Like {likeCounter}</span>
              </button>
            ) : (
              <button
                onClick={likesHandler}
                type="submit"
                className="flex px-3 items-center gap-2 bg-red-200 p-2 text-slate-600"
              >
                <span>
                  <UnlikeIcon />
                </span>
                <span className="text-sm">Like {likeCounter}</span>
              </button>
            )}
            {tokenLecturer && (
              <button
                type="submit"
                onClick={() => setIstAssist(true)}
                className="flex px-3 items-center gap-2 bg-slate-200 p-2 text-slate-600"
              >
                <span>
                  <AssistIcon />
                </span>
                <span className="text-sm">Assist</span>
              </button>
            )}

            {/* {usefulCounter >= 1 ? (
              <button
                type="submit"
                onClick={unUsefulHandler}
                className="flex px-3 items-center gap-2 bg-sky-200 p-2 text-slate-600"
              >
                <span>
                  <UsefulIcon />
                </span>
                <span className="text-sm">Useful {usefulCounter}</span>
              </button>
            ) : (
              <button
                type="submit"
                onClick={usefulHandler}
                className="flex px-3 items-center gap-2 bg-sky-200 p-2 text-slate-600"
              >
                <span>
                  <UnUsefulIcon />
                </span>
                <span className="text-sm">Useful {usefulCounter}</span>
              </button>
            )}  */}
          </section>
        </section>
      </section>
      {isAssist && (
        <section className="absolute top-0 left-0 h-screen w-full bg-opacity-60 bg-black z-[999999999] flex items-center justify-center">
          <section className="bg-white w-1/2 p-3 rounded">
            <header className="flex items-center justify-between">
              <div>
                <h1 className="text-lg text-gra-600">Assist student</h1>
                <p className="text-xs opacity-60">
                  assist students with video call{" "}
                </p>
              </div>
              <button
                className="bg-red-500 text-sm p-2 rounded"
                type="submit"
                onClick={() => setIstAssist(false)}
              >
                Close
              </button>
            </header>

            <form
              onSubmit={(e) => submitHandler(e)}
              className="mt-7 w-full flex items-center flex-col gap-3"
            >
              <input
                type="text"
                className="outline-none text-sm p-2 bg-slate-100 w-full rounded border border-slate-500"
                placeholder="Enter meeting ID"
                value={meetingId}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMeetingId(e.target.value)
                }
              />
              <input
                type="text"
                className="outline-none text-sm p-2 bg-slate-100 w-full rounded border border-slate-500"
                placeholder="Enter your name"
                value={yourName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setYourName(e.target.value)
                }
              />
              <input
                type="email"
                className="outline-none text-sm p-2 bg-slate-100 w-full rounded border border-slate-500"
                placeholder="Enter email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <button
                className="outline-none text-sm p-2 bg-blue-500 w-full rounded text-white"
                type="submit"
              >
                Assist
              </button>
            </form>
          </section>
        </section>
      )}
    </>
  );
};
