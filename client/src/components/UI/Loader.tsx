import React from "react";

interface ILoader {
  size?: string;
}

export const Loader: React.FC<ILoader> = ({size}) => {
  return <div className={`spinner ${size}`}></div>;
};
