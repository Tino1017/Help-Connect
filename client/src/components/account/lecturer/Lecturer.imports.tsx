// REACT-ROUTER-DOM IMPORTS
import { Link } from "react-router-dom";

// ICONS IMPORTS
import { IoMail as Mail } from "react-icons/io5";
import { BiSolidLockAlt as LockIcon } from "react-icons/bi";
import { PiStudentFill as StudentIcon } from "react-icons/pi";
import { FaUser as Profile } from "react-icons/fa6";
import { GiTeacher as LecturerIcon } from "react-icons/gi";

import { InputMoreInformation } from "../../UI/Input.moreInfo";

// REDUX IMPORTS
import {
  SetLecturerEmail,
  SetLecturerUsername,
  SetLecturerID,
} from "../../../redux/slice/lecturer.slice";

export { InputMoreInformation };

export { SetLecturerEmail, SetLecturerUsername, SetLecturerID };

export { Link };

export { Mail, LockIcon, StudentIcon, Profile, LecturerIcon };
