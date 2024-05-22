require("./models/student/students.model");
// require("./models/student/student.passport.model");
require("./models/lecturer/lecturer.model");
require("./api/passport.student.api");
require("./models/quotes/quotes.model");
require("./models/announcement/announcement.model");
require("./models/event/event.model");
require("./models/document/document.model");
require("./models/video/video.model");
require("./models/post/post.model");
require("./models/post/postImage.model");
require("./models/subscribe/email.model");
require("./models/assist/assist.model")

import express, { urlencoded } from "express";
import cors from "cors";
import passport from "passport";

import { registerRouter } from "./routes/auth/register/register.route";
import { loginRouter } from "./routes/auth/login/login.route";
import { pinRouter } from "./routes/auth/pinGenerator/pinGenerator.route";
// import { passportAuthRouter } from "./routes/auth/passportAuth/passportAuth.route";
import { fetchUserRoute } from "./routes/fetchData/userData.route";
import { quoteRoute } from "./routes/quotes/quotes.route";
import { cookie } from "./cookie/cookie.session";
import { HttpMongoDBConnection } from "./database/database.connection";
import { announcementRouter } from "./routes/announcement/announcement.route";
import { fetchAnnouncement } from "./routes/announcement/fetchAnnouncement";
import { fetchEventRouter } from "./routes/event/fetchEvent";
import { fileUploadRouter } from "./routes/fileUpload/fileUpload.route";
import { eventRouter } from "./routes/event/event.route";
import { fetchDocumentRouter } from "./routes/fetchData/fetchDocuments";
import { videoRouter } from "./routes/video/video.route";
import { fetchVideoRouter } from "./routes/video/fetchVideo";
import { postRouter } from "./routes/post/post.route";
import { fetchLecturerRouter } from "./routes/fetchData/fetchLecturer.controller";
import { subscribeRouter } from "./routes/subscribe/subscribe.route";
import {assistRouter} from "./routes/assist/assist.route"

const app = express();

HttpMongoDBConnection();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(urlencoded({ extended: true, limit: "10mb" }));
app.use(cookie);
app.use(passport.initialize());
app.use(passport.session());
app.use(registerRouter);
app.use(loginRouter);
app.use(pinRouter);
// app.use(passportAuthRouter);
app.use(fetchUserRoute);
app.use(quoteRoute);
app.use(announcementRouter);
app.use(fetchAnnouncement);
app.use(eventRouter);
app.use(fetchEventRouter);
app.use(fileUploadRouter);
app.use(fetchDocumentRouter);
app.use(videoRouter);
app.use(fetchVideoRouter);
app.use(postRouter);
app.use(fetchLecturerRouter);
app.use(subscribeRouter);
app.use(assistRouter)

export default app;
