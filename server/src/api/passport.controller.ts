// import mongoose from "mongoose";
// import Google from "passport-google-oauth20";
// import Facebook from "passport-facebook";

// const Student: mongoose.Model<any> = mongoose.model("StudentGoogle");

// async function HttpGoogleDataController(
//   accessToken: string,
//   refreshToken: string,
//   profile: Google.Profile,
//   done: Google.VerifyCallback
// ) {
//   try {
//     const student = await Student.findOne({studentID: profile.id});

//     if (student) {
//       done(null, student);
//     } else {
//       const newStudent = new Student({
//         studentID: profile.id,
//         profilePicture: profile.photos ? profile.photos[0].value : null,
//         username: profile.username,
//         fullNames: profile.displayName,
//         email: profile.emails ? profile.emails[0].value : null,
//       });

//       await newStudent.save();

//       return done(null, newStudent);
//     }
//   } catch (error: any) {
//     done(error, null as any);
//   }
// }

// async function HttpFacebookDataController(
//   accessToken: string,
//   refreshToken: string,
//   profile: Facebook.Profile,
//   done: any
// ) {
//   try {
//     const student = await Student.findOne({ _id: profile.id });

//     if (student) {
//       done(null, student);
//     } else {
//       const newStudent = new Student({
//         studentID: profile.id,
//         profilePicture: profile.photos ? profile.photos[0].value : null,
//         username: profile.username,
//         fullNames: profile.displayName,
//         email: profile.emails ? profile.emails[0].value : null,
//       });

//       newStudent.gander = profile.gender

//       await newStudent.save();

//       return done(null, newStudent);
//     }
//   } catch (error) {
//     done(error, null);
//   }
// }

// export { HttpGoogleDataController, HttpFacebookDataController };
