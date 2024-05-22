import mongoose, { Document, Schema } from "mongoose";

interface IAnnouncement extends Document {
  announcementTopic: string;
  announcementLevel: string;
  announcementDescription: string;
  createdBy: typeof Schema.ObjectId;
}

const announcementSchema: Schema<IAnnouncement> = new Schema(
  {
    announcementTopic: String,
    announcementLevel: String,
    announcementDescription: String,
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Lecturer",
    },
  },
  { timestamps: true }
);

mongoose.model<Schema<IAnnouncement>>("Announcement", announcementSchema);
