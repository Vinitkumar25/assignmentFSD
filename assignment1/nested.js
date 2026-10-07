console.log("Start");

setTimeout(() => {

    console.log("Inside setTimeout");

    setImmediate(() => {
        console.log("Immediate inside timeout");
    });

}, 0);

setImmediate(() => {

    console.log("Inside setImmediate");

    setTimeout(() => {
        console.log("Timeout inside immediate");
    }, 0);

});

console.log("End");