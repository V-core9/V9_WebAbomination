// require("dotenv").config();
// const PORT = process.env.PORT || 3000;

// const express = require("express");
// const app = express();

// const cors = require("cors");
// var corsOptions = {
//     origin: "http://localhost:" + PORT
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", async (req, res) => {
//     return res.end("Welcome to V9 API Location.");
// });

// app.listen(PORT, async () => {
//     console.log(`Server is running on port ${PORT}.`);
// });


(async () => {
    const port = process.env.PORT || 8000;

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

        const app = require('express')();

        await require('./middleware')(app);
        await require('./routes')(app);

        //! Start listening on port
        app.listen(port, async () => {
            console.log('App Started! PATH: http://localhost:' + port + '/');
        });
    }

})();
