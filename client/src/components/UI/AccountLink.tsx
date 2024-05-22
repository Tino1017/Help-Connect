import React from "react";
import { Link } from "react-router-dom";

interface IAccountLink {
  to: string;
  children: React.ReactNode;
  name: string;
}

export const AccountLink: React.FC<IAccountLink> = ({ name, to, children }) => {
  return (
    <Link
      to={to}
      className="transition-all duration-700 ease-linear hover:bg-slate-100 w-full flex items-center justify-center gap-2 border text-sm text-[#333] px-[0.4rem] py-[0.5rem] rounded-full"
    >
      <span className="text-[1rem]">{children}</span> <span>{name}</span>
    </Link>
  );
};
