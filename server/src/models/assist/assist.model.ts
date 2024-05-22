import mongoose, { Document, Schema } from "mongoose";

interface IMeeting extends Document {
  meetingCreator: string;
  meetingStudent: string;
  meetingId: string;
  createdBy: typeof Schema.ObjectId;
}

const meetingSchema = new Schema({
  meetingCreator: {
    type: String,
  },
  meetingStudent: {
    type: String,
  },
  meetingId: {
    type: String,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "Lecturer",
  },
})

mongoose.model<IMeeting>("Assist", meetingSchema);
