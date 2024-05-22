import React from "react";

import { ButtonPrimary, Link } from "./Footer.import ";

export const Footer: React.FC = () => {

    const CREATED_ON: number = 2023;
    const currentYear: number = new Date().getFullYear()
    let displayDate: number | string;


    if(CREATED_ON === currentYear) {
        displayDate = CREATED_ON
    } else {
        displayDate = `${CREATED_ON} - ${currentYear}}`
    }



  return (
    <>
      <footer className="footer-container">
        <section className="footer-container__top">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="w-10 h-10 bg-blue-950 rounded-full"></div>
            <p className="text-sm opacity-80 font-normal">
              all your lessons in your fingertips!
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-sm opacity-80 font-normal">
              help connect simplified learning.
            </p>
            <ButtonPrimary name="Get Started" />
          </div>
        </section>

        <section className="footer-container__bottom">
          <div className="footer-container__bottom-container">
            <h5 className="footer-container__bottom-container__header">
              HELP CONNECT
            </h5>
            <ul className="footer-container__bottom-container__links">
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Help and support</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">About Us</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Contact Us</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Features</Link>
              </li>
            </ul>
          </div>
          <div className="footer-container__bottom-container">
            <h5 className="footer-container__bottom-container__header">
              CONTENTS
            </h5>
            <ul className="footer-container__bottom-container__links">
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Primary content</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Secondary content</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Tertiary content</Link>
              </li>
            </ul>
          </div>
          <div className="footer-container__bottom-container">
            <h5 className="footer-container__bottom-container__header">
              RESOURCES
            </h5>
            <ul className="footer-container__bottom-container__links">
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Revision Sheets</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Past Question papers</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Quiz</Link>
              </li>
            </ul>
          </div>
          <div className="footer-container__bottom-container">
            <h5 className="footer-container__bottom-container__header">HELP</h5>
            <ul className="footer-container__bottom-container__links">
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Home work</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Tutoring</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Private Lesson</Link>
              </li>
            </ul>
          </div>
          <div className="footer-container__bottom-container">
            <h5 className="footer-container__bottom-container__header">
              EXTERNAL SERVICES
            </h5>
            <ul className="footer-container__bottom-container__links">
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Home work</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Tutoring</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Private Lesson</Link>
              </li>
            </ul>
          </div>
          <div className="footer-container__bottom-container">
            <h5 className="footer-container__bottom-container__header">
              GET OUR MOBILE APP
            </h5>
            <ul className="footer-container__bottom-container__links">
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Home work</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Tutoring</Link>
              </li>
              <li className="footer-container__bottom-container__links-link">
                <Link to="#">Private Lesson</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="copy-right-container">
          <p>Help connect &copy;copyright reserved since {displayDate}</p>
        </section>
      </footer>
    </>
  );
};
