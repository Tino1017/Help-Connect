import React from "react";
import { CourseCard } from "../../UI/CourseCard";

export const AllCourse: React.FC = () => {
  return (
    <>
      <section className="mb-[50px] mx-[1rem] flex justify-center items-center flex-wrap gap-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>
    </>
  );
};
