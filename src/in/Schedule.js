import Calendar from "./components/schedule/Calendar";
import Todolist from "./components/schedule/Todolist";
import React, { useState } from "react";
import "./components/schedule/Schedule.css";

function Schedule() {
  return (
    <>
      <Calendar />
      <Todolist />
    </>
  );
}

export default Schedule;
