import express, { Router } from "express";
import { HttpLoginStudentController } from "./login.student.controller";
import { HttpLoginLecturerController } from "./login.lecturer.controller";
const loginRouter: Router = express.Router();

loginRouter.post("/api/student/login-account", HttpLoginStudentController);
loginRouter.post("/api/lecturer/login-account", HttpLoginLecturerController);

export { loginRouter };
