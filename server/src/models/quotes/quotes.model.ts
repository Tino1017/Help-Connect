import mongoose, { Schema, Document } from "mongoose";

interface IQuotes extends Document {
  author: string;
  quote: string;
  category: string;
}

const quoteSchema: mongoose.Schema<IQuotes> = new Schema<IQuotes>({
  author: { type: String},
  quote: { type: String, unique: true },
  category: { type: String},
});

mongoose.model("Quote", quoteSchema);
