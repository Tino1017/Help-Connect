import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Student = mongoose.model("Student");

export async function HttpLoginStudentController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });

    if (!student) {
      return res.json({ message: "User is not found!😥", hasAccount: false });
    }

    const passwordMatch = bcrypt.compare(password, student.password);

    if (!passwordMatch) {
      return res.json({
        errorMessage: "Incorrect email or password😥",
      });
    }


    return res.status(200).json({
      message: "You have successfully logged in 😁",
      hasAccount: true,
      student,
    });
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal server error" });
  }
}
