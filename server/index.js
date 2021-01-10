import {connectMongo, Task} from './db';

connectMongo();

const PORT = 4000;

const app = require("express")();
const server = require("http").createServer(app);
const options = {
  /* ... */
  cors: {
    origin: '*',
  }
};
const io = require("socket.io")(server, options);

// This part is for server behavior
io.on("connection", (socket) => {
  console.log("a user connectted");

  socket.on("addTask", (task) => {
      Task.insertMany(task);
  })
});

server.listen(PORT, () => {
  console.log("server is up on PORT %d", PORT);
});
