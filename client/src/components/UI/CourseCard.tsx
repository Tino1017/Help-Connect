import React from "react";
import { CgTimer as TimeIcon } from "react-icons/cg";
import { AiOutlineCalendar as CalenderIcon } from "react-icons/ai";
import {
  PiBooksDuotone as BookIcon,
  PiBriefcaseMetalDuotone as BagIcon,
} from "react-icons/pi";


export const CourseCard: React.FC = () => {
  return (
    <>
      <section className="bg-white drop-shadow-xl max-w-[440px] rounded py-8 pr-5">
        <header className="border-l-8 border-blue-900 pl-7">
          <p className="text-[9px] uppercase font-medium text-gray-700 opacity-80 mb-2">
            Accting-004-76
          </p>
          <h3 className="text-2xl font-semibold text-blue-950">
            Accounting and Business management
          </h3>
        </header>
        <section className="px-9 my-6 flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-3xl opacity-30">
              <BookIcon />
            </span>
            <div className="text-[10px]">
              <p className="opacity-50 uppercase">Instructor</p>
              <p className="uppercase font-semibold opacity-60">
                Maphari phumudzo
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl opacity-30">
              <BagIcon />
            </span>
            <div className="text-[10px]">
              <p className="opacity-50 uppercase">Subject</p>
              <p className="uppercase font-semibold opacity-60">Accounting</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl opacity-30">
              <TimeIcon />
            </span>
            <div className="text-[10px]">
              <p className="opacity-50 uppercase">Value</p>
              <p className="uppercase font-semibold opacity-60">3 credits</p>
            </div>
          </div>
        </section>

        <section className="pl-9 mb-6 flex items-center gap-7">
          <div>
            <p className="uppercase opacity-50 text-sm mb-1">DURATION</p>
            <div className="flex items-center gap-2">
              <h2 className="text-4xl font-bold">41</h2>
              <div>
                <span className="opacity-50 text-blue-950">
                  <CalenderIcon />
                </span>
                <p className="uppercase opacity-50 text-xs">Days</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-4 bg-blue-100 rounded-full">
              <div className="h-4 w-1/5 bg-blue-950 rounded-full"></div>
            </div>
            <p className="text-xs opacity-50 mt-3">
              This is the time left if you take this course now by{" "}
              <b>23 may 2023 </b>
              youll be done
            </p>
          </div>
        </section>

        <section className="ml-9 flex items-center justify-between flex-wrap gap-1">
          <button
            type="submit"
            className="px-3 p-2 border rounded border-blue-950 text-blue-950 font-medium transition-all duration-700 ease-linear hover:bg-slate-100 bg-slate-200"
          >
            Read More
          </button>
          <button
            type="submit"
            className="px-3 p-2 border rounded flex-1 border-blue-950 text-white font-medium transition-all duration-700 ease-linear hover:bg-blue-950 bg-blue-900"
          >
            Start Learning
          </button>
        </section>
      </section>
    </>
  );
};
