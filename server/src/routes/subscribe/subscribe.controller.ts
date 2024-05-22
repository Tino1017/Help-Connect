import { Request, Response } from "express";
import mongoose from "mongoose";

const Email = mongoose.model("Email");

export function subscribeController(req: Request, res: Response) {
  try {
    const { email } = req.body;

    const newEmail = new Email({
      email,
    });

    newEmail.save();

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
}
