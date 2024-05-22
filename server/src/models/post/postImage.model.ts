import mongoose, { Schema, Document } from "mongoose";

interface IPostImage {
  postID: string;
  postType: string;
  content: string;
  fileProperties: object;
  author: typeof Schema.Types.ObjectId;
  likes: number;
  image: string;
}

const postImageSchema: Schema<IPostImage> = new Schema(
  {
    postID: String,
    postType: {
      type: String,
      enum: ["post-image"],
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
    likes: Number,
    image: String,
    fileProperties: Object,
  },
  { timestamps: true }
);

mongoose.model<Schema<IPostImage>>("PostImage", postImageSchema);
