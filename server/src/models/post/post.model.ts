import mongoose, { Schema, Document } from "mongoose";

interface IPost {
  postID: string;
  postType: string;
  content: string;
  author: typeof Schema.Types.ObjectId;
  likes: number;
}

const postSchema: Schema<IPost> = new Schema(
  {
    postID: String,
    postType: {
      type: String,
      enum: ["post-text"],
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

  },
  { timestamps: true }
);

mongoose.model<Schema<IPost>>("Post", postSchema);
