import express, { Router } from "express";
import {subscribeController} from "./subscribe.controller"

const subscribeRouter: Router = express.Router();

subscribeRouter.post("/api/email", subscribeController)

export { subscribeRouter };
