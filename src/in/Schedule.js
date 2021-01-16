import Calendar from "./components/schedule/Calendar";
import Todolist from "./components/schedule/Todolist";
import CreateTask from "./components/CreateTask/CreateTask";
import React, { useState } from "react";
import "./components/schedule/Schedule.css";
import socket from "./../socket-io";

function Schedule() {
  const [inputTask, setInputTask] = useState(false);
  const [deadline, setDeadline] = useState("");

  const handleDateClick = (date) => {
    setInputTask(true);
    setDeadline(date);
  };

  const stopInputTask = () => {
    setInputTask(false);
  }

  return (
    <>
      <Calendar onDateClick={handleDateClick} />
      {
        inputTask ? (
          <CreateTask
            deadline={deadline}
            onFinish={stopInputTask}
          />
        ) : (
          <Todolist />
        )
      }
    </>
  );
}

export default Schedule;
