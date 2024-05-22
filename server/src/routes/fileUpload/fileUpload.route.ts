import express, { Router } from "express";
import { HttpFileUploadController } from "./fileUpload.controller";

const fileUploadRouter: Router = express.Router();

fileUploadRouter.post("/api/fileUpload", HttpFileUploadController);

export { fileUploadRouter };
