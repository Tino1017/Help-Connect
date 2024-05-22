import express, { Router, Request, Response } from "express";
import mongoose from "mongoose";
const Lecturer = mongoose.model("Lecturer");
const Documents = mongoose.model("Document");
const Announcement = mongoose.model("Announcement");
const Event = mongoose.model("Event");
const fetchLecturerRouter: Router = express.Router();

async function HttpFetchLecturerDocumentController(
  req: Request,
  res: Response
) {
  try {
    const document = await Documents.find().exec();

    const findLecturerDocument = await Promise.all(
      document.map(async (item) => {
        const creator = await Lecturer.findById(item.createdBy);

        if (creator) {
          return { ...item.toObject(), lecturer: creator };
        }
      })
    );

    res.status(200).json(findLecturerDocument);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function HttpFetchLecturerEventController(req: Request, res: Response) {
  try {
    const document = await Event.find().exec();

    const findLecturerEvent = await Promise.all(
      document.map(async (item) => {
        const creator = await Lecturer.findById(item.createdBy);

        if (creator) {
          return { ...item.toObject(), lecturer: creator };
        }
      })
    );

    res.status(200).json(findLecturerEvent);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function HttpFetchLecturerAnnouncementController(
  req: Request,
  res: Response
) {
  try {
    const announcement = await Announcement.find().exec();
    const findLecturerAnnouncement = await Promise.all(
      announcement.map(async (item) => {
        const creator = await Lecturer.findById(item.createdBy);
        if (creator) {
          return { ...item.toObject(), lecturer: creator };
        }
      })
    );
    res.status(200).json(findLecturerAnnouncement);
  } catch (error) {
    res.status(500).json({ error });
  }
}

fetchLecturerRouter.get(
  "/api/fetch-lecturer-document",
  HttpFetchLecturerDocumentController
);
fetchLecturerRouter.get(
  "/api/fetch-lecturer-event",
  HttpFetchLecturerEventController
);
fetchLecturerRouter.get(
  "/api/fetch-lecturer-announcement",
  HttpFetchLecturerAnnouncementController
);

export { fetchLecturerRouter };
