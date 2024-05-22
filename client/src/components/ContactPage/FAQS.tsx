import React from 'react';

export const FAQ: React.FC =()=>{
  const faqData = [
   
    // For Students
    { question: 'How can I sign up as a student?', answer: 'To sign up as a student, click on the "Sign Up" button on the homepage and follow the instructions to create an account.' },
    { question: 'How do I reset my password?', answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the steps to reset your password.' },
    { question: 'How can I browse available courses?', answer: 'Once logged in, go to the "Courses" section where you can browse and search for courses based on your interests and requirements.' },
    { question: 'How do I enroll in a course?', answer: 'Visit the course page and click on the "Enroll" button. If the course requires payment, you will be directed to the payment page.' },

    // For Lecturers
    { question: 'How can I become a lecturer on this platform?', answer: 'To become a lecturer, navigate to the "Become a Lecturer" page and follow the instructions to submit your application. Our team will review your application and get back to you.' },
    { question: 'How do I create and publish a course?', answer: 'After logging in, go to your dashboard and click on the "Create Course" button. Follow the steps to upload your course materials, set pricing, and publish the course.' },
    { question: 'How can I track my earnings?', answer: 'You can view your earnings and transaction history in the "Earnings" section of your dashboard. It provides a detailed breakdown of your earnings from courses.' },
    { question: 'How do I communicate with my students?', answer: 'You can use the built-in messaging system to communicate with your students. Go to the "Messages" section in your dashboard to send and receive messages.' },
  ];

  return (
    <div className='FAQ-Section'>
    <div className='FAQ'>
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="question">{item.question}</div>
          <div className="answer">{item.answer}</div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};


