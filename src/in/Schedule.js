import Calendar from "./components/schedule/Calendar";
import Todolist from "./components/schedule/Todolist";
import {CreateTask, Details} from "./components/CreateTask/CreateTask";
import React, { useState } from "react";
import "./components/schedule/Schedule.css";
import userID from "./../userID";
import socket from "./../socket-io";

function Schedule() {
  const [inputTask, setInputTask] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    deadline: "", // yyyy-mm-dd
    type: "", // enum
    description: "",
    isImportant: "",
  });

  const handleDateClick = () => {
    setInputTask(true);
  };

  useEffect(() => {
    socket.emit("queryEvents", userID);
  });

  // new task
  const getNewTask = (task) => {
    setNewTask(task);
    setInputTask(false);
  }

  return (
    <>
      <Calendar onDateClick={handleDateClick} />
      {//   the place I // is which you wrote yesterday, and below is my test
      //inputTask? <InputTask /> : <Todolist />}
      inputTask? <CreateTask getNewTask={getNewTask} /> : <Todolist />}
    </>
  );
}

export default Schedule;
