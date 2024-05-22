import React from "react";

interface ISpinner {
  styles: string;
}
export const Spinner: React.FC<ISpinner> = ({styles}) => {
  return <span className={`loader ${styles}`}></span>;
};
