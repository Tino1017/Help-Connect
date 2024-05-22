import React from "react";
import { motion } from "framer-motion";

interface IHeader {
  topHeader: string;
  bigHeader: string;
  paragraph: string;
}

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

export const Header: React.FC<IHeader> = ({
  topHeader,
  bigHeader,
  paragraph,
}) => {
  return (
    <motion.header className="header-container text-center py-10 px-[1rem]">
      <motion.h6
        className="mb-1 header-container__top"
        initial={{ opacity: 0, y: -23, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
      >
        {topHeader}
      </motion.h6>
      <motion.h2
        className="header-container__center"
        initial={{ opacity: 0, y: -23, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
      >
        {bigHeader}
      </motion.h2>
      <motion.p
        className=""
        initial={{ opacity: 0, y: -23, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
      >
        {paragraph}
      </motion.p>
    </motion.header>
  );
};
