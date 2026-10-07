const fs = require("fs");

console.log("1. Program started");

fs.readFile("data.txt", "utf8", (err, data) => {

    if (err) {
        console.log("Error:", err);
        return;
    }

    console.log("2. File read completed");

    setTimeout(() => {
        console.log("4. setTimeout executed");
    }, 0);

    setImmediate(() => {
        console.log("3. setImmediate executed");
    });

});

console.log("5. Program ended");