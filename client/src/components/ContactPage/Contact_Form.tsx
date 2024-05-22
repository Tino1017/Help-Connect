import React from 'react';
import Call from './Call.png';

export const ContactForm: React.FC = () => {
  return (
    <>
    <div className="contact-form">
      <h1>Contact Help Connect</h1>
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Contact Us</h2>
            <form action="#" method="post">
              <input type="text" name="name" placeholder="Enter Your Name" /> {/* Added closing tag */}
              <input type="email" name="email" placeholder="Enter Your Email" /> {/* Changed 'name' to 'email' */}
              <textarea name="message" placeholder="Your Message"></textarea> {/* Added closing tag */}
              <button type="submit" className="btn">
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="form-img">
            <img src={Call} alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
