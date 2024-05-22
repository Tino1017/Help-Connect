import { FC } from "react";
import { RiGraduationCapFill as CourseIcon } from "react-icons/ri";

interface ILecturerTracker {
  header: string;
  explanation: string;
  styles?: string;
  bgStyle: string;
  iconStyle: string;
  hoverStyle?: string;
}

export const Course: FC<ILecturerTracker> = ({
  header,
  explanation,
  styles,
  bgStyle,
  iconStyle,
  hoverStyle,
}) => {
  return (
    <div
      className={`h-48 course-media w-52 flex flex-col items-center justify-center ${bgStyle} p-4 rounded transition-all duration-700 ease-linear ${hoverStyle}`}
    >
      <span className={`${!styles ? "text-3xl" : styles} ${iconStyle}`}>
        <CourseIcon />
      </span>
      <h6 className="text-base mt-2">{header}</h6>
      <p className="text-[0.6rem] opacity-50 mt-1 text-center">{explanation}</p>
    </div>
  );
};
