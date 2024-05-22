import React from "react";
import { RiFilePaper2Fill as WriteIcon } from "react-icons/ri";

interface IAnnouncement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

export const Announcement: React.FC<IAnnouncement> = ({ data }) => {
//   console.log(data);
  return (
    <>
      <section className="bg-white rounded p-7">
        <header>
          <div className="flex items-center gap-3 text-lg">
            <span className="text-blue-950">
              <WriteIcon />
            </span>
            <span>Your Announcements</span>
          </div>
          <p className="text-xs opacity-50 mt-1">
            Track all your announcements on this section
          </p>
        </header>

        <section className="mt-10 flex items-center gap-4 flex-wrap">
          {data.map((item) => (
            <div key={item._id} className="bg-slate-100 p-3 rounded">
              <header className="flex items-center gap-3">
                {/* <span className="text-blue-950 text-sm">
                  <WriteIcon />
                </span> */}
                <span className="text-base">{item.announcementTopic}</span>
              </header>
              <p className="text-sm opacity-50 mt-3">{item.announcementDescription}</p>
              <p className="text-sm opacity-70 mt-2">{item.lecturer.firstName}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};
