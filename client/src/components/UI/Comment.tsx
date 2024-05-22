import React from "react";
import {
  FillStarIcon,
  OutlineStarIcon,
} from "../Landing/review/StudentReview.imports";
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

interface IComments {
  name: string;
  comment: string;
  course: string;
  src: string;
  alt: string;
}

export const Comment: React.FC<IComments> = ({
  name,
  comment,
  course,
  alt,
  src,
}) => {
  return (
    <motion.div
      className="bg-white p-7 w-[400px] rounded drop-shadow-xl"
      initial={{ opacity: 0, y: -23 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      <div className="flex items-center gap-3">
        <img src={src} alt={alt} className="h-12 w-12 object-cover rounded-full" />
        <div>
          <h3 className="text-[15px]">{name}</h3>
          <p className="text-[11px] text-violet-950 opacity-90">{course}</p>
        </div>
      </div>
      <p className="my-3 text-[12px] text-violet-950 opacity-90">{comment}</p>
      <div className="flex items-center justify-start gap-2">
        <span className="text-yellow-500">
          <FillStarIcon />
        </span>
        <span className="text-yellow-500">
          <FillStarIcon />
        </span>
        <span className="text-yellow-500">
          <FillStarIcon />
        </span>
        <span className="text-yellow-500">
          <FillStarIcon />
        </span>
        <span className="text-yellow-500">
          <OutlineStarIcon />
        </span>
      </div>
    </motion.div>
  );
};
