const EventEmitter = require('events');
const event = new EventEmitter();

event.on("click", ()=>{
    console.log("Hello");
});

event.on("click", ()=>{
    console.log("Dark Batman");
});

event.emit("click");