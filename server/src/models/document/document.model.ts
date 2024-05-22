import mongoose, { Document, Schema } from "mongoose";

interface IDocument extends Document {
  fileProperties: object;
  fileData: object;
  fileTopic: string;
  fileTeachingLevel: string;
  createdBy: typeof Schema.ObjectId;
}

const documentSchema: Schema<IDocument> = new Schema({
  fileProperties: {
    type: Object,
  },
  fileData: {
    type: Object,
  },
  fileTopic: {
    type: String,
  },
  fileTeachingLevel: {
    type: String,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "Lecturer",
  },
}, {timestamps: true});

mongoose.model<IDocument>("Document", documentSchema);
