import mongoose, { Schema } from "mongoose";

interface IEmail {
  email: string;
}

const emailSchema: Schema<IEmail> = new Schema({
  email: {
    type: String,
  },
});


mongoose.model<IEmail>("Email", emailSchema)
