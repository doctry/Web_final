import React, { useState } from "react";
import events from "./events";
import X from "./img/x.png";
import "./Schedule.css";

function TodoItem(props) {
  console.log(props.id);
  return (
    <li key={props.id} className="todo-app__item">
      <h1 className="todo-app__item-detail">{props.event.title}</h1>
      <img src={X} alt="YEAH" className="todo-app__item-x" onClick={() => {}} />
    </li>
  );
}

function Todolist() {
  return (
    <div className="right">
      <ul className="todo-app__list" id="todo-list">
        {events.map((event, i) => {
          return <TodoItem event={event} id={i} />;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
