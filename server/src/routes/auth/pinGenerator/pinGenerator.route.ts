import express, { Router } from "express";
const pinRouter: Router = express.Router();

import { HttpEmailPinGeneratorController, HttpValidatePinController } from "./pinGenerator.controller";


pinRouter.post("/api/verify-email-pin", HttpEmailPinGeneratorController);
pinRouter.post("/api/verify-code", HttpValidatePinController);

export { pinRouter };
