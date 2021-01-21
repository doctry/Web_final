import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Schedule.css";

function Calendar(props) {
  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={props.events}
        dateClick={(info) => {
          props.onDateClick(info.dateStr);
        }}
        eventClick={(info) => {
          const temp = {
            title: info.event.title,
            date: info.event.startStr,
            description: info.event.extendedProps.description,
            isImportant: info.event.extendedProps.isImportant,
          };
          props.onClickEvent(temp);
        }}
      />
    </div>
  );
}

export default Calendar;
