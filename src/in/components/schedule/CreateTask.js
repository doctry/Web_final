import React, { useState } from "react";
import "./CreateTask.css";
import userID from "./../../../userID";

function CreateTask(props) {
  const [title, setTitle] = useState("");
  // const [type, setType] = useState(0); // enum
  const [description, setDescription] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const ClickEnter = () => {
    let inputPass = true;
    if (title === "") {
      alert("請輸入待辦事項");
      inputPass = false;
    }
    if (inputPass) {
      let task = {
        ID: userID,
        title: title,
        date: props.deadline, // yyyy-mm-dd
        // type: type, // enum
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
            className="create_item-input"
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

        <li key="3" className="create_item__item">
          <h1 className="create_item-detail">備註</h1>
          <input
            className="create_item-input"
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </li>
        <li key="4" className="create_item__item">
          <h1 className="create_item-detail">重要事項</h1>
          <input
            className="create_item-checkbox"
            type="checkbox"
            onChange={() => {
              setIsImportant(!isImportant);
            }}
            checked={isImportant}
          />
        </li>
      </ul>
      <button className="create_item_btn" onClick={ClickEnter}>送出</button>
        <button
          className="create_item_btn"
          onClick={() => {
            props.onFinish();
          }}
        >
          取消
        </button>
    </div>
  );
}

export default CreateTask;
