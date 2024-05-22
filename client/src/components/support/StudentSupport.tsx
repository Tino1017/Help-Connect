import { FC } from "react";
// import { FetchUserDataContext } from "../../context/FetchUserData.context";
// import { IDataObject } from "../../context/Context.config";
// import { greetUserBasedOnTime } from "../../global/Functions.global";
// import { DashboardHeader } from "../UI/DashboardHeader";
import { DashboardUI } from "../UI/DashboardUI";
import { ContactForm } from "./ContactForm";
// import { Footer } from "../Landing/Landing.imports";

// const FAQS: { question: string; answer: string }[] = [
//   {
//     question: "How can I sign up as a student?",
//     answer:
//       'To sign up as a student, click on the "Sign Up" button on the homepage and follow the instructions to create an account.',
//   },
//   {
//     question: "How do I reset my password?",
//     answer:
//       'You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the steps to reset your password.',
//   },
//   {
//     question: "How can I browse available courses?",
//     answer:
//       'Once logged in, go to the "Courses" section where you can browse and search for courses based on your interests and requirements.',
//   },
//   {
//     question: "How do I enroll in a course?",
//     answer:
//       'Visit the course page and click on the "Enroll" button. If the course requires payment, you will be directed to the payment page.',
//   },
// ];
export const StudentSupport: FC = () => {
  // const { student } = useContext<IDataObject>(FetchUserDataContext);

  return (
    <>
      <DashboardUI>
        {/* <header className="flex items-center justify-between">
          <div>
            <DashboardHeader
              header="Help & Support"
              stylesHeader="text-2xl mb-1 font-bold"
              stylesSubHeader="text-xs opacity-50"
              subHeader={greetUserBasedOnTime(student.firstName)}
            />
          </div>
        </header> */}
        <ContactForm />
        {/* <div className="FAQ-Section mb-10">
          <div className="FAQ">
            <div className="faq-container">
              <h1>Frequently Asked Questions</h1>
              {FAQS.map((item, index) => (
                <div className="faq-item" key={index}>
                  <div className="question">{item.question}</div>
                  <div className="answer">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* <Footer /> */}
      </DashboardUI>
    </>
  );
};
