import React from "react";
import {
  Header,
  LearningImage,
  OtherServicesImage,
  VerifiedIcon,
} from "./Features.imports";
import { motion } from "framer-motion";

interface IFramerTransition {
  ease: string;
  duration: number;
  type: string;
  stiffness: number;
  delay: number;
}

const transition: IFramerTransition = {
  ease: "backInOut",
  type: "spring",
  stiffness: 100,
  duration: 1,
  delay: 0.8,
};

export const Features: React.FC = () => {
  return (
    <>
      <section className="feature-container">
        <Header
          topHeader="FEATURES"
          bigHeader="Interactive teaching, professional services our online platform"
          paragraph="Empowering individuals and businesses to bridge the gap between
          education, IT excellence, and cleanliness, helping connect
          communities, advance careers, and maintain spotless spaces."
        />

        <section className="feature-container__inner">
          <div className="feature-container__inner-image-container">
            <motion.img
              initial={{ opacity: 0, x: -23 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={transition}
              src={LearningImage}
              alt="students learning"
              className="feature-container__inner-image-container__image"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="feature-container__inner-information mb-2">
              <motion.header
                initial={{ opacity: 0, x: 23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="flex items-center gap-1 feature-container__inner-information__header"
              >
                <span className="feature-container__inner-information__header-icon">
                  <VerifiedIcon />
                </span>
                <motion.h4
                  initial={{ opacity: 0, x: 23 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={transition}
                  className="feature-container__inner-information__header-head"
                >
                  Online group discussion
                </motion.h4>
              </motion.header>
              <motion.p
                initial={{ opacity: 0, x: 23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="text-xs max-w-[24rem] feature-container__inner-information__para"
              >
                help connect provides online group discussion so that learners
                may ask for help on other students and it is the quickest way to
                learn so that no one is left behind. help connect is here to
                assist
              </motion.p>
            </div>
            <div className="feature-container__inner-information mb-2">
              <motion.header
                initial={{ opacity: 0, x: 23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="flex items-center gap-1 feature-container__inner-information__header"
              >
                <span className="feature-container__inner-information__header-icon">
                  <VerifiedIcon />
                </span>
                <motion.h4
                  initial={{ opacity: 0, x: 23 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={transition}
                  className="feature-container__inner-information__header-head"
                >
                  One on one session
                </motion.h4>
              </motion.header>
              <motion.p
                initial={{ opacity: 0, x: 23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="text-xs max-w-[24rem] feature-container__inner-information__para"
              >
                help connect provides one on one sessions so that a learner who
                want to be taught alone will also be covered with help connect
                making it easer for everyone to learn
              </motion.p>
            </div>
            <div className="feature-container__inner-information mb-2">
              <motion.header
                initial={{ opacity: 0, x: 23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="flex items-center gap-1 feature-container__inner-information__header"
              >
                <span className="feature-container__inner-information__header-icon">
                  <VerifiedIcon />
                </span>
                <motion.h4
                  initial={{ opacity: 0, x: 23 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={transition}
                  className="feature-container__inner-information__header-head"
                >
                  Professional lecturers
                </motion.h4>
              </motion.header>
              <motion.p
                initial={{ opacity: 0, x: 23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="text-xs max-w-[24rem] feature-container__inner-information__para"
              >
                help connect provides professional lecturers. can students can
                communicate privately with lecturers and other communication
                services so that learns feel confortable to learn.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="feature-container__inner mt-10 inner-reverse">
          <div className="flex flex-col gap-2">
            <div className="feature-container__inner-information mb-2">
              <motion.header
                initial={{ opacity: 0, x: -23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="flex items-center gap-1 feature-container__inner-information__header"
              >
                <span className="feature-container__inner-information__header-icon">
                  <VerifiedIcon />
                </span>
                <motion.h4
                  initial={{ opacity: 0, x: -23 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={transition}
                  className="feature-container__inner-information__header-head"
                >
                  External services
                </motion.h4>
              </motion.header>
              <motion.p
                initial={{ opacity: 0, x: -23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="text-xs max-w-[24rem] feature-container__inner-information__para"
              >
                help connect doesnt provide only education it offers other
                external services like plumbing, IT technicians and cleaners,
                Etc. which makes help connect the platform that provides more
                for people
              </motion.p>
            </div>
            <div className="feature-container__inner-information mb-2">
              <motion.header
                initial={{ opacity: 0, x: -23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="flex items-center gap-1 feature-container__inner-information__header"
              >
                <span className="feature-container__inner-information__header-icon">
                  <VerifiedIcon />
                </span>
                <motion.h4
                  initial={{ opacity: 0, x: -23 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={transition}
                  className="feature-container__inner-information__header-head"
                >
                  You can become a helper
                </motion.h4>
              </motion.header>
              <motion.p
                initial={{ opacity: 0, x: -23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="text-xs max-w-[24rem] feature-container__inner-information__para"
              >
                With help connect you can become one of us by helping others
                daily. you can put your skills to test and see how help connect
                customers says about your work
              </motion.p>
            </div>
            <div className="feature-container__inner-information mb-2">
              <motion.header
                initial={{ opacity: 0, x: -23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="flex items-center gap-1 feature-container__inner-information__header"
              >
                <span className="feature-container__inner-information__header-icon">
                  <VerifiedIcon />
                </span>
                <motion.h4
                  initial={{ opacity: 0, x: -23 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={transition}
                  className="feature-container__inner-information__header-head"
                >
                  Make extra cash
                </motion.h4>
              </motion.header>
              <motion.p
                initial={{ opacity: 0, x: -23 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={transition}
                className="text-xs max-w-[24rem] feature-container__inner-information__para"
              >
                With help connect you can make extra cash by helping others
                daily. you can put your skills to test and see how help connect
                customers says about your work
              </motion.p>
            </div>
          </div>
          <div className="feature-container__inner-image-container">
            <motion.img
              initial={{ opacity: 0, x: -23 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={transition}
              src={OtherServicesImage}
              alt="people plumbimg"
              className="feature-container__inner-image-container__image"
            />
          </div>
        </section>
      </section>
    </>
  );
};
