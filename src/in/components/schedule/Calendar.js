import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Schedule.css";

function Calendar(props) {
  return (
    <div className="calendar">
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={props.events}
        dateClick={(info) => {props.onDateClick(info.dateStr)}}
      />
    </div>
  );
}

export default Calendar;
