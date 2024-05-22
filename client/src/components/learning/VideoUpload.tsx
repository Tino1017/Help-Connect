import React from "react";
import { BsCameraVideoFill as LearningIcon } from "react-icons/bs";


interface IVideoUpload {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

export const VideoUpload: React.FC<IVideoUpload> = ({ data }) => {
  //   console.log(data);
  return (
    <>
      <section className="bg-white rounded p-7">
        <header>
          <div className="flex items-center gap-3 text-lg">
            <span className="text-blue-950 text-base">
              <LearningIcon />
            </span>
            <span>Your Files</span>
          </div>
          <p className="text-xs opacity-50 mt-1">
            Track all your Files on this section
          </p>
        </header>

        <section className="mt-10 flex items-center gap-4 flex-wrap">
          {data.map((item) => (
            <div key={item._id} className="bg-slate-100 p-3 rounded">
              {/* <DocumentViewer
                fileData={item.fileData}
                fileName={item.fileProperties.name}
              /> */}
              <header className="flex items-center gap-3 mt-3">
                <span className="text-base">{item.videoProperties.name}</span>
              </header>
              <p className="text-sm opacity-50 mt-3">{item.videoDescription}</p>
              <p className="text-sm opacity-70 mt-2">
                {item.lecturer.firstName}
              </p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};
