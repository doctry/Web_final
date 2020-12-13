import Calendar from "./components/schedule/Calendar";
import Todolist from "./components/schedule/Todolist";
import InputTask from "./components/schedule/InputTask";
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
      {inputTask? <InputTask /> : <Todolist />}
    </>
  );
}

export default Schedule;
