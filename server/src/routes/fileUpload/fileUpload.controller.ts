import { Request, Response } from "express";
import mongoose from "mongoose";

const FileUpload: mongoose.Model<any, any> = mongoose.model("Document");
const Lecturer: mongoose.Model<any, any> = mongoose.model("Lecturer");

export async function HttpFileUploadController(req: Request, res: Response) {
  try {
    const {
      fileProperties,
      fileData,
      fileTopic,
      fileTeachingLevel,
      fileDescription,
      email,
    } = req.body;
    const creator = await Lecturer.findOne({ email });

    if (
      !fileTopic ||
      !fileTeachingLevel ||
      !fileData ||
      !fileProperties ||
      !fileDescription
    ) {
      return res.json({ message: "Cannot upload the file!!!" });
    }

    if (!creator) {
      return res.json({ message: "Cannot upload the file!!!" });
    } else {
      const newFile = new FileUpload({
        fileProperties: {
          name: fileProperties.name,
          type: fileProperties.type,
          size: fileProperties.size,
        },
        fileData: fileData,
        fileTopic: fileTopic,
        fileTeachingLevel: fileTeachingLevel,
        createdBy: creator._id,
      });

      await newFile.save();

      return res
        .status(200)
        .json({ message: "File uploaded successfully", document: newFile });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
