import { connectMongo, Task } from "./db";

connectMongo();

const PORT = 4000;

const { spawn } = require("child_process");

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

  console.log("a user connectted");

  socket.on("addTask", async (ID, task) => {
    console.log(task);
    await Task.insertMany(task);
    emitEvent(ID);
  });

  socket.on("queryEvents", (ID) => {
    emitEvent(ID);
  });

  socket.on("deleteTask", async (_id) => {
    await Task.deleteMany({ _id: _id });
  });

  socket.on("addMember", () => {
    const childPython = spawn("python", ["./server/reservation/reserve.py"]);

    childPython.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    childPython.on("close", (code) => {
      console.log(`child process exited with code: ${code}`);
    });
  });
});

server.listen(PORT, () => {
  console.log("server is up on PORT %d", PORT);
});
