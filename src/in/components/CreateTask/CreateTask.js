import { getElementError } from "@testing-library/react";
import React, { useState } from "react";
import CreateItem from "./CreateItem";
import Details from "./Details";
import "./CreateTask.css";

function SetText(id) {
  let element = document.getElementById(id);
  if (element != null) return element.value;
  else return null;
}

function CreateTask(props) {
  const ClickEnter = () => {
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
      let task = {
        title: Details[0].text,
        deadline: Details[1].text, // yyyy-mm-dd
        type: Details[2].text, // enum
        description: Details[3].text,
        isImportant: Details[4].text,
      };
      // take the task Details from here
      // also let inpattask in Schedule.js become false
      props.getNewTask(task);
      for (let i = 0; i < Details.length; i++)
        document.getElementById(Details[i].item_id).value = "";
    }
  }

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

export default CreateTask;
