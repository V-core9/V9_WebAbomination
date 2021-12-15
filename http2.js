const spdy = require("spdy");
const express = require("express");
const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

const app = express();

app.use(express.static("public"));

var cache_page = '';
var cache_page_ts = 0;
var cache_page_loop = 200;

render_page = async () => {
    if (Date.now() - cache_page_ts > cache_page_loop) {
        cache_page = await readFile("./public/index.html");
    }
    return cache_page;
};
app.get("/push", async (req, res) => {
    try {

        res.writeHead(200);
        res.end(await render_page());
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

spdy.createServer(
    {
        key: fs.readFileSync("./cert/server.key"),
        cert: fs.readFileSync("./cert/server.crt")
    },
    app
).listen(8000, (err) => {
    if (err) {
        throw new Error(err);
    }
    console.log("Listening on port 8000");
});
