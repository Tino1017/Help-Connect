import { FC, ReactNode } from "react";
import { SideNavigation } from "../navigation/SideNavigation";

interface IDashboardUI {
  children: ReactNode;
}

export const DashboardUI: FC<IDashboardUI> = ({ children }) => {
  return (
    <>
      <section className="dashboard-container">
        <SideNavigation />
        <section className="dashboard-container__main p-20 overflow-auto">
          {children}
        </section>
      </section>
    </>
  );
};
