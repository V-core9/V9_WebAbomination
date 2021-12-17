const { Worker } = require("worker_threads");



const w = new Worker("./renderer.worker.js", {  name: 'index'  });


w.once("message", data => {
    console.log(data);
});

w.on("error", error => {
    console.log(error);
});

w.on("exit", exitCode => {
    console.log(`It exited with code ${exitCode}`);
});

w.postMessage( { name: 'login' });
