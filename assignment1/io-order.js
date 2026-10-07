const fs = require("fs");

console.log("Start");

fs.readFile(__filename, () => {

    console.log("File reading completed");

    setTimeout(() => {
        console.log("setTimeout");
    }, 0);

    setImmediate(() => {
        console.log("setImmediate");
    });

});

console.log("End");