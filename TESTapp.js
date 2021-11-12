var express = require('express');
var app = express();

const routes = {};

var routesAddedCount = 0;
const addNewRoute = (type, path, exec) => {
  
  routesAddedCount++;
  console.log(`Routes Added Count : ${routesAddedCount}`);
  
  switch (type) {
    case 'get':
      console.log('GET : ' +path);
      app.get(path, exec);
      break;

    case 'post':
      console.log('POST : ' +path);
      app.post(path, exec);
      break;

    case 'put':
      console.log('PUT : ' +path);
      app.put(path, exec);
      break;

    case 'delete':
      console.log('DELETE : ' +path);
      app.delete(path, exec);
      break;

    default:
      //console.log('UNKNOWN : ' +path);
      break;
  }
};

const setupRoutes = () => {
  console.log(Object.keys(routes).length);
  //console.log(Object.values(routes).length);
  Object.values(routes).forEach(item => {
    //console.log(item);
    addNewRoute(item.type, item.main_path, item.exec);
    if (typeof item.alt_path !== 'undefined') {
      item.alt_path.forEach(altPathItem => {
        addNewRoute(item.type, altPathItem, item.exec);
      });
    }
  });
};

const homeFunc = (req, res) => {
  res.send('hello world from HOME');
};

routes["home"] = {
  main_path: "/",
  type: "get",
  alt_path: ["/home","/home.html","/welcome","/welcome.html", "/index", "/index.html"],
  exec: homeFunc
};

const aboutFunc = (req, res) => {
  res.send('hello world from ABOUT');
};

routes["about"] = {
  main_path: "/about",
  type: "get",
  alt_path: ["/about.html", "/about_us", "/about_us.html", "/more_info", "/more_info.html"],
  exec: aboutFunc
};


const contactFunc = (req, res) => {
  res.send('hello world from CONTACT US PAGE');
};

routes["contact"] = {
  main_path: "/contact",
  type: "get",
  alt_path: ["/contact.html", "/contact_us", "/contact_us.html", "/message", "/message.html"],
  exec: contactFunc
};

setupRoutes();
// respond with "hello world" when a GET request is made to the homepage


app.get('/random.text', function (req, res) {
  res.send('random.text');
});

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params);
});
app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book');
  })
  .post(function (req, res) {
    res.send('Add a book');
  })
  .put(function (req, res) {
    res.send('Update the book');
  });

app.listen(2000);
