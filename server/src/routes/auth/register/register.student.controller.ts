import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import fs from "fs";

import { keys } from "../../../key/key";
import { IStudent } from "./register.config";

const Student = mongoose.model("Student");

async function HttpRegisterStudentController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const student = await Student.findOne({ email });

    if (password !== confirmPassword) {
      return res.status(401).json({
        errorMessage: "password does'nt match",
      });
    }

    if (!student) {
      // create new student
      const newStudent: IStudent = new Student({
        studentID: null,
        username: username,
        email: email,
        password: password,
      });

      // creating jsonwebtoken token
      const studentToken = jwt.sign(
        { userId: newStudent._id },
        keys.JWT_STRING,
        { expiresIn: "24" }
      );

      // assigning token from jwt
      newStudent.studentID = studentToken;

      // setting students session
      // if (req.session) {
      //   req.session.user = { ...newStudent };
      //   req.session.user.session = newStudent.studentID;
      //   await new Promise<void>((resolve) => setTimeout(() => resolve(), 5)); // wait for the session to be saved before sending response back
      // }

      // saving student to database
      await newStudent.save();
      // sending back data to client
      return res.status(201).json({
        message: "Student successfully  created account",
        hasAccount: false,
        studentID: newStudent.studentID,
        username: newStudent.username,
        email: newStudent.email,
      });
    } else {
      // if student already exists
      const studentToken = jwt.sign({ userId: student._id }, keys.JWT_STRING, {
        expiresIn: "24",
      });

      student.studentID = studentToken;

      // if (req.session) {
      //   req.session.user = { ...student };
      //   await new Promise<void>((resolve) => setTimeout(() => resolve(), 5)); // wait for the session to be saved before sending response back
      // }

      return res.json({
        message: "Student already exists",
        hasAccount: true,
      });
    }
  } catch (error: any) {
    return res.status(500).json({ errorMessage: error.message });
  }
}

async function HttpRegisterStudentMoreInfo(req: Request, res: Response) {
  try {
    const {
      email,
      firstName,
      lastName,
      gender,
      dob,
      phone,
      address,
      bio,
      fieldOfStudy,
      nameOfSchool,
      imageProperties,
      idNumber,
    } = req.body;
    const isEveryInputField: boolean =
      !firstName ||
      !lastName ||
      !gender ||
      !dob ||
      !phone ||
      !address ||
      !idNumber ||
      !bio ||
      !fieldOfStudy ||
      !nameOfSchool ||
      !imageProperties;
    const student = await Student.findOne({ email });

    if (isEveryInputField) {
      return res
        .status(400)
        .json({ errorMessage: "Please provide all the required information" });
    }

    if (!student) {
      return res.status(404).json({
        errorMessage: "User not found please Register an account first",
      });
    }

    student.firstName = firstName;
    student.lastName = lastName;
    student.gender = gender;
    student.dob = dob;
    student.idNumber = idNumber;
    student.phone = phone;
    student.address = address;
    student.bio = bio;
    student.fieldOfStudy = fieldOfStudy;
    student.nameOfSchool = nameOfSchool;
    student.imageProperties = imageProperties

    await student.save();

    return res.status(201).json({
      message: "Student successfully Created an account",
      hasAccount: false,
      student,
    });
  } catch (error: any) {
    return res.status(500).json({ errorMessage: error.message });
  }
}

export { HttpRegisterStudentController, HttpRegisterStudentMoreInfo };
