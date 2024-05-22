import { Request, Response } from "express";
import mongoose, { Document } from "mongoose";

const Student: mongoose.Model<any> = mongoose.model("Student");
const Lecturer: mongoose.Model<any> = mongoose.model("Lecturer");

async function HttpGetUserDataController(req: Request, res: Response) {
  try {
    const { token } = req.body;

    const student = await Student.findOne({ studentID: token });
    const lecturer = await Lecturer.findOne({ lecturerID: token });

    // console.log(student, lecturer)

    if (student) {
      return res.status(200).json(student);
    } else if (lecturer) {
      return res.status(200).json(lecturer);
    } else {
      res.status(401).json({ message: "User is not authenticated" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export { HttpGetUserDataController };
