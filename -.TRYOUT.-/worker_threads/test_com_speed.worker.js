const { parentPort, workerData } = require("worker_threads");


render_page = (value) => {
    value.ts_worker = Date.now();
    value.worker_in_time = value.ts_worker - value.ts_start;
    return value;
};

parentPort.postMessage(render_page(workerData));

