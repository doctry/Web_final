import React from "react";
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
        eventClick={(info) => {props.onClickEvent(info.event)}}
      />
    </div>
  );
}

export default Calendar;
