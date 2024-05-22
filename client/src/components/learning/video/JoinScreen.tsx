import { useState } from "react";
import { BsCameraVideoFill as LearningIcon } from "react-icons/bs";
import { HiUserGroup as CommunityIcon } from "react-icons/hi2";

// JOIN MEETING COMPONENT
export function JoinScreen({
  getMeetingAndToken,
}: {
  getMeetingAndToken: (meeting?: string) => void;
}) {
  const [meetingId, setMeetingId] = useState<string | undefined>();
  const onClick = async () => {
    getMeetingAndToken(meetingId);
  };
  return (
    <div className="w-full h-[100vh] bg-[#141414] text-white">
      <header className="p-6 flex items-center gap-3">
        <span className="text-2xl">
          <LearningIcon />
        </span>
        <h1 className="text-lg font-bold">The Room</h1>
      </header>
      <section className="flex justify-center items-center flex-col h-[70vh]  gap-2">
        <header className="mb-7">
          <span className="text-[7rem]">
            <CommunityIcon />
          </span>
        </header>
        <input
          type="text"
          placeholder="Enter Meeting Id"
          onChange={(e) => {
            setMeetingId(e.target.value);
          }}
          className="outline-none text-black text-sm p-2 w-1/2 border border-sky-500 bg-slate-200 rounded"
        />
        <button
          type="submit"
          className="text-sm p-2 bg-cyan-950 rounded w-1/2 text-white"
          onClick={onClick}
        >
          Join
        </button>
        <button
          type="submit"
          className="text-sm p-2 bg-blue-950 rounded w-1/2 text-white"
          onClick={onClick}
        >
          Create Meeting
        </button>
      </section>
    </div>
  );
}
