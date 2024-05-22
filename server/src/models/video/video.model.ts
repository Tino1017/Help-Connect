import mongoose, { Document, Schema } from "mongoose";

interface IVideo extends Document {
  videoProperties: object;
  videoData: string;
  videoTopic: string;
  videoTeachingLevel: string;
  createdBy: typeof Schema.ObjectId;
}

const videoSchema: Schema<IVideo> = new Schema({
  videoProperties: {
    type: Object,
  },
  videoData: {
    type: String,
  },
  videoTopic: {
    type: String,
  },
  videoTeachingLevel: {
    type: String,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "Lecturer",
  },
}, {timestamps: true});

mongoose.model<IVideo>("Video", videoSchema);
