import express, { Router } from "express";
import { HttpUploadVideoController } from "./video.controller";
const videoRouter: Router = express.Router();

videoRouter.post("/api/videoUpload", HttpUploadVideoController);

export { videoRouter };
