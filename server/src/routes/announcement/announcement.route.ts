import express, { Router } from "express";
import { HttpGetAnnouncementController } from "./announcement.controller";
const announcementRouter: Router = express.Router();

announcementRouter.post("/api/announcement", HttpGetAnnouncementController);

export { announcementRouter };
