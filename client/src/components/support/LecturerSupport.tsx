import { FC, useContext } from "react";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { DashboardHeader } from "../UI/DashboardHeader";
import { DashboardUI } from "../UI/DashboardUI";
import { Footer } from "../Landing/Landing.imports";

// const FAQS: { question: string; answer: string }[] = [
//   {
//     question: "How can I become a lecturer on this platform?",
//     answer:
//       'To become a lecturer, navigate to the "Become a Lecturer" page and follow the instructions to submit your application. Our team will review your application and get back to you.',
//   },
//   {
//     question: "How do I create and publish a course?",
//     answer:
//       'After logging in, go to your dashboard and click on the "Create Course" button. Follow the steps to upload your course materials, set pricing, and publish the course.',
//   },
//   {
//     question: "How can I track my earnings?",
//     answer:
//       'You can view your earnings and transaction history in the "Earnings" section of your dashboard. It provides a detailed breakdown of your earnings from courses.',
//   },
//   {
//     question: "How do I communicate with my students?",
//     answer:
//       'You can use the built-in messaging system to communicate with your students. Go to the "Messages" section in your dashboard to send and receive messages.',
//   },
// ];

export const LecturerSupport: FC = () => {
  const { lecturer } = useContext<IDataObject>(FetchUserDataContext);

  return (
    <>
      <DashboardUI>
        {/* <header className="flex items-center justify-between">
          <div>
            <DashboardHeader
              header="Help & Support"
              stylesHeader="text-2xl mb-1 font-bold"
              stylesSubHeader="text-xs opacity-50"
              subHeader={greetUserBasedOnTime(lecturer.firstName)}
            />
          </div>
        </header> */}
{/* 
        <div className="FAQ-Section mb-10">
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
