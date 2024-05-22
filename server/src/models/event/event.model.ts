import mongoose, { Schema, Document } from "mongoose";

interface IEvent extends Document {
  eventTopic: string;
  eventLevel: string;
  eventDescription: string;
  createdBy: Schema.Types.ObjectId;
  eventStartDate: string;
  eventEndDate: string;
}

const eventSchema: mongoose.Schema<IEvent> = new Schema(
  {
    eventTopic: String,
    eventLevel: String,
    eventDescription: String,
    createdBy: { type: Schema.Types.ObjectId, ref: "Lecturer" },
    eventStartDate: String,
    eventEndDate: String,
  },
  { timestamps: true }
);

mongoose.model<Schema<IEvent>>("Event", eventSchema);
