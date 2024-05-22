import React from "react";
import { Link } from "react-router-dom";

interface ILink {
  to: string;
  name: string;
}

export const LinkTag: React.FC<ILink> = ({to, name}) => {
  return <Link to={to} className="link relative z-[40000]">{name}</Link>;
};
