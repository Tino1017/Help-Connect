import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";
import {
  BsFillMicFill as OpenMicIcon,
  BsCameraVideoFill as OpenWebCamIcon,
  BsFillMicMuteFill as CloseMicIcon,
  BsFillCameraVideoOffFill as CloseWebCamIcon,
} from "react-icons/bs";

export function ParticipantView({ participantId }: { participantId: string }) {
  const micRef = useRef<HTMLAudioElement>(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(participantId);

  // function RenderProfile() {
  //   return (
  //     <>
  //       <h1>Profile data</h1>
  //     </>
  //   );
  // }

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <section
      className="bg-[#3e3e3e] text-white drop-shadow-xl p-3 rounded"
      key={participantId}
    >
      <section>
        <section className="flex items-center gap-4 w-full mb-3">
          <div className="text-sm">
            <span>Participant ID: {participantId}</span>
            {" | "}
            <span>Names: {displayName}</span>
          </div>
          <div className="text-sm">
            {micOn ? <OpenMicIcon /> : <CloseMicIcon />}
          </div>
          <div className="text-sm">
            {webcamOn ? <OpenWebCamIcon /> : <CloseWebCamIcon />}
          </div>
        </section>
      </section>
      <audio ref={micRef} autoPlay muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          playsinline // very very imp prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          width={"100%"}
          url={videoStream}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </section>
  );
}

// : (
//   <section className="rounded">
//     <RenderProfile />
//   </section>
// )
