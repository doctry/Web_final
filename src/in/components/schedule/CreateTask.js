import { getElementError } from "@testing-library/react";
import React, { useState } from "react";
import "./CreateTask.css";
import userID from "./../../../userID";

function CreateTask(props) {

  const [title, setTitle] = useState("");
  const [type, setType] = useState(0); // enum
  const [description, setDescription] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const ClickEnter = () => {
    let inputPass = true;
    if (title === "") {
      alert("請輸入待辦事項");
      inputPass = false;
      console.log("FAQ");
    } else if (type === 0) {
      alert("請選取類別");
      inputPass = false;
      console.log("FAQ");
    }
    if (inputPass) {
      let task = {
        ID: userID,
        title: title,
        date: props.deadline, // yyyy-mm-dd
        type: type, // enum
        description: description,
        isImportant: isImportant,
      };
      // take the task Details from here
      // also let inpattask in Schedule.js become false
      console.log(task);
      props.addTask(task);
      props.onFinish();
    }
  };

  return (
    <div className="placeright">
      <ul className="create_task__list">
        <li key="0" className="create_item__item">
          <h1 className="create_item-detail">待辦事項</h1>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </li>
        <li key="1" className="create_item__item">
          <h1 className="create_item-detail">日期</h1>
          <h1 className="create_item-detail">{props.deadline}</h1>
        </li>
        <li key="2" className="create_item__item">
          <h1 className="create_item-detail">類別</h1>
          <label>租借場地</label>
          <input
            type="radio"
            onChange={() => {
              setType(1);
            }}
            checked={type === 1}
          />
          <label>其他</label>
          <input
            type="radio"
            onChange={() => {
              setType(2);
            }}
            checked={type === 2}
          />
        </li>
        <li key="3" className="create_item__item">
          <h1 className="create_item-detail">備註</h1>
          <input
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </li>
        <li key="4" className="create_item__item">
          <h1 className="create_item-detail">重要事項</h1>
          <input
            type="checkbox"
            onChange={() => {
              setIsImportant(!isImportant);
            }}
            checked={isImportant}
          />
        </li>
        <button onClick={ClickEnter}>送出</button>
        <button
          onClick={() => {
            props.onFinish();
          }}
        >
          取消
        </button>
      </ul>
    </div>
  );
}

export default CreateTask;
