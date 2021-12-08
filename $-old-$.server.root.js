const tokenSecret = require('./config/jwt_config');
const jwt = require('jsonwebtoken');

// Authenticate JWT -> Validate/verify Token
const authValid = require('./api/auth/index');
//const validateJWT = require('./auth/jwt');
//const validateAdmin = require('./auth/admin');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const users = require('./v_data/data/users');
const books = require('./v_data/data/books');


let refreshTokens = [];

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json());



const action = {
    sample (req, res) {
        res.json(
            {
                api_version: "1.0.5",
                timestamp: Date.now(),
                message: "Ok",
                request: {
                    //Properties
                    app: req.app,
                    baseUrl: req.baseUrl,
                    body: req.body,
                    cookies: req.cookies,
                    fresh: req.fresh,
                    hostname: req.hostname,
                    ip: req.ip,
                    ips: req.ips,
                    method: req.method,
                    originalUrl: req.originalUrl,
                    params: req.params,
                    path: req.path,
                    protocol: req.protocol,
                    query: req.query,
                    route: req.route,
                    secure: req.secure,
                    signedCookies: req.signedCookies,
                    stale: req.stale,
                    subdomains: req.subdomains,
                    xhr: req.xhr,
                    //Methods
                    accepts: req.accepts(),
                    acceptsCharsets: req.acceptsCharsets(),
                    acceptsEncodings: req.acceptsEncodings(),
                    acceptsLanguages: req.acceptsLanguages(),
                    //get: req.get(),
                    is: req.is(),
                    range: req.range()
                }
            }
        );
    },

    logout(req, res) {
        const { token } = req.body;
        refreshTokens = refreshTokens.filter(t => t !== token);

        res.send("Logout successful");
    },
    login (req, res) {
        // read username and password from request body
        const { username, password } = req.body;
    
        // filter user from the users array by username and password
        const user = users.find(u => { return u.username === username && u.password === password; });
    
        if (user) {
            // generate an access token
            const accessToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.access, { expiresIn: jwtConfig.expires });
            const refreshToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.refresh);
    
            refreshTokens.push(refreshToken);
    
            res.json({
                accessToken,
                refreshToken
            });
        } else {
            res.send('Username or password incorrect');
        }
    }
};




const pages = {
    $_list: [
        {
            name: "home",
            path: "/",
            alt_paths: ["/root", "/root.html", "/home", "/home.html", "/index", "/index.html"],
            type: "get",
            exec: action.sample
        },
        {
            name: "login_get",
            main_path: "/login",
            alt_paths: ["`/sign-in", "/verify-user"],
            type: "GET",
            exec: action.sample
        },
        {
            name: "login_post",
            main_path: "/login",
            alt_paths: ["`/sign-in", "/verify-user"],
            type: "POST",
            exec: action.login
        },
        {
            name: "register_get",
            main_path: "/register",
            alt_paths: ["/sign-up", "/sign-up.html", "/register.html"],
            type: "get",
            exec: action.sample
        },
        {
            name: "register_post",
            main_path: "/register",
            alt_paths: ["`/sign-up", "/new-user"],
            type: "POST",
            exec: action.sample
        },
        {
            name: "logout_post",
            main_path: "/logout",
            alt_paths: ["`/sign-out", "/lockout-user"],
            type: "POST",
            exec:action.logout
        }
    ],

    init () {
        pages.forEach(page => {
            app[page.type](page.path, page.exec);
        
            page.alt_paths.forEach(alt_path => {
                app[page.type](alt_path, page.exec);
            });
        });
    }
};

pages.init();

/*
app.get("/", action.sample);
app.get("/index", action.sample);
app.get("/home", action.sample);
app.get("/root", action.sample);
app.get("/index.html", action.sample);
app.get("/home.html", action.sample);
app.get("/root.html", action.sample);

app.get("/register", action.sample);
app.get("/sign-up", action.sample);
app.get("/register.html", action.sample);
app.get("/sign-up.html", action.sample);

app.get("/login", action.sample);
app.get("/sign-in", action.sample);
app.get("/login.html", action.sample);
app.get("/sign-in.html", action.sample);
*/
// Login POST 
app.post('/login', (req, res) => {
    // read username and password from request body
    const { username, password } = req.body;

    // filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password; });

    if (user) {
        // generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.access, { expiresIn: jwtConfig.expires });
        const refreshToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.refresh);

        refreshTokens.push(refreshToken);

        res.json({
            accessToken,
            refreshToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});




app.post('/token', (req, res) => {
    const { token } = req.body;

    // If token does not exist... send 401
    if (!token) {
        return res.sendStatus(401);
    }

    // If refreshTokens does not include this one...send 403..
    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403);
    }

    // Verify JWT 
    jwt.verify(token, jwtConfig.secret.refresh, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        // Create new signed JWT token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, jwtConfig.secret.access, { expiresIn: jwtConfig.expires });

        // Response in JSON format
        res.json({
            accessToken
        });
    });
});

// Should clear the refreshToken and accessToken by doing so...
app.post('/logout', (req, res) => {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter(t => t !== token);

    res.send("Logout successful");
});







app.listen(2500, () => {
    console.log('Authentication service started on port 2500');
});
