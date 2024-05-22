import mongoose, { Document, Schema } from "mongoose";

interface IStudentAuth extends Document {
  studentID: string;
  profilePicture: string;
  fullNames: string;
  username: string;
  email: string;
}

const StudentAuthSchema: mongoose.Schema<IStudentAuth> = new Schema(
  {
    studentID: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    fullNames: {
      type: String,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

// mongoose.model("StudentGoogle", StudentAuthSchema);
