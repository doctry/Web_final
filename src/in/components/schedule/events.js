import { useState } from "react";
import socket from "./../../../socket-io";
import userID from "./../../../userID";

function GetEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const comp = (a, b) => {
    if (a.isImportant === true && b.isImportant === false) {
      return -1;
    }
    if (a.isImportant === false && b.isImportant === true) {
      return 1;
    }
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  }

  const deleteTask = (idx) => {
    let temp = events.splice(idx, 1);
    setEvents(temp);
  }

  const addTask = (task) => {
    console.log(task);
    socket.emit('addTask', userID, task);
    setLoading(true);
  }

  socket.on("events", (ID, es) => {
    if (ID === userID) {
      if (es) {
        console.log('events');
        let temp = es;
        temp.sort(comp);
        setEvents(temp);
        setLoading(false);
      }
    }
  });

  return { events, loading, addTask, deleteTask };
}

export default GetEvents;
