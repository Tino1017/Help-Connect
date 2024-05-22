import { ReactNode, FC } from "react";
import { Link, Location, useLocation } from "react-router-dom";
import { isStudentOrLecturer } from "../../global/Functions.global";

interface ILinkNav {
  path: string;
  name: string;
  styles?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const LinkNav: FC<ILinkNav> = ({
  path,
  name,
  styles,
  children,
  onClick,
}) => {
  const location: Location<string> = useLocation();

  const colorToRenderStudentOrLecturer = isStudentOrLecturer("300", "bg");

  return (
    <Link
      to={path}
      onClick={onClick}
      className={`flex p-2 rounded justify-between transition-all duration-700 ease-linear hover:bg-slate-300
      ${
        location.pathname === path ? colorToRenderStudentOrLecturer : ""
      }  ${styles}`}
    >
      <div className="flex items-center gap-2 text-gray-600">
        <span className={`text-lg text-slate-500`}>{children}</span>
        <span className={`text-sm`}>{name}</span>
      </div>
    </Link>
  );
};
