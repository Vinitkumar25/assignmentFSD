const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", () => {

    console.log("I/O callback");

    setTimeout(() => {
        console.log("Timeout 1");
    }, 0);

    setImmediate(() => {
        console.log("Immediate 1");
    });

    setImmediate(() => {
        console.log("Immediate 2");
    });

});

console.log("End");