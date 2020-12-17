import Calendar from "./components/schedule/Calendar";
import Todolist from "./components/schedule/Todolist";
import InputTask from "./components/schedule/InputTask";
import {CreateTask, Details} from "./CreateTask";
import React, { useState } from "react";
import "./components/schedule/Schedule.css";

function Schedule() {
  const [inputTask,setInputTask] = useState(false);

  const handleDateClick = () => {
    setInputTask(true);
  }

  return (
    <>
      <Calendar onDateClick={handleDateClick} />
      {//   the place I // is which you wrote yesterday, and below is my test
      //inputTask? <InputTask /> : <Todolist />}
      inputTask? <CreateTask /> : <Todolist />}
    </>
  );
}

export default Schedule;
