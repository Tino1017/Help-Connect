import { FC, useEffect, useState } from "react";
import { Calendar, DateLocalizer, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import axios from "axios";

const localizer: DateLocalizer = momentLocalizer(moment);

interface IEvents {
  title: string;
  start: Date;
  end: Date;
}

export const DisplayPlanner: FC = () => {
  const [eventData, setEventData] = useState<Array<string>>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [event, setEvent] = useState<any>([]);
  const currentDate: Date = new Date();
  const endDate: Date = new Date(currentDate);
  endDate.setDate(endDate.getDate() + 30); // Add 30 days to the start date

  const events: IEvents[] = [
    {
      title: event.eventTopic ?  event.eventTopic : 'Event',
      start: new Date(event.eventStartDate ? event.eventStartDate : Date.now()),
      end: new Date(event.eventEndDate ? event.eventEndDate : Date.now()),
    },
  ];

  useEffect(() => {
    async function getEvents() {
      const res = await axios.get("/api/fetch-event");
      setEventData(res.data);

      if (res.data) {
        eventData.map((item) => {
          setEvent(item);
        });
      }
    }
    getEvents();
  }, [eventData]);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        views={["month", "agenda"]} // Display only the month view
        defaultDate={currentDate} // Set the initial date
        defaultView={"month"} // Set the default view to month
        min={currentDate} // Set the minimum date to the start date
        max={endDate} // Set the maximum date to 30 days from the start date
        style={{ height: "550px" }}
      />
    </div>
  );
};
