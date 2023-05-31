const EventEmitter = require("events");
const event = new EventEmitter();

event.on("saymyname", () => {
    console.log("Yash");
});
event.on("saymyname", () => {
    console.log("pandey");
});

event.emit("saymyname");