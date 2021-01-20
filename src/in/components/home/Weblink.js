import React, { useState, useEffect } from "react";
import ShowLinks from "./ShowLinks";
import Addlink from "./Add_link";
import socket from "./../../../socket-io";
import userID from "./../../../userID";
import getWeblinks from "./weblinks";

function Weblink() {
  const [linkBoard, setLinkBoard] = useState([]);
  const [show, setShow] = useState(true);
  const [init, setInit] = useState(true);

  const { weblinks, loading, addWeblink, deleteWeblink } = getWeblinks();

  const click_whichshow = () => {
    setShow(!show);
  };

  const last_id = () => {
    if (linkBoard.length === 0) return "0";
    else return linkBoard[linkBoard.length - 1].link_id;
  };

  useEffect(() => {
    if (init) {
      socket.emit("queryWeblinks", userID);
      setInit(false);
    }
  },[init]);

  useEffect(() => {
    if (weblinks) {
      setLinkBoard(weblinks);
    }
  }, [weblinks]);

  return (
    <div className="place_Weblink">
      {loading ? (
        <h1>載入中...</h1>
      ) : (
        <>
          <h1>書籤列</h1>
          {show ? (
            <h2 onClick={click_whichshow}>增加連結</h2>
          ) : (
            <h2 onClick={click_whichshow}>返回書籤列</h2>
          )}
          {show ? (
            <ShowLinks linkboard={linkBoard} click_img={deleteWeblink} />
          ) : (
            <Addlink
              last_id={last_id}
              add_link={(weblink) => {
                addWeblink(weblink);
                setShow(true);
              }}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Weblink;
