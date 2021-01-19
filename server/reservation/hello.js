const {spawn} = require("child_process");

const childPython = spawn("python", ["reserve.py"]);

childPython.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`)
});

childPython.on("close", (code) => {
    console.log(`child process exited with code: ${code}`)
})