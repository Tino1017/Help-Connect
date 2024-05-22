import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/store/student.store";
import { useSelector } from "react-redux";
import { failedNotification, successNotification } from "../../../global/ToastNotification.function";
import axios from "axios";

interface IPin {
  pin: string;
  generatedPin: string;
}
interface IData {
  username: string;
  email: string;
}

export const VerifyEmailPin: React.FC = () => {
  const [userPin, setUserPin] = useState<string>("");
  const [userPinError, setUserPinError] = useState<string>("");
  const studentData = useSelector((state: RootState) => state.student);
  const lecturerData = useSelector((state: RootState) => state.lecturer);
  const navigate = useNavigate();
  const { studentID, studentUsername, studentEmail, studentPin } = studentData;
  const { lecturerID, lecturerUsername, lecturerEmail, lecturerPin } = lecturerData;

  const sendPins: IPin = {
    pin: userPin,
    generatedPin:
      studentPin && studentID
        ? studentPin
        : lecturerID && lecturerPin
        ? lecturerPin
        : null,
  };

  const sendData: IData = {
    username: studentID ? studentUsername : lecturerID && lecturerUsername,
    email: studentID ? studentEmail : lecturerID && lecturerEmail,
  };
  const pinValidatorHandler: () => void = function () {
    if (!userPin.trim()) {
      setUserPinError("Verification code is required");
    } else {
      setUserPinError("");
    }
  };

  const navigateUser: (path: string) => void = function (path: string) {
    navigate(path, { replace: true });
  };

  const sendPinHandler: (e: React.FormEvent<HTMLFormElement>) => void =
    async function (e: React.FormEvent<HTMLFormElement>) {
      try {
        e.preventDefault();
        pinValidatorHandler();

        if (userPinError) {
          failedNotification(`Error message: ${userPinError}`);
        } else if (studentPin && studentID) {
          const res = await axios.post("/api/verify-code", sendPins);
          const data = res.data;

          if (data.validated) {
            navigateUser("/student/more-information");
          } else {
            failedNotification(`Invalid PIN: ${data.errorMessage}`);
          }
        } else if (lecturerID && lecturerPin) {
          const res = await axios.post("/api/verify-code", sendPins);
          const data = res.data;

          if (data.validated) {
            navigateUser("/lecturer/more-information");
          } else {
            failedNotification(`Invalid PIN: ${data.errorMessage}`);
          }
        }
      } catch (error) {
        failedNotification("Internal server error!!");
      }
    };

  const resendPinHandler = async function () {
    try {
      const res = await axios.post("/api/verify-email-pin", sendData);
      const data = res.data;

      if(data.messageID) {
        successNotification("Verification code sent")
      } else {
        failedNotification("Something went wrong while sending code")
      }
    } catch (error) {
      failedNotification("Internal server error")
    }
  };

  return (
    <>
      <section className="bg-opacity-80 h-screen w-full flex items-center justify-center">
        <section className="bg-white py-5 px-6 rounded drop-shadow-lg">
          <header className="mb-3">
            <h1 className="text-xl font-semibold text-blue-950">
              Please verify this email address
            </h1>
            <p className="text-sm opacity-50">
              An email has been sent to your email address enter the code below
            </p>
          </header>
          <section className="flex flex-col gap-1">
            <form
              className="flex flex-col mt-2"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                sendPinHandler(e)
              }
            >
              <input
                type="text"
                placeholder="Enter your code: 0000"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUserPin(e.target.value);
                  pinValidatorHandler();
                }}
                value={userPin}
                className="outline-none bg-slate-100 rounded p-2 text-sm"
              />
              <div className="flex items-end justify-end mb-5 mt-1">
                <Link
                  onClick={resendPinHandler}
                  to="#"
                  className="text-sm text-blue-950"
                >
                  Resend code
                </Link>
              </div>
              <button
                type="submit"
                // onClick={navigateHandler()}
                className="bg-blue-950 text-white p-2 rounded text-sm"
              >
                Confirm code
              </button>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};
