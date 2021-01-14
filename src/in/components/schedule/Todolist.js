import React /*, { useState }*/ from "react";
import getEvents from "./events";
import X from "./img/x.png";
import "./Schedule.css";
import socket from "./../../../socket-io";
import userID from "./../../../userID";

function TodoItem(props) {
  const onXClick = () => {
    socket.emit('deleteTask', userID, props._id);
  }

  return (
    <li key={props.id} className="todo-app__item">
      <h1 className="todo-app__item-detail">{props.event.title}</h1>
      <img src={X} alt="YEAH" className="todo-app__item-x" onClick={onXClick()} />
    </li>
  );
}

function Todolist() {
  const {events, ids} = getEvents();
  return (
    <div className="right">
      <ul className="todo-app__list" id="todo-list">
        {events.map((event, i) => {
          return <TodoItem event={event} id={i} _id={ids[i]} />;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
