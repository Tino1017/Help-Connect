import React, { useContext, useEffect, useState } from "react";
import { BsFillSendFill as SendIcon } from "react-icons/bs";
import { BsFillFileEarmarkImageFill as ImageIcon } from "react-icons/bs";
import { PostImage } from "./PostImage";
import { PostText } from "./PostText";
import { UploadImageModal } from "./UploadImageModal";
import {
  failedNotification,
  successNotification,
} from "../../global/ToastNotification.function";
import Cookies from "js-cookie";
import { IDataObject } from "../../context/Context.config";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import axios from "axios";
// import { UploadVideoModal } from "./UploadVideoModal";

interface IPost {
  _id: string;
  postType: string;
  postID: string;
  content: string;
  updatedAt: string;
  creator: {
    firstName: string;
    lastName: string;
    fileData: string;
    imageProperties: {
      filename: string;
      fileData: string;
    };
  };
}

export const PostComponent: React.FC = () => {
  const [isUploadImageModal, setIsUploadImageModal] = useState<boolean>(false);
  // const [isUploadVideoModal, setIsUploadVideoModal] = useState<boolean>(false);
  const [textPost, setTextPost] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const tokenStudent = Cookies.get("student-token");
  const [postData, setPostData] = useState<Array<IPost>>([]);
  const [postImageData, setPostImageData] = useState<Array<IPost>>([]);
  const { student } = useContext<IDataObject>(FetchUserDataContext);

  async function HttpCreatePost(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const email = student.email;

      if (!textPost) {
        failedNotification("Post is required");
      } else if (textPost.length < 3) {
        failedNotification("Post must be at least 3 characters");
      } else {
        const response = await axios.post("/api/post/create", {
          post: textPost,
          creator: email,
        });

        response.data ? successNotification(response.data.message) : null;
        // console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Helper function to pad a number with leading zeros if it's a single digit
  function padZero(num: number) {
    return num < 10 ? `0${num}` : num.toString();
  }
  function displayTime(time: string) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format the time as HH:MM:SS
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}`;

    return formattedTime;
  }

  useEffect(() => {
    async function getPost() {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/post/get");
        setPostData(response.data);
        // console.log(response.data)
        setIsLoading(false);
      } catch (error) {
        failedNotification("Something went wrong");
      }
    }

    getPost();
  }, []);

  useEffect(() => {
    async function getPost() {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/post/get-image");
        setPostImageData(response.data);
        // console.log(response)
        // console.log(response.data)
        setIsLoading(false);
      } catch (error) {
        failedNotification("Something went wrong");
      }
    }

    getPost();
  }, []);

  // console.log(postData.map((post) => post.content));
  // console.log(postImageData);

  return (
    <section>
      {tokenStudent && (
        <>
          <form
            className="bg-white rounded-xl drop-shadow-lg p-2 flex items-center"
            onSubmit={(e) => HttpCreatePost(e)}
          >
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Whats on mind ?"
                value={textPost}
                onChange={(e) => setTextPost(e.target.value)}
                className="text-sm p-2 w-full flex-1 outline-none px-2"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-950 text-white p-2 rounded"
            >
              <span>
                <SendIcon />
              </span>
              <span>Post</span>
            </button>
          </form>
          <button
            type="submit"
            onClick={() => setIsUploadImageModal(true)}
            className="flex items-center gap-2 bg-slate-200 p-2 text-slate-600 rounded mt-6"
          >
            <span>
              <ImageIcon />
            </span>
            <span className="text-sm">Upload image</span>
          </button>
        </>
      )}

      {isLoading ? (
        <p className="mt-10">Loading</p>
      ) : (
        <section className="">
          {postData.map((post) => (
            <section className="flex items-center flex-col mx-auto mt-8 gap-6">
              {post.postType === "post-text" && (
                <div key={post._id} className="w-full">
                  <PostText
                    username={`${post.creator.firstName} ${post.creator.lastName}`}
                    postTime={displayTime(post.updatedAt)}
                    postHeader={post.content}
                    isImage={
                      post.creator.imageProperties.fileData ? true : false
                    }
                    imageURL={post.creator.imageProperties.fileData}
                    alt={post.creator.imageProperties.filename}
                  />
                </div>
              )}
            </section>
          ))}

          {postImageData.map((post) => (
            <section className="flex items-center flex-col mx-auto mt-8 gap-6">
              {post.postType === "post-image" && (
                <div key={post._id} className="w-full mx-auto">
                  <PostImage
                    username={`${post.creator.firstName} ${post.creator.lastName}`}
                    postTime={displayTime(post.updatedAt)}
                    postHeader={post.content}
                    children={
                      <img
                        src={post.creator.imageProperties.fileData}
                        alt={post.creator.imageProperties.filename}
                      />
                    }
                    isImage={
                      post.creator.imageProperties.fileData ? true : false
                    }
                    imageURL={post.creator.imageProperties.fileData}
                    alt={post.creator.imageProperties.filename}
                  />
                </div>
              )}
            </section>
          ))}
        </section>
      )}

      {isUploadImageModal && (
        <section className="absolute h-screen top-0 left-0 w-full flex items-center justify-center bg-opacity-70 bg-black">
          <UploadImageModal
            email={student.email as string}
            setIsUploadImageModal={setIsUploadImageModal}
          />
        </section>
      )}
    </section>
  );
};
