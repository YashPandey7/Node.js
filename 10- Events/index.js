const EventEmitter = require('events');
const event = new EventEmitter ;

event.on("sayMyName", () => {
    console.log("Reputation");
});

event.on("sayMyName", () => {
    console.log("- Taylor Swift");
});

event.emit("sayMyName");

event.on("band", (album, artists) => {
    console.log(`My Favorite album is ${album} of ${artists}`);
});

event.emit("band", "Reputation", "Taylor Swift");