console.log("Program started");

setTimeout(() => {
    console.log("Timer callback");
}, 0);

setImmediate(() => {
    console.log("Immediate callback");
});

console.log("Program ended");