import { useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import { ParticipantView } from "./ParticipantView";
import { Controls } from "./Controls";

import { RoomIdView } from "./RoomIdView";

// MeetingView and Controls components to manage features such as join, leave, mute and unmute.
export function MeetingView({
  onMeetingLeave,
  meetingId,
}: {
  onMeetingLeave: () => void;
  meetingId: string;
}) {
  const [joined, setJoined] = useState<string | null>(null);
  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    //callback for when meeting is left
    onMeetingLeft: () => {
      onMeetingLeave();
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };
  return (
    <section className="bg-[#1f1f1f] h-screen flex items-center justify-center flex-col">
      {joined && joined == "JOINED" ? (
        <section>
          <section className="flex gap-3 flex-wrap">
            {[...participants.keys()].map((participantId) => (
              <ParticipantView
                participantId={participantId}
                key={participantId}
              />
            ))}
          </section>
          <section className="mb-5 mx-[1rem] absolute bottom-0 left-14 flex items-center">
            <Controls />
          </section>
        </section>
      ) : joined && joined == "JOINING" ? (
        <JoiningView />
      ) : (
        <RoomIdView meetingId={meetingId} joinMeeting={joinMeeting} />
      )}
    </section>
  );
}

function JoiningView() {
  return <p className="text-white">Joining the meeting...</p>;
}
