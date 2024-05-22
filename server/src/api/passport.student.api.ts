// import mongoose from "mongoose";
// import passport from "passport";
// import Google from "passport-google-oauth20";
// import Facebook from "passport-facebook";

// import { keys } from "../key/key";
// import {
//   HttpGoogleDataController,
//   HttpFacebookDataController,
// } from "./passport.controller";

// const GoogleStrategy: typeof Google.Strategy = Google.Strategy;
// const FacebookStrategy: typeof Facebook.Strategy = Facebook.Strategy;

// const Student: mongoose.Model<any> = mongoose.model("StudentGoogle");

// // IF USER EXIST GIVE ME AN ID
// passport.serializeUser((user: any, done) => {
//   done(null, user.id);
// });

// // SEARCH FOR USER THEN GIVE ME THAT USER
// passport.deserializeUser(async (id, done) => {
//   const student = await Student.findById(id);
//   done(null, student);
// });

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.GOOGLE_CLIENT,
//       clientSecret: keys.GOOGLE_SECRET,
//       callbackURL: "/api/auth/google/callback",
//       scope: ["profile", "gmail"],
//     },
//     HttpGoogleDataController
//   )
// );

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: keys.FACEBOOK_CLIENT,
//       clientSecret: keys.FACEBOOK_SECRET,
//       callbackURL: "/api/auth/facebook/callback",
//       enableProof: true,
//       profileFields: [
//         "id",
//         "displayName",
//         "gender",
//         "name",
//         "email",
//         "picture",
//       ],
//     },
//     HttpFacebookDataController
//   )
// );
