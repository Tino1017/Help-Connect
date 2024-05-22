import { Response, Request } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { keys } from "../../../key/key";
import { ILecturer } from "./register.config";
const Lecturer = mongoose.model("Lecturer");

async function HttpRegisterLecturerController(req: Request, res: Response) {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const lecturer = await Lecturer.findOne({ email });

    if (password !== confirmPassword) {
      return res.status(401).json({
        errorMessage: "password does'nt match",
      });
    }

    if (!lecturer) {
      // create new student
      const newLecturer: ILecturer = new Lecturer({
        lecturerID: null,
        username: username,
        email: email,
        password: password,
      });

      // creating jsonwebtoken token
      const lecturerToken = jwt.sign(
        { userId: newLecturer._id },
        keys.JWT_STRING,
        { expiresIn: "24" }
      );

      // assigning token from jwt
      newLecturer.lecturerID = lecturerToken;

      // setting students session
      if (req.session) {
        req.session.user = { ...newLecturer };
        await new Promise<void>((resolve) => setTimeout(() => resolve(), 5)); // wait for the session to be saved before sending response back
      }

      // saving student to database
      await newLecturer.save();
      // sending back data to client
      return res.status(201).json({
        message: "Lecturer successfully  created account",
        hasAccount: false,
        lecturerID: newLecturer.lecturerID,
        lecturerUsername: newLecturer.username,
        lecturerEmail: newLecturer.email,
      });
    } else {
      // if student already exists
      const lecturerToken = jwt.sign(
        { userId: lecturer._id },
        keys.JWT_STRING,
        {
          expiresIn: "24",
        }
      );

      lecturer.lecturerID = lecturerToken;

      if (req.session) {
        req.session.user = { ...lecturer };
        await new Promise<void>((resolve) => setTimeout(() => resolve(), 5)); // wait for the session to be saved before sending response back
      }

      return res.json({
        message: "Lecturer already exists",
        hasAccount: true,
      });
    }
  } catch (error: any) {
    return res.status(500).json({ errorMessage: error.message });
  }
}

async function HttpRegisterLecturerMoreInfo(req: Request, res: Response) {
  try {
    const {
      email,
      firstName,
      lastName,
      gender,
      dob,
      idNumber,
      phone,
      address,
      bio,
      levelOfEducation,
      whatYouTeach,
      fileProperties,
      yearsOfWorkingExperience,
      imageProperties,
    } = req.body;
    const isEveryInputField: boolean =
      !firstName ||
      !lastName ||
      !gender ||
      !dob ||
      !idNumber ||
      !phone ||
      !address ||
      !bio ||
      !yearsOfWorkingExperience ||
      !levelOfEducation ||
      !whatYouTeach ||
      !imageProperties;

    const lecturer = await Lecturer.findOne({ email });


    if (isEveryInputField) {
      return res
        .status(400)
        .json({ errorMessage: "Please provide all the required information" });
    }

    if (!lecturer) {
      return res.status(404).json({
        errorMessage: "User not found please Register an account first",
      });
    }

    lecturer.firstName = firstName;
    lecturer.lastName = lastName;
    lecturer.gender = gender;
    lecturer.dateOfBirth = dob;
    lecturer.idNumber = idNumber;
    lecturer.phone = phone;
    lecturer.address = address;
    lecturer.bio = bio;
    lecturer.levelOfEducation = levelOfEducation;
    lecturer.whatYouTeach = whatYouTeach;
    lecturer.yearsOfWorkingExperience = yearsOfWorkingExperience;
    lecturer.fileProperties = fileProperties;
    lecturer.imageProperties = imageProperties;

    await lecturer.save();

    return res.status(201).json({
      message: "Student successfully Created an account",
      hasAccount: false,
      lecturer,
    });
  } catch (error: any) {
    return res.status(500).json({ errorMessage: error.message });
  }
}

export { HttpRegisterLecturerController, HttpRegisterLecturerMoreInfo };
