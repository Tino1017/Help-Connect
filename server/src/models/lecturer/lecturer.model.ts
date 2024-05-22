import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface ILecturer extends Document {
  lecturerID: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  gander: string;
  dateOfBirth: string;
  phone: string;
  address: string;
  bio: string;
  idNumber: string;
  yearsOfWorkingExperience: string;
  whatYouTeach: string;
  levelOfEducation: string;
  imageProperties: object;
  fileProperties: object;
  password: string;
}

const lecturerSchema: Schema<ILecturer> = new Schema(
  {
    lecturerID: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      minlength: [5, "Username must be more than 5 characters"],
      required: [true, "Username is required"],
      unique: true,
    },
    firstName: {
      type: String,
      minlength: [3, "firstName must be more than 3 characters"],
    },
    lastName: {
      type: String,
      minlength: [3, "lastName must be more than 3 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      unique: true,
      validate: {
        validator: (email: string) => {
          return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email);
        },
        message: "Please enter a valid email address",
      },
    },
    gander: {
      type: String,
      enum: ["male", "female"],
    },
    dateOfBirth: {
      type: String,
    },
    idNumber: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    bio: {
      type: String,
    },
    levelOfEducation: {
      type: String,
    },
    whatYouTeach: {
      type: String,
    },
    imageProperties: {
      type: Object,
    },
    fileProperties: {
      type:Object,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be more than 8 characters"],
      validate: {
        validator: (password: string) => {
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(
            password
          );
        },
        message: "Please enter a valid password",
      },
    },
  },
  { timestamps: true }
);

lecturerSchema.pre("save", function (next) {
  const student = this;

  // only hash the password if it has been modified or is new
  if (!student.isModified("password")) return next();

  // generate salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // hash password
    bcrypt.hash(student.password, salt, function (err, hash) {
      if (err) return next(err);

      //   return hash password
      student.password = hash;
      next();
    });
  });
});

mongoose.model<Schema<ILecturer>>("Lecturer", lecturerSchema);
