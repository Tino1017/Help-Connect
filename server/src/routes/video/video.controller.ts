import { Request, Response } from "express";
import mongoose from "mongoose";

const Lecturer: mongoose.Model<any> = mongoose.model("Lecturer");
const Video: mongoose.Model<any> = mongoose.model("Video");

export async function HttpUploadVideoController(req: Request, res: Response) {
    try {
      const {
        videoProperties,
        videoData,
        videoTopic,
        videoTeachingLevel,
        videoDescription,
        email,
      } = req.body;
  
      const creator = await Lecturer.findOne({ email });
  
      if (!creator) return res.status(400).json({ message: "Cannot upload video" });
  
      if (!videoProperties || !videoData || !videoTopic || !videoTeachingLevel || !videoDescription) {
        return res.status(400).json({ message: "Please provide all required data" });
      }
  
      const newVideo = new Video({
        videoProperties: {
          name: videoProperties.name,
          type: videoProperties.type,
          size: videoProperties.size,
        },
        videoData,
        videoTopic,
        videoTeachingLevel,
        videoDescription,
        createdBy: creator._id,
      });
  
      await newVideo.save();
  
      console.log(newVideo);
  
      return res.status(201).json({ video: newVideo });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  