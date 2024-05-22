import React from "react";

interface IVideoViewer {
  videoData: string;
  fileName: string;
}

export const VideoViewer: React.FC<IVideoViewer> = ({
  videoData,
  fileName,
}) => {
  return (
    <video autoPlay controls>
      <source src={videoData} type={fileName} />
    </video>
  );
};
