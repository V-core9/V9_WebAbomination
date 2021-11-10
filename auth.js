const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

const accessTokenSecret = 'accessTokenSecret123456';
const refreshTokenSecret = 'refreshTokenSecret1234567890';

const users = [
  {
    username: 'john',
    password: 'password123admin',
    role: 'admin'
  }, {
    username: 'anna',
    password: 'password123member',
    role: 'member'
  }
];

let refreshTokens = [];

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json());

// Homepage to show something at least :D 
app.get("/", function(req, res) {
  res.json({message: "Express is up [ / ]!"});
});
app.get("/index", function(req, res) {
  res.json({message: "Express is up [ /index ]!"});
});
app.get("/home", function(req, res) {
  res.json({message: "Express is up [ /home ]!"});
});
app.get("/root", function(req, res) {
  res.json({message: "Express is up [ /root ]!"});
});
app.get("/index.html", function(req, res) {
  res.json({message: "Express is up [ /index.html ]!"});
});
app.get("/home.html", function(req, res) {
  res.json({message: "Express is up [ /home.html]!"});
});
app.get("/root.html", function(req, res) {
  res.json({message: "Express is up [ /root.html ]!"});
});


// Login Page GET
app.get("/login", function(req, res) {
  res.json({message: "Express is up [ /login ]!"});
});
//  [ ALT_ROUTE ]
app.get("/sign-in", function(req, res) {
  res.json({message: "Express is up [ /sign-in ]!"});
});
// [ ALT_ROUTE ]
app.get("/login.html", function(req, res) {
  res.json({message: "Express is up [ /login.html ]!"});
});
// [ ALT_ROUTE ]
app.get("/sign-in.html", function(req, res) {
  res.json({message: "Express is up [ /sign-in.html ]!"});
});

// Login POST 
app.post('/login', (req, res) => {
  // read username and password from request body
  const { username, password } = req.body;

  // filter user from the users array by username and password
  const user = users.find(u => { return u.username === username && u.password === password; });

  if (user) {
    // generate an access token
    const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });
    const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret);

    refreshTokens.push(refreshToken);

    res.json({
      accessToken,
      refreshToken
    });
  } else {
    res.send('Username or password incorrect');
  }
});




// Register Page GET
app.get("/register", function(req, res) {
  res.json({message: "Express is up [ /register ]!"});
});
//  [ ALT_ROUTE ]
app.get("/sign-up", function(req, res) {
  res.json({message: "Express is up [ /sign-up ]!"});
});
//  [ ALT_ROUTE ]
app.get("/register.html", function(req, res) {
  res.json({message: "Express is up [ /register.html ]!"});
});
//  [ ALT_ROUTE ]
app.get("/sign-up.html", function(req, res) {
  res.json({message: "Express is up [ /sign-up.html ]!"});
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
  jwt.verify(token, refreshTokenSecret, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    // Create new signed JWT token
    const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });

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

// Authenticate JWT -> Validate/verify Token
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, accessTokenSecret, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};

const books = [
  {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "language": "English",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
  },
  {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "language": "Danish",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
  },
  {
      "author": "Dante Alighieri",
      "country": "Italy",
      "language": "Italian",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
  },
];

app.get('/books', authenticateJWT, (req, res) => {
  res.json(books);
});

app.post('/books', authenticateJWT, (req, res) => {
  const { role } = req.user;

  if (role !== 'admin') {
      return res.sendStatus(403);
  }


  const book = req.body;
  books.push(book);

  res.send('book added successfully');
});

app.listen(2500, () => {
  console.log('Authentication service started on port 2500');
});
