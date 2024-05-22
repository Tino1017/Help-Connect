import express, { Router } from "express";
import { HttpCreateEventController } from "./event.controller";
const eventRouter: Router = express.Router();

eventRouter.post("/api/event", HttpCreateEventController);

export { eventRouter };
