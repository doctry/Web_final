import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import getEvents from "./events"
import "./Schedule.css";

function Calendar(props) {
  const events = getEvents();
  return (
    <div className="calendar">
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={events}
        dateClick={() => {props.onDateClick()}}
      />
    </div>
  );
}

export default Calendar;
