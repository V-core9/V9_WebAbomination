const { parentPort, workerData } = require("worker_threads");

const v_database = require("v_database");

render_page = async (page_name) => {
    const page = await v_database.item.view('pages', page_name);
    const { title, description, keywords, content } = page;
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${title}</title>
            <meta name="description" content="${description}">
            <meta name="keywords" content="${keywords}">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            ${content}
        </body>
        </html>
    `;
    return html;
};

//parentPort.postMessage(render_page(workerData));

parentPort.on("message",async(workerData) => {
    console.log("workerData" + JSON.stringify(workerData));
    console.log(process.env);
    const html = await render_page(workerData.name);
    parentPort.postMessage(html);
});
