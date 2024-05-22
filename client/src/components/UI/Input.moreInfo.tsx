import React from "react";

export type ChangeEventHTMLType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

interface IInputInformation {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEventHTMLType) => void;
  className?: string;
  errorMessage: string;
}

export const InputMoreInformation: React.FC<IInputInformation> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  errorMessage,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`p-[0.4rem] flex-1 text-slate-500 ${className} ${
        errorMessage && "border border-red-500"
      } outline-none bg-slate-200 rounded text-sm`}
    />
  );
};
