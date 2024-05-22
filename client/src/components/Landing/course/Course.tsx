import React, { useState } from "react";
import { Header, DispalyCourses } from "./Course.imports";
import { motion } from "framer-motion";

interface IFramerTransition {
  ease: string;
  duration: number;
  type: string;
}

const transition: IFramerTransition = {
  ease: "backInOut",
  duration: 1,
  type: "spring",
};

export const Course: React.FC = () => {
  const [isAllCategoryClicked, setIsAllCategoryClicked] =
    useState<boolean>(true);
  const [isPrimaryCategoryClicked, setIsPrimaryCategoryClicked] =
    useState<boolean>(false);
  const [isSecondaryCategoryClicked, setIsSecondaryCategoryClicked] =
    useState<boolean>(false);
  const [isTertiaryCategoryClicked, setIsTertiaryCategoryClicked] =
    useState<boolean>(false);

  const openAllCourses: () => void = function () {
    setIsAllCategoryClicked(true);
    setIsPrimaryCategoryClicked(false);
    setIsSecondaryCategoryClicked(false);
    setIsTertiaryCategoryClicked(false);
  };

  const openPrimaryCategory: () => void = function () {
    setIsAllCategoryClicked(false);
    setIsPrimaryCategoryClicked(true);
    setIsSecondaryCategoryClicked(false);
    setIsTertiaryCategoryClicked(false);
  };

  const openSecondaryCategory: () => void = function () {
    setIsAllCategoryClicked(false);
    setIsPrimaryCategoryClicked(false);
    setIsSecondaryCategoryClicked(true);
    setIsTertiaryCategoryClicked(false);
  };

  const openTertiaryCategory: () => void = function () {
    setIsAllCategoryClicked(false);
    setIsPrimaryCategoryClicked(false);
    setIsSecondaryCategoryClicked(false);
    setIsTertiaryCategoryClicked(true);
  };

  return (
    <>
      <section id="course" className="course-container">
        <Header
          topHeader="COURSE"
          bigHeader="Enrol your favourite courses "
          paragraph="Help connect gives you well detailed courses for you to start learning. enroll now to start creating a better."
        />

        <section className="course-container__inner">
          <motion.header
            initial={{ opacity: 0, y: -23 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            className="mx-auto course-container__inner-header flex items-center justify-center gap-2 flex-wrap"
          >
            <div
              className={`${
                isAllCategoryClicked
                  ? "bg-[#042767] text-white"
                  : "text-[#042767]"
              } course-container__inner-header__nav py-2 px-3 rounded border border-[#042767] transition-all duration-700 ease-linear hover:bg-[#042767] hover:text-white hover:cursor-pointer`}
              onClick={() => openAllCourses()}
            >
              <h5>All courses</h5>
            </div>
            <div
              className={`${
                isPrimaryCategoryClicked
                  ? "bg-[#042767] text-white"
                  : "text-[#042767]"
              } course-container__inner-header__nav  py-2 px-3 rounded border border-[#042767] transition-all duration-700 ease-linear hover:bg-[#042767] hover:text-white hover:cursor-pointer`}
              onClick={() => openPrimaryCategory()}
            >
              <h5>Primary subjects</h5>
            </div>
            <div
              className={`${
                isSecondaryCategoryClicked
                  ? "bg-[#042767] text-white"
                  : "text-[#042767]"
              } course-container__inner-header__nav  py-2 px-3 rounded border border-[#042767] transition-all duration-700 ease-linear hover:bg-[#042767] hover:text-white hover:cursor-pointer`}
              onClick={() => openSecondaryCategory()}
            >
              <h5>Secondary subjects</h5>
            </div>
            <div
              className={`${
                isTertiaryCategoryClicked
                  ? "bg-[#042767] text-white"
                  : "text-[#042767]"
              } course-container__inner-header__nav  py-2 px-3 rounded border border-[#042767] transition-all duration-700 ease-linear hover:bg-[#042767] hover:text-white hover:cursor-pointer`}
              onClick={() => openTertiaryCategory()}
            >
              <h5>Tertiary courses</h5>
            </div>
          </motion.header>

          <section className="flex items-center mt-10 justify-center">
            <DispalyCourses
              isAllCourse={isAllCategoryClicked}
              isPrimary={isPrimaryCategoryClicked}
              isSecondary={isSecondaryCategoryClicked}
              isTertiary={isTertiaryCategoryClicked}
            />
          </section>
        </section>
      </section>
    </>
  );
};
