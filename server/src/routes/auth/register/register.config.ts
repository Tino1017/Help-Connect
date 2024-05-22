import { Document } from "mongoose";

interface IStudent extends Document {
  studentID: string;
  username: string;
  email: string;
  password: string;
}
interface ILecturer extends Document {
  lecturerID: string;
  username: string;
  email: string;
  password: string;
}


export { ILecturer,IStudent };
