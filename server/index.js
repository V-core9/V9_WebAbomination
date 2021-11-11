const tokenSecret = require('./config/jwt_config');
const jwt = require('jsonwebtoken');

// Authenticate JWT -> Validate/verify Token
const authValid = require('./API[s]/auth/index');
//const validateJWT = require('./auth/jwt');
//const validateAdmin = require('./auth/admin');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const users = require('./data/users');
const books = require('./data/books');


let refreshTokens = [];

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json());

const staticPages = {
  $_list: [
    {
      name: "home",
      main_path: "/",
      alt_paths: ["/index", "/home", "/root"],
      type: "GET",
      exec(req, res) {
        res.json({ message: "Express is up [ " + req.path + " ] ]!" });
      }
    },
    {
      name: "login_get",
      main_path: "/login",
      alt_paths: ["`/sign-in", "/verify-user"],
      type: "GET",
      exec(req, res) {
        res.json({ message: "Express is up [ " + req.path + " ] ]!" });
      }
    },
    {
      name: "login_post",
      main_path: "/login",
      alt_paths: ["`/sign-in", "/verify-user"],
      type: "POST",
      exec(req, res) {
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
    },
    {
      name: "register_get",
      main_path: "/register",
      alt_paths: ["`/sign-up", "/new-user"],
      type: "GET",
      exec(req, res) {
        res.json({ message: "Express is up [ " + req.path + " ] ]!" });
      }
    },
    {
      name: "register_post",
      main_path: "/register",
      alt_paths: ["`/sign-up", "/new-user"],
      type: "POST",
      exec(req, res) {
        res.json({ message: "Express is up [ " + req.path + " ] ]!" });
      }
    },
    {
      name: "logout_post",
      main_path: "/logout",
      alt_paths: ["`/sign-out", "/lockout-user"],
      type: "POST",
      exec(req, res) {
        const { token } = req.body;
        refreshTokens = refreshTokens.filter(t => t !== token);

        res.send("Logout successful");
      }
    },
    {
      name: "books_get",
      main_path: "/books",
      type: "GET",
      require_login: true,
      exec(req, res) {
        res.json(books);
      }
    },
    {
      name: "books_post",
      main_path: "/books",
      type: "POST",
      require_login: true,
      requires_admin: true,
      exec(req, res) {
        const { role } = req.user;

        if (role !== 'admin') {
          return res.sendStatus(403);
        }


        const book = req.body;
        books.push(book);

        res.send('book added successfully');
      }
    }
  ],
};



sampleEXEC = (req, res) => {
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
};

// Homepage to show something at least :D 
app.get("/", sampleEXEC);
app.get("/index", sampleEXEC);
app.get("/home", sampleEXEC);
app.get("/root", sampleEXEC);
app.get("/index.html", sampleEXEC);
app.get("/home.html", sampleEXEC);
app.get("/root.html", sampleEXEC);

// Register Page GET
app.get("/register", sampleEXEC);
app.get("/sign-up", sampleEXEC);
app.get("/register.html", sampleEXEC);
app.get("/sign-up.html", sampleEXEC);

// Login Page GET
app.get("/login", sampleEXEC);
app.get("/sign-in", sampleEXEC);
app.get("/login.html", sampleEXEC);
app.get("/sign-in.html", sampleEXEC);

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



app.get('/books', authValid.jwt, (req, res) => {
  res.json(books);
});



app.post('/books', authValid.jwt, (req, res) => {
  authValid.admin(req, res);

  const book = req.body;
  books.push(book);

  res.send('book added successfully');
});



app.listen(2500, () => {
  console.log('Authentication service started on port 2500');
});
