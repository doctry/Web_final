import { connectMongo, Task } from "./db";

connectMongo();

const PORT = 4000;

const app = require("express")();
const server = require("http").createServer(app);
const options = {
  /* ... */
  cors: {
    origin: "*",
  },
};
const io = require("socket.io")(server, options);

// This part is for server behavior
io.on("connection", (socket) => {
  async function emitEvent(ID) {
    const ret = await Task.find({ ID: ID }).sort({ date: 1 });
    socket.emit("events", ID, ret);
  }

  function emitResult(ID, result) {
    socket.emit("result", ID, result+"完成")
  }

  console.log("a user connectted");

  socket.on("addTask", async (ID, task) => {
    await Task.insertMany(task);
    emitResult(ID, "加入")
  });

  socket.on("queryEvents", (ID) => {
    emitEvent(ID);
  });

  socket.on("deleteTask", async (ID,_id) => {
    await Task.deleteMany({_id: _id});
    emitResult(ID, "刪除")
  });
});

server.listen(PORT, () => {
  console.log("server is up on PORT %d", PORT);
});
