// import { keys } from "../../../../../server/src/key/key";
// import { keys } from "../../../../../key/key";
interface IKeys {
  MONGO_URI: string;
  PORT_NUMBER: number;
  JWT_STRING: string;
  COOKIE_SESSION_KEY: string;
  EMAIL_PASS: string;
  EMAIL: string;
  EMAIL_SERVICE: string 
  GOOGLE_CLIENT: string;
  GOOGLE_SECRET: string;
  FACEBOOK_CLIENT: string;
  FACEBOOK_SECRET: string;
  QUOTE_API_KEY: string;
  VIDEO_SDK_API_KEY: string
}

export const keys: IKeys = {
  MONGO_URI:
    "mongodb+srv://helpconnect001:vOz81qxmf60KVSkN@help-connect.kxww5nk.mongodb.net/?retryWrites=true&w=majority",
  PORT_NUMBER: 8000,
  JWT_STRING: "dlkgnugndingoeirgniorngusdgiusogisdighudfghiuhgduifhgudfghiudfhgudhfgudhfgiudfhgudhfgufhgisugsiuygfsufhsodfksdgoopsigjsughskdgh",
  COOKIE_SESSION_KEY: "sessionskhfbsfhbsjhbshgs",
  EMAIL_PASS: 'omlbqwsdqhaioqdd',
  EMAIL: 'helpconnect8@gmail.com',
  EMAIL_SERVICE: 'gmail',
  GOOGLE_CLIENT: "1010084343622-hob3om43hskvid7j7hemh6fa7ubc26bm.apps.googleusercontent.com",
  GOOGLE_SECRET: "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",  
  FACEBOOK_CLIENT: "1523696258442858",
  FACEBOOK_SECRET: "6dfdce466690933dff8372530a5be4ab",
  QUOTE_API_KEY: "FU6ugRZ9WjEYVnfI5obbIQ==t9jl6OPMP1NyPK5D",
  VIDEO_SDK_API_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI2YWUzOGY0ZS04ZGVmLTQ0NDQtOGY4Yy1kMjgwOTU2NGZlYTQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5ODUxODM5NSwiZXhwIjoxNjk5MTIzMTk1fQ.PdXAf6dCRe-L43dVEZoLhB6VSrIrr0_F88XlxhVz6bA'
};

export const authToken = keys.VIDEO_SDK_API_KEY;



export async function createMeeting({ }: { token: string }) {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  //Destructuring  roomId from the response
  const { roomId }: { roomId: string } = await res.json();
  return roomId;
}
