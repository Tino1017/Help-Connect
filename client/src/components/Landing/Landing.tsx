import { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  React,
  Hero,
  // Course,
  Features,
  Learn,
  // Pricing,
  StudentReview,
  Footer,
} from "./Landing.imports";

export const Landing: React.FC = () => {
  const studentToken: string | null = localStorage.getItem("student-token");
  const lecturerToken: string | null = localStorage.getItem("lecturer-token");
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (studentToken) {
      navigate("/dashboard", { replace: true });
    } else if (lecturerToken) {
      navigate("/dashboard", { replace: true });
    } else {
      localStorage.clear();
    }
  }, [navigate, studentToken,  lecturerToken]);
  
  return (
    <>
      <Hero />
      <Features />
      {/* <Course /> */}
      <Learn />
      {/* <Pricing /> */}
      <StudentReview />
      <Footer />
    </>
  );
};
