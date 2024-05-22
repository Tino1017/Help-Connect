import { useMeeting } from "@videosdk.live/react-sdk";
import { ImPhoneHangUp as HangUpIcon } from "react-icons/im";
import {
  BsFillMicFill as OpenMicIcon,
  BsCameraVideoFill as WebCamIcon
} from "react-icons/bs";

export function Controls() {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  return (
    <div className="flex items-center gap-5 flex-wrap">
      <button
        type="submit"
        className="text-sm p-2 px-5 flex items-center justify-center gap-3 rounded text-white bg-red-600"
        onClick={() => leave()}
      >
        <span className="text-sm">
          <HangUpIcon />
        </span>
        <span>Leave Meeting</span>
      </button>
      <button
        type="submit"
        className="text-sm p-2 px-5 flex items-center gap-3 rounded text-white bg-slate-600"
        onClick={() => toggleMic()}
      >
        <span className="text-sm">
          <OpenMicIcon />
        </span>
        <span>Toggle Mic</span>
      </button>
      <button
        type="submit"
        className="text-sm p-2 px-5 flex items-center gap-3 rounded text-white bg-slate-600"
        onClick={() => toggleWebcam()}
      >
        <span className="text-sm">
          <WebCamIcon />
        </span>
        <span>toggle Webcam</span>
      </button>
    </div>
  );
}
