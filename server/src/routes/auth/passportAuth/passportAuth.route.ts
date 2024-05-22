// import express, { Router, Request, Response } from "express";
// import passport from "passport";

// const passportAuthRouter: Router = express.Router();

// import { HttpPassportGoogleAuthController } from "./passportAuth.controller";
// // import { authSessionMiddleware } from "../../../middleware/authSession.middleware";

// passportAuthRouter.get(
//   "/api/auth/google",
//   passport.authenticate("google", { scope: ["profile"] })
// );

// passportAuthRouter.get(
//   "/api/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "http://localhost:5173/account/login-choice",
//   }),
//   function (req: Request, res: Response) {
//     const { user } = req;
//     if (user) return res.redirect("http://localhost:5173/dashboard");
//   }
// );

// passportAuthRouter.get(
  // "/api/auth/success",
  // authSessionMiddleware,
//   HttpPassportGoogleAuthController
// );

// passportAuthRouter.get(
//   "/api/auth/facebook",
//   passport.authenticate("facebook", { scope: ["profile"] })
// );
// passportAuthRouter.get(
//   "/api/auth/facebook/callback",
//   passport.authenticate("facebook", {
//     failureRedirect: "http://localhost:5173/account/login-choice",
//   })
// );

// export { passportAuthRouter };
