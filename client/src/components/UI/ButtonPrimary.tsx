import React from "react";

interface IButton {
  name: string;
  onclickFunc?: () => void;
}

export const ButtonPrimary: React.FC<IButton> = ({ name, onclickFunc }) => {
  return (
    <button onClick={onclickFunc} type="submit" className="button-primary">
      {name}
    </button>
  );
};
