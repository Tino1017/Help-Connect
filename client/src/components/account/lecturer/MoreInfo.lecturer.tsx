import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { RootState } from "../../../redux/store/student.store";
import {
  successNotification,
  failedNotification,
} from "../../../global/ToastNotification.function";

import { InputMoreInformation } from "./Lecturer.imports";
import { ChangeEventHTMLType } from "../../UI/Input.moreInfo";

import { HiUser as UserIcon } from "react-icons/hi2";
import { BsFillCameraFill as CameraIcon } from "react-icons/bs";
import axios from "axios";
import Cookies from "js-cookie";

interface IFileData {
  filename: string;
  fileSize: number;
  fileType: string;
  fileData: string | null;
}

interface IData {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  phone: string;
  address: string;
  idNumber: string;
  bio: string;
  yearsOfWorkingExperience: string;
  imageProperties: object;
  whatYouTeach: string;
  levelOfEducation: string;
}

export const MoreInfoLecturer: React.FC = () => {
  const [selectedFileImage, setSelectedFileImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [yearsOfWorkingExperience, setYearsOfWorkingExperience] =
    useState<string>("");
  const [whatYouTeach, setWhatYouTeach] = useState<string>("");
  const [levelOfEducation, setLevelOfEducation] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");

  const [selectedFileImageError, setSelectedFileImageError] =
    useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [genderError, setGenderError] = useState<string>("");
  const [dobError, setDobError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");
  const [bioError, setBioError] = useState<string>("");
  const [yearsOfWorkingExperienceError, setYearsOfWorkingExperienceError] =
    useState<string>("");
  const [levelOfEducationError, setLevelOfEducationError] =
    useState<string>("");
  const [whatYouTeachError, setWhatYouTeachError] = useState<string>("");
  const [idNumberError, setIdNumberError] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();

  const lecturer = useSelector((state: RootState) => state.lecturer);
  const { lecturerEmail } = lecturer;

  const handleFirstNameValidation: () => void = function () {
    const firstNameTrim: string = firstName.trim();
    if (!firstNameTrim) {
      setFirstNameError("First name is required");
    } else if (firstNameTrim.length < 3) {
      setFirstNameError("First name must be more than 5 characters");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameValidation: () => void = function () {
    const lastNameTrim: string = lastName.trim();
    if (!lastNameTrim) {
      setLastNameError("Last name is required");
    } else if (lastNameTrim.length < 3) {
      setLastNameError("Last name must be more than 5 characters");
    } else {
      setLastNameError("");
    }
  };

  const handleGenderValidation: () => void = function () {
    const genderTrim: string = gender.trim();
    if (!genderTrim) {
      setGenderError("Gender is required");
    } else {
      setGenderError("");
    }
  };

  const handleDobValidation: () => void = function () {
    if (!dob) {
      setDobError("Date of birth is required");
    } else {
      setDobError("");
    }
  };

  const handlePhoneValidation: () => void = function () {
    const phoneTrim: string = phone.trim();
    if (!phoneTrim) {
      setPhoneError("Phone number is required");
    } else {
      setPhoneError("");
    }
  };

  const handleAddressValidation: () => void = function () {
    const addressTrim: string = address.trim();
    if (!addressTrim) {
      setAddressError("Address is required");
    } else {
      setAddressError("");
    }
  };

  const handleBioValidation: () => void = function () {
    const bioTrim: string = bio.trim();
    if (!bioTrim) {
      setBioError("Bio is required");
    } else if (bioTrim.length < 10) {
      setBioError("Bio must be more than 10 characters");
    } else {
      setBioError("");
    }
  };

  const handleWhatYouTeachValidation: () => void = function () {
    const whatYouTeachTrim: string = whatYouTeach.trim();
    if (!whatYouTeachTrim) {
      setWhatYouTeachError("Name of school is required");
    } else {
      setWhatYouTeachError("");
    }
  };

  const handleYearsOfWorkingExperienceValidation: () => void = function () {
    const yearsOfWorkingExperienceTrim: string =
      yearsOfWorkingExperience.trim();
    if (!yearsOfWorkingExperienceTrim) {
      setYearsOfWorkingExperienceError("Field of study is required");
    } else {
      setYearsOfWorkingExperienceError("");
    }
  };

  const handleIdNumberValidation: () => void = function () {
    const idNumberTrim: string = idNumber.trim();
    if (!idNumberTrim) {
      setIdNumberError("Id number is required");
    } else {
      setIdNumberError("");
    }
  };
  const handleLevelOfEducationValidation: () => void = function () {
    const levelOfEducationTrim: string = levelOfEducation.trim();
    if (!levelOfEducationTrim) {
      setLevelOfEducationError("Id number is required");
    } else {
      setLevelOfEducationError("");
    }
  };

  const handleFileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      // Checking if file type is valid
      if (file.type.startsWith("image/")) {
        // Showing a preview of the image
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          const imageURL = e.target?.result as string;
          const maxSizeImage: number = 2 * 1024 * 1024;
          if (file && imageURL) {
            if (file.size > maxSizeImage) {
              setSelectedFileImageError("Image cannot be more than 2MB");
            } else {
              setSelectedFileImage(file);
              setPreviewUrl(imageURL);
              setSelectedFileImageError("");
            }
          }
        };

        reader.readAsDataURL(file);
      }
    } else {
      failedNotification("Please choose a valid image");
    }
  };

  function handleFirstNameOnChange(e: ChangeEventHTMLType) {
    setFirstName(e.target.value);
    handleFirstNameValidation();
  }

  function handleLastNameOnChange(e: ChangeEventHTMLType) {
    setLastName(e.target.value);
    handleLastNameValidation();
  }

  function handleGenderOnChange(e: ChangeEventHTMLType) {
    setGender(e.target.value);
    handleGenderValidation();
  }
  function handlePhoneNumberOnChange(e: ChangeEventHTMLType) {
    setPhone(e.target.value);
    handlePhoneValidation();
  }

  function handleAddressOnChange(e: ChangeEventHTMLType) {
    setAddress(e.target.value);
    handleAddressValidation();
  }

  function handleDBOOnChange(e: ChangeEventHTMLType) {
    setDob(e.target.value);
    handleDobValidation();
  }

  function handleBioOnChange(e: ChangeEventHTMLType) {
    setBio(e.target.value);
    handleBioValidation();
  }

  function handleYearsOfWorkingExperienceOnChange(e: ChangeEventHTMLType) {
    setYearsOfWorkingExperience(e.target.value);
    handleYearsOfWorkingExperienceValidation();
  }

  function handleWhatYouTeachOnChange(e: ChangeEventHTMLType) {
    setWhatYouTeach(e.target.value);
    handleWhatYouTeachValidation();
  }

  function handleIdNumberOnChange(e: ChangeEventHTMLType) {
    setIdNumber(e.target.value);
    handleIdNumberValidation();
  }

  function handleLevelOfEducationOnChange(e: ChangeEventHTMLType) {
    setLevelOfEducation(e.target.value);
    handleLevelOfEducationValidation();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      handleFirstNameValidation();
      handleLastNameValidation();
      handleGenderValidation();
      handleDobValidation();
      handlePhoneValidation();
      handleAddressValidation();
      handleBioValidation();
      handleYearsOfWorkingExperienceValidation();
      handleWhatYouTeachValidation();
      handleIdNumberValidation();

      if (
        !firstName ||
        !lastName ||
        !gender ||
        !dob ||
        !phone ||
        !address ||
        !bio ||
        !yearsOfWorkingExperience ||
        !selectedFileImage ||
        !whatYouTeach ||
        !idNumber ||
        !levelOfEducation
      ) {
        return failedNotification("You cannot submit a form with empty fields");
      }

      const imageData: IFileData = {
        filename: selectedFileImage?.name,
        fileSize: selectedFileImage?.size,
        fileType: selectedFileImage?.type,
        fileData: previewUrl,
      };

      const sendData: IData = {
        email: lecturerEmail,
        firstName,
        lastName,
        gender,
        dob,
        phone,
        address,
        idNumber,
        bio,
        yearsOfWorkingExperience,
        imageProperties: imageData,
        whatYouTeach,
        levelOfEducation,
      };

      const res = (
        await axios.post("/api/lecturer/register-account/more-info", sendData)
      ).data;

      const { lecturer } = res;

      if (lecturer.lecturerID) {
        Cookies.set("lecturer-token", lecturer.lecturerID, {expires: 1})
        successNotification(res.message);
        navigate("/dashboard", { replace: true });
        window.location.reload();
      } else {
        failedNotification(res.errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section className="more-info-container">
        <section className="bg-white rounded-xl drop-shadow-sm py-5 px-5 md:mt-10">
          <header className="more-info-container__header">
            <h2 className="more-info-container__header__head">
              Lecturer more information
            </h2>
            <p className="more-info-container__header__para">
              Please provide us with more information.
            </p>
          </header>

          <section>
            <form
              onSubmit={(e: React.ChangeEvent<HTMLFormElement>) =>
                handleSubmit(e)
              }
            >
              <div className="flex justify-center items-center">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="profile picture"
                    className="rounded-full border-2 h-20 w-20"
                  />
                ) : (
                  <div
                    className={`flex border-4 ${
                      selectedFileImageError && "border-red-500"
                    } relative items-center justify-center rounded-full h-20 w-20 text-white bg-blue-950 text-xl font-bold`}
                  >
                    <span className="text-5xl">
                      <UserIcon />
                    </span>
                  </div>
                )}
                <div className="relative">
                  <label
                    htmlFor="profile-picture-input"
                    className="flex items-center justify-center drop-shadow-md absolute -left-5 gap-2 custom-file-input-label bg-slate-300 font-medium text-slate-600 py-2 px-3 rounded-full h-10 w-10 hover:cursor-pointer"
                  >
                    <span>
                      <CameraIcon />
                    </span>
                    <span className="text-sm hidden">Upload picture</span>
                  </label>
                  <input
                    type="file"
                    id="profile-picture-input"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleFileImageChange(e)
                    }
                    className="hidden"
                  />
                </div>
              </div>

              <section className="mt-4">
                <h3 className="text-sm opacity-80">Basic information</h3>
                <div className="flex items-center flex-wrap gap-2 mt-2">
                  <InputMoreInformation
                    type="text"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e: ChangeEventHTMLType) =>
                      handleFirstNameOnChange(e)
                    }
                    errorMessage={firstNameError}
                  />

                  <InputMoreInformation
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e: ChangeEventHTMLType) =>
                      handleLastNameOnChange(e)
                    }
                    errorMessage={lastNameError}
                  />

                  <InputMoreInformation
                    type="text"
                    placeholder="Enter ID number"
                    value={idNumber}
                    onChange={(e: ChangeEventHTMLType) =>
                      handleIdNumberOnChange(e)
                    }
                    errorMessage={idNumberError}
                  />
                </div>
                <div className="flex items-center flex-wrap gap-2 mt-3">
                  <InputMoreInformation
                    type="date"
                    placeholder="Enter date of birth"
                    value={dob}
                    onChange={(e: ChangeEventHTMLType) => handleDBOOnChange(e)}
                    errorMessage={dobError}
                  />
                  <InputMoreInformation
                    type="text"
                    placeholder="Enter gender"
                    value={gender}
                    onChange={(e: ChangeEventHTMLType) =>
                      handleGenderOnChange(e)
                    }
                    errorMessage={genderError}
                  />
                </div>
                <div className="flex items-center flex-wrap gap-2 mt-3">
                  <InputMoreInformation
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e: ChangeEventHTMLType) =>
                      handlePhoneNumberOnChange(e)
                    }
                    errorMessage={phoneError}
                  />
                  <InputMoreInformation
                    type="address"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e: ChangeEventHTMLType) =>
                      handleAddressOnChange(e)
                    }
                    errorMessage={addressError}
                  />
                </div>
              </section>

              <section className="mt-4">
                <h3 className="text-sm opacity-80">Education information</h3>
                <div className="flex items-center flex-wrap gap-2 mt-3">
                  <InputMoreInformation
                    type="text"
                    placeholder="Years of work experience"
                    value={yearsOfWorkingExperience}
                    onChange={(e: ChangeEventHTMLType) =>
                      handleYearsOfWorkingExperienceOnChange(e)
                    }
                    errorMessage={yearsOfWorkingExperienceError}
                  />
                </div>
              </section>

              <section className="mt-4">
                <div className="flex items-center flex-wrap gap-2 mt-3">
                  <InputMoreInformation
                    type="text"
                    placeholder="Level of teaching"
                    value={levelOfEducation}
                    onChange={(e: ChangeEventHTMLType) =>
                      handleLevelOfEducationOnChange(e)
                    }
                    errorMessage={levelOfEducationError}
                  />
                  <InputMoreInformation
                    type="text"
                    placeholder="What do you teach?"
                    value={whatYouTeach}
                    onChange={(e: ChangeEventHTMLType) =>
                      handleWhatYouTeachOnChange(e)
                    }
                    errorMessage={whatYouTeachError}
                  />
                </div>
              </section>

              <section className="mt-4">
                <h3 className="text-sm opacity-80">Profile information</h3>
                <div className="flex items-center flex-wrap gap-2 mt-3">
                  <textarea
                    cols={5}
                    rows={3}
                    placeholder="Enter your bio"
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleBioOnChange(e)
                    }
                    value={bio}
                    className={`p-[0.4rem] flex-1 ${
                      bioError && "border border-red-500"
                    } outline-none bg-slate-200 rounded text-sm`}
                  ></textarea>
                </div>
              </section>
              <section className="my-2">
                <p className="text-xs opacity-60 max-w-[34rem]">
                  By continuing you agree to our{" "}
                  <span className="text-blue-500">terms</span> and{" "}
                  <span className="text-blue-500">conditions</span> please read
                  our <span className="text-blue-500">terms</span> and{" "}
                  <span className="text-blue-500">conditions</span>
                </p>
              </section>
              <button
                type="submit"
                className="bg-blue-950 flex-1 text-center text-white rounded px-[0.4rem] py-[0.5rem] text-sm w-full"
              >
                Create an account
              </button>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};
