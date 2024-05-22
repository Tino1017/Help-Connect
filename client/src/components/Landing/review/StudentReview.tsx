import React from "react";
import { Header, Comment } from "./StudentReview.imports";

const reviews: any[] = [
  {
    name: "Michel Doe",
    comment: "best site",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    course:
      "we all love help connect and its amazing and we love its features also simple to use ",
  },
  {
    name: "Michel Mao",
    comment: "best site",
    imageUrl:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    course:
      "we all love help connect and its amazing and we love its features also simple to use ",
  },
  {
    name: "David Down",
    comment: "best site",
    imageUrl:
      "https://images.unsplash.com/photo-1582255334378-4e9bc9505664?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    course:
      "we all love help connect and its amazing and we love its features also simple to use ",
  },
  {
    name: "Moray June",
    comment: "best site",
    imageUrl:
      "https://images.unsplash.com/photo-1565114303958-364b4c007d57?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    course:
      "we all love help connect and its amazing and we love its features also simple to use ",
  },
  {
    name: "Kane Joy",
    comment: "best site",
    imageUrl:
      "https://images.unsplash.com/photo-1603080955672-87307194d4a4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    course:
      "we all love help connect and its amazing and we love its features also simple to use ",
  },
  {
    name: "Roy Vibe",
    comment: "best site",
    imageUrl:
      "https://images.unsplash.com/photo-1619024433865-8a444f3a3c2e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    course:
      "we all love help connect and its amazing and we love its features also simple to use ",
  },
];

export const StudentReview: React.FC = () => {
  return (
    <>
      <section className="student-review-container bg-opacity-80 bg-blur-lg bg-slate-300 backdrop-blur-lg pb-20">
        <Header
          topHeader="STUDENT REVIEW"
          bigHeader="What student say about help connect"
          paragraph="student review on help connect and its amazing that students are really enjoying our platform"
        />

        <section className="flex items-center justify-center flex-wrap gap-3 px-[1rem]">
          {reviews.map((review) => (
            <Comment
              key={review.name}
              name={review.name}
              comment={review.course}
              course={review.comment}
              src={review.imageUrl}
              alt={review.comment}
            />
          ))}
        </section>
      </section>
    </>
  );
};
