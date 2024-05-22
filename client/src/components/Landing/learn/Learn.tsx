import React from "react";
import { ButtonSecondary, LearnImage, VideoIcon } from "./Learn.imports";

export const Learn: React.FC = () => {
  return (
    <>
      <section className="relative ">
        <section className="learn-container bg-opacity-80 bg-blur-lg bg-slate-300 backdrop-blur-lg flex items-center justify-center gap-14 flex-wrap">
          <header className="learn-container__header">
            <h6>LEARN</h6>
            <h2>The best way to learn online courses</h2>
            <p>
              the best way to learn online courses is to engage with others
              through our forum that we are going to provide and to engage in
              excises that the lecturers provides for you to do so that you
              learn more faster and quicker.
            </p>
            <ButtonSecondary name="Learn more" />
          </header>
          <div className="relative">
            <img
              src={LearnImage}
              alt="a person is learning"
              className="h-auto w-96 object-cover border-8 drop-shadow-xl"
            />
            <div className="absolute -left-5 -bottom-6 rounded bg-white p-4 max-w-[19rem] drop-shadow-xl">
              <header className="flex items-center gap-2 my-1">
                <span className="h-7 w-7 rounded-full bg-slate-300 p-2 flex items-center justify-center">
                  <span className="text-slate-500">
                    <VideoIcon />
                  </span>
                </span>
                <h6>100 live videos</h6>
              </header>
              <p>
                help connect helps you learn with the best video content that
                will help you learn quickly
              </p>
            </div>
          </div>
        </section>
        <div className="h-40 w-40 rounded-full bg-purple-900 absolute  left-28 top-28 -z-50"></div>
        <div className="h-[15rem] w-[15rem] rounded-full bg-purple-900 absolute  right-0 top-5 -z-50"></div>
      </section>
    </>
  );
};
