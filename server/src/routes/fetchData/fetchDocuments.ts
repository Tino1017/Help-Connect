import express, { Router, Request, Response } from "express";
import mongoose from "mongoose";
const Lecturer = mongoose.model("Lecturer");
const Documents = mongoose.model("Document");
const fetchDocumentRouter: Router = express.Router();

async function HttpFetchDocumentController(req: Request, res: Response) {
  try {
    const document = await Documents.find().exec();

    const findLecturerDocument = await Promise.all(
      document.map(async (item) => {
        const creator = await Lecturer.findById(item.createdBy);

        if (creator) {
          return { ...item.toObject(), lecturer: creator };
        }
      })
    );
    res.status(200).json(findLecturerDocument);
  } catch (error) {
    res.status(500).json({ error });
  }
}

fetchDocumentRouter.get("/api/fetch-document", HttpFetchDocumentController);

export { fetchDocumentRouter };
