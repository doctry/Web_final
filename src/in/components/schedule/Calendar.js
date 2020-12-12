import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Schedule.css";

function Calendar() {
  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2020-12-20" },
          { title: "event 2", date: "2020-12-21" },
          { title: "event 3", date: "2020-12-21" },
        ]}
      />
    </div>
  );
}

export default Calendar;
