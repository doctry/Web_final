import Calendar from "./components/schedule/Calendar";
import Todolist from "./components/schedule/Todolist";
import { CreateTask, Details } from "./CreateTask";
import React, { useState, useEffect } from "react";
import "./components/schedule/Schedule.css";
import userID from "./../userID";
import socket from "./../socket-io";

function Schedule() {
  const [inputTask, setInputTask] = useState(false);

  const handleDateClick = () => {
    setInputTask(true);
  };

  useEffect(() => {
    socket.emit("queryEvents", userID);
  });

  return (
    <>
      <Calendar onDateClick={handleDateClick} />
      {
        //   the place I // is which you wrote yesterday, and below is my test
        //inputTask? <InputTask /> : <Todolist />}
        inputTask ? <CreateTask /> : <Todolist />
      }
    </>
  );
}

export default Schedule;
