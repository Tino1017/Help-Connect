import React, { Dispatch, useState } from "react";
import { BsFillFileEarmarkImageFill as ImageIcon } from "react-icons/bs";
import { IoCloseSharp as CloseIcon } from "react-icons/io5";
import {
  failedNotification,
  successNotification,
} from "../../global/ToastNotification.function";
import axios from "axios";

interface IUploadImageModal {
  setIsUploadImageModal: Dispatch<React.SetStateAction<boolean>>;
  email: string;
}

export const UploadImageModal: React.FC<IUploadImageModal> = ({
  setIsUploadImageModal,
  email,
}) => {
  // const [level, setLevel] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [previewFileUpload, setPreviewFileUpload] = useState<string | null>(
    null
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      // Checking if file type is valid
      if (file.type.startsWith("image/")) {
        // Showing a preview of the image
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          const imageURL = e.target?.result as string;
          const maxSizeImage: number = 7 * 1024 * 1024;
          if (file && imageURL) {
            if (file.size > maxSizeImage) {
              failedNotification("Image cannot be more than 2MB");
            } else {
              setFileUpload(file);
              setPreviewFileUpload(imageURL);
            }
          }
        };

        reader.readAsDataURL(file);
      }
    } else {
      failedNotification("Please choose a valid image");
    }
  };

  async function CreatePostImage(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      if (!fileUpload || !message) {
        failedNotification("Fix all the error");
      } else {
        const data: {
          fileProperties: object;
          image: string;
          post: string;
          creator: string;
        } = {
          fileProperties: fileUpload,
          image: previewFileUpload as string,
          post: message,
          creator: email,
        };

        const response = (await axios.post("/api/post/create-image", data))
          .data;

        if (response) {
          setIsUploadImageModal(false);
          successNotification(response.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="h-auto w-1/2 bg-white p-6 rounded-xl">
        <header className="flex items-center justify-between">
          <h1 className="flex items-center gap-3">
            <span className="text-xl">
              <ImageIcon />
            </span>
            <span className="text-lg">Image post</span>
          </h1>
          <button
            className="flex items-center text-sm bg-red-300 p-2"
            onClick={() => setIsUploadImageModal(false)}
            type="submit"
          >
            <span>
              <CloseIcon />
            </span>
            <span>Close</span>
          </button>
        </header>

        <section className="mt-6">
          <form onSubmit={(e) => CreatePostImage(e)}>
            <label
              className="flex items-center justify-center bg-slate-200 text-sm p-2 hover:cursor-pointer gap-2 bg-slate-300p-2 rounded mb-3"
              htmlFor="video-post"
            >
              <span>
                <ImageIcon />
              </span>
              <span>{fileUpload ? fileUpload.name : "Upload Image"}</span>
              <input
                type="file"
                onChange={(e) => handleFileChange(e)}
                className="hidden"
                id="video-post"
                placeholder="video post"
              />
            </label>
            {/* <input
              type="text"
              placeholder="Which level are you in ?"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full bg-slate-100 text-gray-800 text-sm p-2 mb-3"
            /> */}
            <textarea
              placeholder="Whats on your mind"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-100 text-gray-800"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-blue-950 text-white text-sm p-2 rounded"
            >
              Create post
            </button>
          </form>
        </section>
      </section>
    </>
  );
};
