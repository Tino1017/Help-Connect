import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Lecturer = mongoose.model("Lecturer");

export async function HttpLoginLecturerController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;
    const lecturer = await Lecturer.findOne({ email });

    if (!lecturer) {
      return res.json({ message: "User is not found!😥", hasAccount: false });
    }

    const passwordMatch = bcrypt.compare(password, lecturer.password);

    if (!passwordMatch) {
      return res.json({
        errorMessage: "Incorrect email or password😥",
      });
    }

    return res.status(200).json({
      message: "You have successfully logged in 😁",
      hasAccount: true,
      lecturer,
    });
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal server error" });
  }
}
