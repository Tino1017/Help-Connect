import express, { Router } from "express";
import {
  HttpCreatePostController,
  HttpGetPostController,
  HttpCreatePostImageController,
  HttpGetPostImageController
} from "./post.controller";
const postRouter: Router = express.Router();

postRouter.post("/api/post/create", HttpCreatePostController);
postRouter.get("/api/post/get", HttpGetPostController);

postRouter.post("/api/post/create-image", HttpCreatePostImageController);
postRouter.get("/api/post/get-image", HttpGetPostImageController);

export { postRouter };
