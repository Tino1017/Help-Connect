// import { keys } from "../../../../../server/src/key/key";
import {keys} from '../../../../../key/key'
export const authToken = keys.VIDEO_SDK_API_KEY;



export async function createMeeting({ token }: { token: string }) {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  //Destructuring the roomId from the response
  const { roomId }: { roomId: string } = await res.json();
  return roomId;
}
