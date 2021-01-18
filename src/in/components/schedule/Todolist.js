import React, { useEffect, useState } from "react";
import getEvents from "./events";
import X from "./img/x.png";
import "./Schedule.css";
import socket from "./../../../socket-io";
import userID from "./../../../userID";

function TodoItem(props) {
  const onXClick = () => {
    socket.emit("deleteTask", userID, props._id);
  };

  return (
    <li key={props.id} className="todo-app__item">
      <h1 className="todo-app__item-detail">{props.event.title}</h1>
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
  const [loading, setLoading] = useState(true);

  const { events, ids } = getEvents();

  return (
    <div className="right">
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
          <h1>{events.length ? "待辦事項" : "尚無待辦事項"}</h1>
          <ul className="todo-app__list" id="todo-list">
            {events.map((event, i) => {
              return (
                <TodoItem
                  event={event}
                  key={i.toString()}
                  id={i.toString()}
                  _id={ids[i]}
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
