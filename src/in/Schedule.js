import Calendar from "./components/schedule/Calendar";
import Todolist from "./components/schedule/Todolist";
<<<<<<< HEAD
import {CreateTask, Details} from "./components/CreateTask/CreateTask";
import React, { useState } from "react";
=======
import { CreateTask, Details } from "./CreateTask";
import React, { useState, useEffect } from "react";
>>>>>>> 75911ea683cdd56084abe19c04258c812d609a8b
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
<<<<<<< HEAD
      {//   the place I // is which you wrote yesterday, and below is my test
      //inputTask? <InputTask /> : <Todolist />}
      inputTask? <CreateTask getNewTask={getNewTask} /> : <Todolist />}
=======
      {
        //   the place I // is which you wrote yesterday, and below is my test
        //inputTask? <InputTask /> : <Todolist />}
        inputTask ? <CreateTask /> : <Todolist />
      }
>>>>>>> 75911ea683cdd56084abe19c04258c812d609a8b
    </>
  );
}

export default Schedule;
