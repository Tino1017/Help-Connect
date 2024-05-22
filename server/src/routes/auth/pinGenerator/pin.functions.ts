import { keys } from "../../../key/key";
import { INodeMailerOptions } from "./pin.config";
import nodeMailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

let messageSuccess: string;
let messageError: string;

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

function generateEmailPin(): string {
  // Generate a random number between 0 and 9999.
  const randomPin = Math.floor(Math.random() * 10000);
  // Ensure the number has exactly 4 digits by padding with zeros if needed.
  let fourDigitPin = randomPin.toString().padStart(4, "0");

  return fourDigitPin;
}

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
      <p style="color: #666666; font-size: 13px">This is the pin we sent you from help connect so that we can verify your email, Please go back and enter the pin provided <br/><span style="font-size: 2rem;">${pin}</span></p>
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
    subject: "Verification code from help connect", // Subject line
    html: renderHTML(
      username,
      email,
      "Verification code from help connect",
      pin
    ),
  };

  return mailOptions as any;
}

export { generateEmailPin, renderHTML, nodeMailerOptions, NodeMailerSendEmail };
