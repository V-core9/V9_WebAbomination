const { Worker } = require("worker_threads");

const w = new Worker("./test_com_speed.worker.js", { workerData: { ts_start: Date.now() } });


w.once("message", data => {
    data.ts_worker_resp = Date.now();
    data.main_msg_time = data.ts_worker_resp - data.ts_worker;
    console.log(data);
});

w.on("error", error => {
    console.log(error);
});

w.on("exit", exitCode => {
    console.log(`It exited with code ${exitCode}`);
});

