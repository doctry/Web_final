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

io.on("connection", (socket) => {
  console.log("a user connectted");
});

server.listen(PORT, () => {
  console.log("server is up on PORT %d", PORT);
});
