import { Request, Response } from "express";
import mongoose from "mongoose";

const Lecturer = mongoose.model("Lecturer");
const Announcement = mongoose.model("Announcement");

export async function HttpGetAnnouncementController(
  req: Request,
  res: Response
) {
  try {
    const {
      email,
      announcementTopic,
      announcementTeachingLevel,
      announcementDescription,
    } = req.body;

    const createdBy = await Lecturer.findOne({ email });

    if (!createdBy) {
      return res.json({ message: "Cannot find user 😓" });
    }

    const newAnnouncement = new Announcement({
      announcementTopic,
      announcementLevel: announcementTeachingLevel,
      announcementDescription,
      createdBy: createdBy._id,
    });

    await newAnnouncement.save();

    return res.status(201).json(newAnnouncement);
  } catch (error) {
    console.error(error);
  }
}
