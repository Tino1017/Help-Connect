import React from "react";
import { motion } from "framer-motion";

interface IPricing {
  subcription: string;
  price: string;
  subscription_color: string;
  children?: React.ReactNode;
}

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

export const PricingCard: React.FC<IPricing> = ({
  subcription,
  price,
  subscription_color,
  children,
}) => {
  return (
    <motion.div
      className="bg-white w-[300px] h-[300px] rounded flex flex-col justify-between drop-shadow-xl"
      initial={{ opacity: 0, y: -23 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      <header className="flex items-center justify-between mb-3 mt-5 ml-5">
        <h1 className="text-base font-medium text-[#333]">Help Connect</h1>
        <h4
          className={`opacity-80 w-20 ${subscription_color} py-2 pl-2 pr-5 text-white`}
        >
          {subcription}
        </h4>
      </header>
      <div className="ml-5 flex items-center justify-end mr-3">
        <p className="">{price}</p>
      </div>
      <div className="mx-5 my-2 flex-1">{children}</div>
      <div className="p-5">
        <button
          type="submit"
          className={`px-3 py-[0.4rem] w-full rounded text-white ${subscription_color}`}
        >
          Get started
        </button>
      </div>
    </motion.div>
  );
};
