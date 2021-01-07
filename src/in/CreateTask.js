import { getElementError } from "@testing-library/react";
import React, { useState } from "react";
import CreateItem from "./components/CreateTask/CreateItem";
import "./components/CreateTask/CreateTask.css";

function SetText(id) {
  let element = document.getElementById(id);
  if (element != null) return element.value;
  else return null;
}

const Details = {
  title: "",
  deadline: "", // yyyy-mm-dd
  type: "", // enum
  description: "",
  isImportant: false,
};

function ClickEnter() {
  let AllInput = true;
  for (let i = 0; i < Details.length; i++) {
    Details[i].text = SetText(Details[i].item_id);
    if (document.getElementById(Details[i].item_id).value === "") {
      alert(Details[i].item + " not finish yet");
      AllInput = false;
      console.log("FAQ");
    }
  }
  if (AllInput) {
    // take the task Details from here
    // also let inpattask in Schedule.js become false
    console.log(Details);
    //

    for (let i = 0; i < Details.length; i++)
      document.getElementById(Details[i].item_id).value = "";
  }
}

function CreateTask() {
  return (
    <div className="placeright">
      <ul className="create_task__list">
        {Details.map((event) => {
          return (
            <CreateItem
              id={event.item_id}
              item={event.item}
              inner_text={event.inner_text}
            />
          );
        })}
        <button onClick={ClickEnter}>Enter</button>
      </ul>
    </div>
  );
}

export { CreateTask, Details };
