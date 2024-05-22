import express, { Router, Request, Response } from "express";
import mongoose from "mongoose";
const Lecturer = mongoose.model("Lecturer");
const Video = mongoose.model("Video");
const fetchVideoRouter: Router = express.Router();

async function HttpFetchVideoController(req: Request, res: Response) {
  try {
    const video = await Video.find().exec();

    const findLecturerVideo = await Promise.all(
      video.map(async (item) => {
        const creator = await Lecturer.findById(item.createdBy);

        if (creator) {
          return { ...item.toObject(), lecturer: creator };
        }
      })
    );
    res.status(200).json(findLecturerVideo);
  } catch (error) {
    res.status(500).json({ error });
  }
}

fetchVideoRouter.get("/api/fetch-video", HttpFetchVideoController);

export { fetchVideoRouter };
