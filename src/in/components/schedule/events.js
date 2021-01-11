import { useState } from "react";
import socket from "./../../../socket-io";
import userID from "./../../../userID";

function GetEvents() {
  const [events, setEvents] = useState([
    { title: "event 1", date: "2020-12-20" },
    { title: "event 2", date: "2020-12-21" },
    { title: "event 3", date: "2020-12-21" },
  ]);

  const [ids, setIds] = useState([0, 1, 2]);

  socket.on("events", (ID, es) => {
    if (ID === userID) {
      if (es) {
        setEvents(
          es.map((event) => {
            return { title: event.title, date: event.date };
          })
        );
        setIds(
          es.map((event) => {
            return event._id;
          })
        );
      }
    }
  });

  return { events, ids };
}

export default GetEvents;
