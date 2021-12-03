
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json());

const fe_debugger_script = async (req, res) => {
    return `const v_debugger = { 
        api_version: "1.0.5",
        timestamp: ${Date.now()},
        config: {
            ui: true,
            ui_pos: "right"
        },
        request: {
            //Properties
            app: ${JSON.stringify(req.app)},
            baseUrl: ${JSON.stringify(req.baseUrl)},
            body: ${JSON.stringify(req.body)},
            cookies: ${JSON.stringify(req.cookies)},
            fresh: ${JSON.stringify(req.fresh)},
            hostname: ${JSON.stringify(req.hostname)},
            ip: ${JSON.stringify(req.ip)},
            ips: ${JSON.stringify(req.ips)},
            method: ${JSON.stringify(req.method)},
            originalUrl: ${JSON.stringify(req.originalUrl)},
            params: ${JSON.stringify(req.params)},
            path: ${JSON.stringify(req.path)},
            protocol: ${JSON.stringify(req.protocol)},
            query: ${JSON.stringify(req.query)},
            route: ${JSON.stringify(req.route)},
            secure: ${JSON.stringify(req.secure)},
            signedCookies: ${JSON.stringify(req.signedCookies)},
            stale: ${JSON.stringify(req.stale)},
            subdomains: ${JSON.stringify(req.subdomains)},
            xhr: ${JSON.stringify(req.xhr)},
            //Methods
            accepts: ${JSON.stringify(req.accepts())},
            acceptsCharsets: ${JSON.stringify(req.acceptsCharsets())},
            acceptsEncodings: ${JSON.stringify(req.acceptsEncodings())},
            acceptsLanguages: ${JSON.stringify(req.acceptsLanguages())},
            //get: JSON.stringify(req.get()),
            is: ${JSON.stringify(req.is())},
            range: ${JSON.stringify(req.range())}
        },
        pages: ${JSON.stringify(pages.$_list)},
        toggleUI () {
            var item = document.getElementById('v_debugger_block');
            if (item.getAttribute('status') == 'open') {
                item.setAttribute('status', '');
            } else {
                item.setAttribute('status', 'open');
            };
        },
        init() {
            console.log("v_debugger init");

            document.querySelector('body').innerHTML += '<div class="v_block" id="v_debugger_block" ui_pos="'+v_debugger.config.ui_pos+'"><div class="header"><h2>V FrontEnd Debugger Tool</h2></div></div>';
        }
    };
    
    v_debugger.init();

    window.onclick = () => {
        v_debugger.toggleUI();
    }
    `;
};



const system_actions = {
    v_page_render: async (req, res) => {
        res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <script>
            ${await fe_debugger_script(req, res)}
        </script>
        <style>
            * {
                margin: 0;
                padding: 0;
                line-height: 1em;
                color: #545454;
            }

            body {
                overflow: hidden;
                background: #efefef;
            }

            #v_debugger_block {
                position: fixed;
                min-height: 200px;
                min-width: 25%;
                /* border: 0.1em solid #2c4c5a; */
                background: #f5f0f0;
                box-shadow: 0 0 10px gray;
                transition: 0.25s ease all;
                /* padding: 1em; */
                overflow: hidden;
            }

            #v_debugger_block[ui_pos='right'] {
                right: -25%;
                height: calc(100% - 1.2em);
                top: .5em;
            }

            #v_debugger_block[ui_pos='right'][status='open'] {
                right: .5em;
                top: 0.5em;
            }

            .header {
                padding: 1em;
                background: #ebebeb;
                color: white;
                box-shadow: 0 0 5px gray;
            }

            .header h2 {
                font-size: 1.125em;
                font-family: monospace;
            }
        </style>
    </body>
    </html>`);
    }
};

const pages = {

    $_list: [

        {
            name: "home",
            path: "/",
            alt_paths: ["/root", "/root.html", "/home", "/home.html", "/index", "/index.html"],
            type: `get`,
            exec: system_actions.v_page_render
        },

        {
            name: "login_get",
            path: "/login",
            alt_paths: ["`/sign-in", "/verify-user"],
            type: `get`,
            exec: system_actions.v_page_render
        },

        {
            name: "register_get",
            path: "/register",
            alt_paths: ["/sign-up", "/sign-up.html", "/register.html"],
            type: `get`,
            exec: system_actions.v_page_render
        },

    ],

    init() {
        pages.$_list.forEach(page => {
            app[page.type](page.path, page.exec);

            page.alt_paths.forEach(alt_path => {
                app[page.type](alt_path, page.exec);
            });
        });
    }
};

pages.init();


app.listen(2500, () => {
    console.log('Authentication service started on port 2500');
});
