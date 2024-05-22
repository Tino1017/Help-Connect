import { Request, Response } from "express";
import mongoose from "mongoose";

const Event = mongoose.model("Event");
const Lecturer = mongoose.model("Lecturer");

export async function HttpCreateEventController(req: Request, res: Response) {
  try {
    const {
      email,
      eventDescription,
      eventTeachingLevel,
      eventTopic,
      eventStartDate,
      eventEndDate,
    } = req.body;
    const lecturer = await Lecturer.findOne({ email });

    if (!lecturer) {
      return res.json({ message: "Cannot lecturer to create event" });
    }

    if (
      !email ||
      !eventDescription ||
      !eventTeachingLevel ||
      !eventTopic ||
      !eventStartDate ||
      !eventEndDate
    ) {
      return res.json({ message: "Cannot create event" });
    }

    const createEvent = new Event({
      eventTopic,
      eventLevel: eventTeachingLevel,
      eventDescription,
      createdBy: lecturer._id,
      eventStartDate,
      eventEndDate,
    });

    await createEvent.save()

    res.status(201).json(createEvent)
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
