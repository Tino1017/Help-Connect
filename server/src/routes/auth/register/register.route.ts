import express, { Router } from "express";

import { HttpRegisterStudentController, HttpRegisterStudentMoreInfo } from "./register.student.controller";
import {HttpRegisterLecturerController, HttpRegisterLecturerMoreInfo} from "./register.lecturer.controller"

const registerRouter: Router = express.Router();

// STUDENTS
registerRouter.post("/api/student/register-account", HttpRegisterStudentController);
registerRouter.post("/api/student/register-account/more-info", HttpRegisterStudentMoreInfo)

// LECTURER
registerRouter.post("/api/lecturer/register-account", HttpRegisterLecturerController)
registerRouter.post("/api/lecturer/register-account/more-info", HttpRegisterLecturerMoreInfo)

export { registerRouter};
