import { CopyToClipboard } from "react-copy-to-clipboard";
import { HiUserGroup as CommunityIcon } from "react-icons/hi2";
interface IRoomView {
  meetingId: string;
  joinMeeting: () => void;
}

export const RoomIdView: React.FC<IRoomView> = ({ meetingId, joinMeeting }) => {
  return (
    <>
      <header className="mb-7 flex items-center justify-center flex-col text-white">
        <span className="text-[7rem]">
          <CommunityIcon />
        </span>
        <h3 className="text-center">Meeting Id: {meetingId}</h3>
      </header>
      <section className="text-white flex items-center justify-center gap-2">
        <button
          type="submit"
          className="text-sm p-2 text-white bg-blue-950 w-48 rounded"
          onClick={joinMeeting}
        >
          Join
        </button>
        <CopyToClipboard text={meetingId}>
          <button
            type="submit"
            className="text-sm mx-auto p-2 text-white bg-sky-950 w-48 rounded"
          >
            Copy Id
          </button>
        </CopyToClipboard>
      </section>
    </>
  );
};
