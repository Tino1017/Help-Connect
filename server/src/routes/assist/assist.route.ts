import express, { Router } from "express";
import {HttpAssistController} from "./assist.controller"
const assistRouter: Router = express.Router()


assistRouter.post("/api/assist", HttpAssistController)


export {assistRouter}