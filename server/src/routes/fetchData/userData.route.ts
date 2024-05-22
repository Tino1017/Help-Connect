import express, { Router } from "express";
import { HttpGetUserDataController } from "./userData.controller";

const fetchUserRoute: Router = express.Router();

fetchUserRoute.post("/api/fetch-data", HttpGetUserDataController);

export { fetchUserRoute };
