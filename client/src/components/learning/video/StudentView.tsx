import { useContext, useState } from "react";
import { authToken, createMeeting } from "./video.api";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import { MeetingView } from "./MeetingView";
import { JoinScreen } from "./JoinScreen";
import { FetchUserDataContext } from "../../../context/FetchUserData.context";
import { IDataObject } from "../../../context/Context.config";

export const StudentView: React.FC = () => {
  const { student } = useContext<IDataObject>(FetchUserDataContext);
  const { firstName, lastName } = student;
  const isData = student ? true : false;
  const [meetingId, setMeetingId] = useState<string | null>(null);
  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id?: string) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        mode: "CONFERENCE",
        multiStream: true,
        name: `${isData ? `${firstName} ${lastName}` : "Guest"}`,
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
};
