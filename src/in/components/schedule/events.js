import { useState } from "react";
import socket from "./../../../socket-io";
import userID from "./../../../userID";

function getToday() {
  var today = new Date();
  var dd = today.getDate();

  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  return today;
}

const today = getToday();

function GetEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const comp = (a, b) => {
    if (a.date < today && !(b.date < today)) {
      return 1;
    }
    if (!(a.date < today) && b.date < today) {
      return -1;
    } 
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

  const deleteTask = (idx,_id) => {
    let temp = events.filter((w,i) => i !== idx);
    setEvents(temp);
    socket.emit("deleteTask", _id);
  }

  const addTask = (task) => {
    socket.emit('addTask', userID, task);
    setLoading(true);
  }

  socket.on("events", (ID, es) => {
    if (ID === userID) {
      if (es) {
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
