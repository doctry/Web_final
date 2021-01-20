import React, { useEffect, useState } from "react";
import X from "./img/x.png";
import "./Schedule.css";

function TodoItem(props) {
  const onXClick = () => {
    props.deleteTask(props.id, props._id);
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

function Todolist(props) {

  return (
    <div className="right">
      {props.loading ? (
        <h1>載入待辦事項...</h1>
      ) : (
        <>
          <h1>{props.events.length ? "待辦事項" : "尚無待辦事項"}</h1>
          <ul className="todo-app__list" id="todo-list">
            {props.events.map((event, i) => {
              return (
                <TodoItem
                  event={event}
                  key={i.toString()}
                  id={i.toString()}
                  _id={event._id}
                  deleteTask={() => {props.deleteTask()}}
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
