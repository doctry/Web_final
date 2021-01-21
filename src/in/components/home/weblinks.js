import { useState } from "react";
import socket from "./../../../socket-io";
import userID from "./../../../userID";

function GetWeblinks() {
  const [weblinks, setWeblinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteWeblink = (idx, _id) => {
    let temp = weblinks.filter((w,i) => i !== idx);
    setWeblinks(temp);
    socket.emit("deleteWeblink", _id);
  };

  const addWeblink = (weblink) => {
    console.log(weblink);
    socket.emit("addWeblink", userID, weblink);
    setLoading(true);
  };

  socket.on("weblinks", (ID, es) => {
    if (ID === userID) {
      if (es) {
        setWeblinks(es);
        setLoading(false);
      }
    }
  });

  return { weblinks, loading, addWeblink, deleteWeblink };
}

export default GetWeblinks;
