import React from "react";

interface IButton {
  name: string;
  onClickFunc?: () => void;
}

export const ButtonSecondary: React.FC<IButton> = ({ name, onClickFunc }) => {
  return <button onClick={onClickFunc} type="submit" className="button-secondary">{name}</button>;
};
