import { Request, Response } from "express";
import {
  generateEmailPin,
  nodeMailerOptions,
  NodeMailerSendEmail,
} from "./pin.functions";
import { keys } from "../../../key/key";

async function HttpEmailPinGeneratorController(req: Request, res: Response) {
  try {
    const { username, email } = req.body;
    const pin: string = generateEmailPin();
    const options: object = nodeMailerOptions(keys.EMAIL, email, username, pin);
    const response = NodeMailerSendEmail(options);

    response
      .then((data) => {
        return res.status(200).json({
          message: "Email has been sent for verification code",
          messageID: data?.messageId,
          pin,
        });
      })
      .catch((err) => {
        return res.json({
          errorMessage: "something went wrong sending code verification",
        });
      });
  } catch (error) {
    res.json({ errorMessage: "Internal server error" });
  }
}

function HttpValidatePinController(req: Request, res: Response) {
  const { pin, generatedPin } = req.body;
  const pinInNumber: number = parseInt(pin);
  const generatedPinInNumber: number = parseInt(generatedPin);
  const isValid: boolean = pinInNumber === generatedPinInNumber;

  if (pin.trim().length !== 4) {
    return res.json({ errorMessage: "Verification code must be 4 digits" });
  }

  if (!isValid) {
    return res.json({
      errorMessage: "Your pin does'nt match",
      validated: false,
    });
  } else {
    res
      .status(200)
      .json({ message: "Verification successful", validated: true });
  }
}

export { HttpEmailPinGeneratorController, HttpValidatePinController };
