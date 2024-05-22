// import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  Landing,
  StudentRegister,
  StudentLogin,
  LecturerRegister,
  LecturerLogin,
  PageNotFound,
  AccountOptionsLogin,
  AccountOptionsRegister,
  RegisterService,
  LoginService,
  VerifyEmail,
  MoreInfoLecturer,
  MoreInfoStudent,
  VerifyEmailPin,
  DashBoardHandler,
  Planning,
  Community,
  Profile,
  Support,
  Notification,
  StudentView,
  LecturerView,
  Project,
  Creator,
} from "./App.imports";
import Cookies from "js-cookie";

const studentToken = Cookies.get("student-token");
const lecturerToken = Cookies.get("lecturer-token");
const helperToken = Cookies.get("helper-token");

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />

      {/* HOME ROUTES */}
      <Route
        path="/"
        element={
          studentToken || helperToken || lecturerToken ? (
            <Navigate to="/dashboard" />
          ) : (
            <Landing />
          )
        }
      />
      {/* DASHBOARD ROUTES */}
      <Route
        path="/dashboard"
        element={
          studentToken || helperToken || lecturerToken ? (
            <DashBoardHandler />
          ) : (
            <Landing />
          )
        }
      />
      {/* DASHBOARD STUDENT ROUTES */}
      {/* <Route
        path="/learning"
        element={studentToken || lecturerToken ? <Learning /> : <Landing />}
      /> */}
      <Route
        path="/planning"
        element={studentToken || lecturerToken ? <Planning /> : <Landing />}
      />
      <Route
        path="/notification"
        element={studentToken || lecturerToken ? <Notification /> : <Landing />}
      />
      <Route
        path="/community"
        element={studentToken || lecturerToken ? <Community /> : <Landing />}
      />
      <Route
        path="/profile"
        element={studentToken || lecturerToken ? <Profile /> : <Landing />}
      />
      <Route
        path="/support"
        element={studentToken || lecturerToken ? <Support /> : <Landing />}
      />
      <Route
        path="/room"
        element={
          studentToken ? (
            <StudentView />
          ) : lecturerToken ? (
            <LecturerView />
          ) : (
            <Navigate to="/account/login-choice" replace={true} />
          )
        }
      />

      <Route
        path="/project"
        element={
          studentToken ? (
            <Project />
          ) : (
            <Navigate to="/account/login-choice" replace={true} />
          )
        }
      />

      <Route
        path="/creator"
        element={
          studentToken || lecturerToken ? (
            <Creator />
          ) : (
            <Navigate to="/account/login-choice" replace={true} />
          )
        }
      />

      {/* VERIFY EMAIL ROUTE  */}
      <Route
        path="/:id/verify/email"
        element={
          !studentToken || !lecturerToken ? (
            <VerifyEmail />
          ) : (
            <Navigate to="/dashboard" replace={true} />
          )
        }
      />
      <Route
        path="/:id/verify/email-pin"
        element={
          !studentToken || !lecturerToken ? (
            <VerifyEmailPin />
          ) : (
            <Navigate to="/dashboard" replace={true} />
          )
        }
      />

      {/* CHOICES ROUTES */}
      <Route
        path="/account/login-choice"
        element={
          !studentToken || !lecturerToken || !helperToken ? (
            <AccountOptionsLogin />
          ) : (
            <Navigate to="/dashboard" replace={true} />
          )
        }
      />
      <Route
        path="/account/register-choice"
        element={
          !studentToken || !lecturerToken || !helperToken ? (
            <AccountOptionsRegister />
          ) : (
            <Navigate to="/dashboard" replace={true} />
          )
        }
      />

      {/* STUDENT ROUTES */}
      <Route
        path="/student/register-account"
        element={
          !studentToken ? (
            <StudentRegister />
          ) : (
            <Navigate to="/dashboard" replace={true} />
          )
        }
      />
      <Route
        path="/student/login-account"
        element={
          !studentToken ? (
            <StudentLogin />
          ) : (
            <Navigate to="/dashboard" replace={true} />
          )
        }
      />
      <Route
        path="/student/more-information"
        element={
          !studentToken ? (
            <MoreInfoStudent />
          ) : (
            <Navigate to="/dashboard" replace={true} />
          )
        }
      />
     
      {/* LECTURER ROUTES */}
      <Route
        path="/lecturer/register-account"
        element={
          !lecturerToken ? (
            <LecturerRegister />
          ) : (
            <Navigate to="/dashboard" replace={true} />
          )
        }
      />
      <Route
        path="/lecturer/login-account"
        element={
          !lecturerToken ? (
            <LecturerLogin />
          ) : (
            <Navigate to="/dashboard" replace={true} />
          )
        }
      />
      <Route
        path="/lecturer/more-information"
        element={
          !lecturerToken ? (
            <MoreInfoLecturer />
          ) : (
            <Navigate to="/dashboard" replace={true} />
          )
        }
      />

      {/* HELPER ROUTES */}
      <Route path="/helper/register-account" element={<RegisterService />} />
      <Route path="/helper/login-account" element={<LoginService />} />
    </Routes>
  );
};

export default function App() {
  return <AppRouter />;
}
