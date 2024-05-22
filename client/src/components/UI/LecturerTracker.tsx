import { FC, ReactNode } from "react";

interface ILecturerTracker {
  header: string;
  explanation: string;
  styles?: string;
  bgStyle: string;
  iconStyle: string;
  children: ReactNode;
}

export const LecturerTracker: FC<ILecturerTracker> = ({ header, explanation,styles, bgStyle, iconStyle, children }) => {
  return (
    <div className={`h-48 w-52 course-media flex flex-col items-center justify-center ${bgStyle} p-4 rounded transition-all duration-700 ease-linear`}>
      <span className={`${!styles ? "text-4xl" : styles} ${iconStyle}`}>{children}</span>
      <h6 className="text-base mt-2">{header}</h6>
      <p className="text-[0.6rem] opacity-50 mt-1 text-center">
        {explanation}
      </p>
    </div>
  );
};
