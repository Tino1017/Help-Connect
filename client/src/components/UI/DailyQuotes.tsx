import { FC } from "react";
import { IDailyQuotes } from "../dashboard/Dashboard.config";

export const DailyQuotes: FC<IDailyQuotes> = ({ quote, author, category }) => {
  if (!quote && !author && !category) {
    return <p>Loading...</p>;
  } else {
    return (
      <section>
        {/* <p className="text-xs mb-2 opacity-50">Topic: {category}</p> */}
        <p className="text-xs opacity-70">{quote}</p>
        <p className="text-sm mt-2 text-blue-900">{author}</p>
      </section>
    );
  }
};
