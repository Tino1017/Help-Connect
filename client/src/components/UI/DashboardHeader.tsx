import { FC } from "react";

interface IHeader {
  header: string;
  subHeader: string;
  stylesHeader?: string;
  stylesSubHeader?: string;
}

export const DashboardHeader: FC<IHeader> = ({
  header,
  subHeader,
  stylesHeader,
  stylesSubHeader,
}) => {
  return (
    <section className="min-w-[200px]">
      <h3 className={`${!stylesHeader ? "text-base " : stylesHeader} flex flex-nowrap`}>
        {header}
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
