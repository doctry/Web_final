import React from "react";

function ShowEvent(props) {
  return (
    <div className="place_Weblink">
      <h1>{props.event.title}</h1>
      <ul>
        <li key="0" className="Add_link_li">
          <h1 className="">{"日期：" + props.event.date}</h1>
        </li>
        <li key="1" className="Add_link_li">
          <h1 className="">備註</h1>
          <p>{props.event.description}</p>
        </li>
        <li key="2" className="Add_link_li">
          <h1>{"重要事項：" + (props.event.isImportant ? "是" : "否")}</h1>
        </li>
        <button
          className="Add_link_button"
          onClick={() => {
            props.onCancel();
          }}
        >
          返回
        </button>
      </ul>
    </div>
  );
}

export default ShowEvent;
