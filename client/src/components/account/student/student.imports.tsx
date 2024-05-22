// REACT-ROUTER-DOM IMPORTS
import { Link } from "react-router-dom";

// ICONS IMPORTS
import { IoMail as Mail } from "react-icons/io5";
import { BiSolidLockAlt as LockIcon } from "react-icons/bi";
import { PiStudentFill as StudentIcon } from "react-icons/pi";
import {FaUser as Profile} from "react-icons/fa6"

// REDUX IMPORTS
import { SetStudentEmail, SetStudentUsername, SetStudentID } from "../../../redux/slice/student.slice";

import { InputMoreInformation } from "../lecturer/Lecturer.imports";


export { SetStudentEmail, SetStudentUsername, SetStudentID };

export { Link };

export {InputMoreInformation}

export { Mail, LockIcon, StudentIcon , Profile};
