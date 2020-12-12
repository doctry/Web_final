import Calender from "./components/schedule/Calender";
import Todolist from "./components/schedule/Todolist";
import React, { useState } from "react";

function Schedule() {
  return (
    <>
      <Calender />
      <Todolist />
    </>
  );
}

export default Schedule;
