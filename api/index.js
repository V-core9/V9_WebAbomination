const count = process.env.CORE_COUNT || 1;
const coreCount = require("os").cpus().length;
const totalCPUs = (count < coreCount) ? count : coreCount;

const cluster = require("cluster");

if (cluster.isMaster) {

    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        cluster.fork();
    });

} else {
    const port = process.env.PORT || 8000;
    const app = require('express')();

    require('./config').init(app);
    require('./middleware')(app);
    require('./routes')(app);

    app.listen(port, async () => {
        console.log('App Started! PATH: http://localhost:' + port + '/');
    });
}
