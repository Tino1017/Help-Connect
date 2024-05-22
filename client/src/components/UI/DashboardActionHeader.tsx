import { FC, ReactNode } from "react";

interface IHeader {
  header: string;
  children: ReactNode;
  subHeader: string;
  stylesHeader?: string;
  stylesSubHeader?: string;
}

export const DashboardActionHeader: FC<IHeader> = ({
  header,
  subHeader,
  children,
  stylesHeader,
  stylesSubHeader,
}) => {
  return (
    <section>
      <h3 className="flex items-center gap-2">
        <span>{children}</span>
        <span className={`${!stylesHeader ? "text-base" : stylesHeader}`}>{header}</span>
      </h3>
      <p
        className={`${
          !stylesSubHeader ? "text-[0.7rem] opacity-30 mt-1" : stylesSubHeader
        }`}
      >
        {subHeader}
      </p>
    </section>
  );
};
