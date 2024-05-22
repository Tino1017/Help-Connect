import { useContext, useState } from "react";
import { authToken, createMeeting } from "./video.api";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import { JoinScreen } from "./JoinScreen";
import { MeetingView } from "./MeetingView";
import { IDataObject } from "../../../context/Context.config";
import { FetchUserDataContext } from "../../../context/FetchUserData.context";

export const LecturerView: React.FC = () => {
  const { lecturer } = useContext<IDataObject>(FetchUserDataContext);
  const { firstName, lastName } = lecturer;
  const isData = lecturer ? true : false;
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
        mode: "VIEWER",
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
  
  
  