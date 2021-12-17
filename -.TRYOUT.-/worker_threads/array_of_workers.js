const { Worker } = require("worker_threads");
let number = 150;

var worker_threads = [];
const start_timestamp = Date.now();


for (let i = 0; i < process.env.NUMBER_OF_PROCESSORS; i++) {
    worker_threads.push(new Worker("./worker.js", { workerData: { action: 'fibonacci', data: { num: number } } }));

    worker_threads[i].once("message", data => {
        console.log(data);
        console.log(`worker took ${Date.now() - start_timestamp} ms`);
    });

    worker_threads[i].on("error", error => {
        console.log(error);
    });

    worker_threads[i].on("exit", exitCode => {
        console.log(`It exited with code ${exitCode}`);
    });
    
}
