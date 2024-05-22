import { FC } from "react";
import { BsCameraVideoFill as LearningIcon } from "react-icons/bs";
import { HiUserGroup as CommunityIcon } from "react-icons/hi2";

interface ICourseDashboard {}

export const CourseDashboard: FC<ICourseDashboard> = () => {
  return (
    <div className="h-48 w-52 bg-white border p-4 rounded transition-all duration-700 ease-linear">
      <h6 className="text-base font-medium">Introduction to Web</h6>
      <p className="text-[0.6rem] opacity-50 my-3">
        You can add as many courses as you like. giving you extra lessons you
        wished for. best of luck
      </p>
      <div className="">
        <p className="text-xs mb-1 opacity-70">PROGRESS</p>
        <div className="flex items-center gap-1">
          <div className="h-2 w-full bg-slate-100 rounded-full">
            <div className="h-2 w-1/2 bg-slate-300 rounded-full"></div>
          </div>
          <span className="text-xs">50%</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <div className="flex items-center gap-1 text-gray-500">
          <span className="text-[0.9rem]">
            <LearningIcon />
          </span>
          <span className="text-xs">200</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <span className="text-[0.9rem]">
            <CommunityIcon />
          </span>
          <span className="text-xs">200</span>
        </div>
      </div>
    </div>
  );
};
