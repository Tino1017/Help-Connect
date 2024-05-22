import express, { Router } from "express";
import { HttpGetQuotesController } from "./quote.controller";

const quoteRoute: Router = express.Router();

quoteRoute.get("/api/get-quotes", HttpGetQuotesController);

export { quoteRoute };
