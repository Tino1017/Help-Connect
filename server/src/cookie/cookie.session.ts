import cookieSession from "cookie-session";
import { keys } from "../key/key";

const cookie = cookieSession({
  name: "session",
  maxAge: 24 * 60 * 60 * 1000, //expires in 24h
  keys: [keys.COOKIE_SESSION_KEY],
});

export { cookie };
