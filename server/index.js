import { connectMongo, Task, Weblink, Club } from "./db";
// import Club from "./models/club";

connectMongo();

const PORT = process.ENV.port;

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
  console.log("a user connectted");

  // task
  async function emitEvent(ID) {
    const ret = await Task.find({ ID: ID }).sort({ date: 1 });
    socket.emit("events", ID, ret);
  }

  socket.on("addTask", async (ID, task) => {
    await Task.insertMany(task);
    emitEvent(ID);
  });

  socket.on("queryEvents", (ID) => {
    // usage: socket.emit("queryEvents", ID)
    emitEvent(ID);
  });

  socket.on("deleteTask", async (_id) => {
    await Task.deleteMany({ _id: _id });
  });

  // weblink

  async function emitWeblink(ID) {
    const ret = await Weblink.find({ ID: ID });
    socket.emit("weblinks", ID, ret);
  }

  socket.on("addWeblink", async (ID, weblink) => {
    await Weblink.insertMany(weblink);
    emitWeblink(ID);
  });

  socket.on("queryWeblinks", (ID) => {
    emitWeblink(ID);
  });

  socket.on("deleteWeblink", async (_id) => {
    await Weblink.deleteMany({ _id: _id });
  });

  socket.on("addMember", () => {
    const childPython = spawn("python", ["./server/reservation/reserve.py"]);

    childPython.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    childPython.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    childPython.on("close", (code) => {
      console.log(`child process exited with code: ${code}`);
    });
  });

    // club
    async function checkClubAccount(validateString, qurey) {
        const ret = await Club.find(qurey)
        let isAccount = false
        if (ret.length >= 1) {
            isAccount = true
        } 

        socket.emit(validateString, isAccount)
    }

    socket.on("validateClubLogin", (account, password) => {
        checkClubAccount("returnClubLogin",
            { account: account, password: password });
    });

    socket.on("checkClubName", (clubname) => {
        console.log(clubname)
        checkClubAccount("returnCheckClubName",
            { clubname: clubname })
    });
    
    socket.on("checkClubAccount", (account) => {
      checkClubAccount("returnCheckClubAccount",
          { account: account });
  });

    socket.on("addClubAccount", (clubname, account, password) => {
        Club.insertMany({ clubname: clubname, account: account, password: password });
    });

    socket.on("ping", (data) => {
        console.log(data)
    }) 
});

server.listen(PORT, () => {
  console.log("server is up on PORT %d", PORT);
});
