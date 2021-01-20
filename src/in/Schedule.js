import Calendar from "./components/schedule/Calendar";
import Todolist from "./components/schedule/Todolist";
import CreateTask from "./components/schedule/CreateTask";
import React, { useState, useEffect } from "react";
import "./components/schedule/Schedule.css";
import socket from "./../socket-io";
import userID from "./../userID";
import getEvents from "./components/schedule/events";

function Schedule() {
  const [inputTask, setInputTask] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [init, setInit] = useState(true);
  const [display, setDisplay] = useState([]);

  const { events, loading, addTask, deleteTask } = getEvents();

  const handleDateClick = (date) => {
    setInputTask(true);
    setDeadline(date);
  };

  const stopInputTask = () => {
    setInputTask(false);
  };

  useEffect(() => {
    if (init) {
      socket.emit("queryEvents", userID);
      setInit(false);
    }
  });

  useEffect(() => {
    if(events) {
      setDisplay(events);
    }
  },[events])

  return (
    <>
      <Calendar onDateClick={handleDateClick} events={display} />
      {inputTask ? (
        <CreateTask
          deadline={deadline}
          onFinish={stopInputTask}
          addTask={(task) => {
            addTask(task);
          }}
        />
      ) : (
        <Todolist
          events={display}
          loading={loading}
          deleteTask={() => {
            deleteTask();
          }}
        />
      )}
    </>
  );
}

export default Schedule;
