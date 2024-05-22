import { Request, Response } from "express";
import nodeMailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { keys } from "../../key/key";
import { INodeMailerOptions } from "../auth/pinGenerator/pin.config";
import mongoose from "mongoose";

const Meeting = mongoose.model("Assist")
const Lecturer = mongoose.model("Lecturer")
let messageSuccess: string;
let messageError: string;

const renderHTML: (
    username: string,
    email: string,
    subject: string,
    pin: string
  ) => string = function (
    username: string,
    email: string,
    subject: string,
    pin: string
  ) {
    return ` 
    <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 18px; border-radius: 10px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);">
        <p style="color: #666666; font-size: 13px">Hello ${username}</p>
        <p style="color: #666666; font-size: 13px">The lecturer wants to assist you <br/><span style="font-size: 2rem;">${pin}</span></p>
        <p style="color: #666666; font-size: 13px">Warm regards</p>
        <p style="color: #666666; font-size: 13px">Help connect team!</p>
    </div>
    </div>`;
  };
  

function nodeMailerOptions(
    fromEmail: string,
    email: string,
    username: string,
    pin: string
  ): (fromEmail: string, email: string, username: string, pin: string) => any {
    const mailOptions: INodeMailerOptions = {
      from: fromEmail, // sender address
      to: email, // list of receivers
      subject: "Meeting", // Subject line
      html: renderHTML(
        username,
        email,
        "Meeting call",
        pin
      ),
    };
  
    return mailOptions as any;
  }

async function NodeMailerSendEmail(
    options: object
  ): Promise<SMTPTransport.SentMessageInfo | undefined> {
    const transporter: nodeMailer.Transporter<SMTPTransport.SentMessageInfo> =
      nodeMailer.createTransport({
        service: keys.EMAIL_SERVICE,
        auth: {
          user: keys.EMAIL,
          pass: keys.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
  
    transporter.verify((error, success) => {
      if (error) {
        messageError = error.toString();
      } else {
        messageSuccess = `Server is ready to take our messages: ${success}`;
      }
    });
  
    const res = await transporter.sendMail(options);
  
    if (res.response) {
      return res;
    }
  }
export async function HttpAssistController(req: Request, res: Response) {
  try {
    const { meetingId, yourName, email,lecturerEmail } = req.body;

    const lecturer = await Lecturer.findOne({email: lecturerEmail})

    const option = nodeMailerOptions(lecturerEmail, email, yourName, meetingId)
    const response = await NodeMailerSendEmail(option);

    if (!lecturer) {
      return res.json({ message: "Lecturer not found" });
    }

    const meeting = new Meeting({
        meetingCreator: lecturerEmail,
        meetingStudent: email,
        meetingId: meetingId,
        createdBy: typeof lecturer._id,
    })

    await meeting.save()
    
    res.status(200).json({ message: "Email has been sent meeting Id", messageID: response?.messageId });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
