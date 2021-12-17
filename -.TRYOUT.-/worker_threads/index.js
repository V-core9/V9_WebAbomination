const { Worker } = require("worker_threads");

let number = 40;

const worker = new Worker("./worker.js", { workerData: { action: 'fibonacciNumber', data: { num: number } } });

var looper = setInterval(async () => {
    console.log("Execution in main thread");
}, 10);


worker.once("message", data => {
    clearInterval(looper);
    looper = null;
    console.log(data);
});

worker.on("error", error => {
    console.log(error);
});

worker.on("exit", exitCode => {
    console.log(`It exited with code ${exitCode}`);
});



