import { keys } from "../key/key";
import mongoose from "mongoose";

function HttpMongoDBConnection() {
  mongoose.connect(keys.MONGO_URI);
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  mongoose.connection.on("error", (error) => {
    console.log(error);
  });
}

export { HttpMongoDBConnection };
