import Calendar from "./components/schedule/Calendar";
import Todolist from "./components/schedule/Todolist";
import CreateTask from "./components/CreateTask/CreateTask";
import React, { useState, useEffect } from "react";
import "./components/schedule/Schedule.css";
import socket from "./../socket-io";
import userID from "./../userID";

function Schedule() {
  const [inputTask, setInputTask] = useState(false);
  const [deadline, setDeadline] = useState("");

  const handleDateClick = (date) => {
    setInputTask(true);
    setDeadline(date);
  };

  const stopInputTask = () => {
    setInputTask(false);
  };

  useEffect(() => {
    if (inputTask === false) {
      socket.emit("queryEvents", userID);
    }
  }, [inputTask]);

  return (
    <>
      <Calendar onDateClick={handleDateClick} />
      {inputTask ? (
        <CreateTask deadline={deadline} onFinish={stopInputTask} />
      ) : (
        <Todolist />
      )}
    </>
  );
}

export default Schedule;
