import express, { Router, Request, Response } from "express";
import mongoose from "mongoose";
const Lecturer = mongoose.model("Lecturer");
const Event = mongoose.model("Event");
const fetchEventRouter: Router = express.Router();

async function HttpFetchAnnouncementController(req: Request, res: Response) {
  try {
    const announcements = await Event.find().exec();

    const findLecturerAnnouncement = await Promise.all(
      announcements.map(async (item) => {
        const creator = await Lecturer.findById(item.createdBy);

        if (creator) {
          return {...item.toObject(), lecturer: creator};
        }
      })
    );
    res.status(200).json(findLecturerAnnouncement);
  } catch (error) {
    res.status(500).json({ error });
  }
}

fetchEventRouter.get(
  "/api/fetch-event",
  HttpFetchAnnouncementController
);

export { fetchEventRouter };