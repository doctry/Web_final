import React, { useEffect, useState } from "react";
import getEvents from "./events";
import X from "./img/x.png";
import "./Schedule.css";
import socket from "./../../../socket-io";
import userID from "./../../../userID";

function TodoItem(props) {
  const onXClick = () => {
    props.deleteTask(props.id);
    socket.emit("deleteTask", userID, props._id);
  };

  return (
    <li key={props.id} className="todo-app__item">
      <p className="todo-app__item-detail">{props.event.date}</p>
      <p className="todo-app__item-detail">{props.event.title}</p>
      <img
        src={X}
        alt="YEAH"
        className="todo-app__item-x"
        onClick={() => {
          onXClick();
        }}
      />
    </li>
  );
}

function Todolist() {
  const { events, loading, addTask, deleteTask } = getEvents();

  const [display, setDisplay] = useState([]);

  useEffect(() => {
    if (events) {
      let temp = events;
      temp.sort();
      setDisplay(temp);
    }
  }, [events]);

  return (
    <div className="right">
      {loading ? (
        <h1>載入待辦事項...</h1>
      ) : (
        <>
          <h1>{display.length ? "待辦事項" : "尚無待辦事項"}</h1>
          <ul className="todo-app__list" id="todo-list">
            {display.map((event, i) => {
              return (
                <TodoItem
                  event={event}
                  key={i.toString()}
                  id={i.toString()}
                  _id={event._id}
                  deleteTask={deleteTask}
                />
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default Todolist;
