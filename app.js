const $_v = require('./$_v');
const vData = require('./data')

const charset = "utf-8";
const appLanguage = "en-US";
const renderPage = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="${appLanguage}">
    <head>
    <meta charset="${charset}">
    <meta name="description" content="${data.description}">
    <title>${data.title}</title>
    <style>
      body {
          white-space: pre-wrap;
          background: #102030;
          color: #f0f0f0;
      }
    </style>
    </head>
    <body>
      <v_page>
        <h1>🚩 PAGE: ${data.title}</h1>
        <h3>📑 ${data.description}</h3>
        <div>DATA : ${data.data}</div>
        <pre class="reqInfo">
          ${data.reqInfo}
        </pre>
      </v_page>
    </body>
  </html>
  `;
};

var pageData = {
  title: null,
  description: null,
  reqInfo: null
};

const finishReq = (req, res) => {
  res.send(renderPage(pageData));
};




$_v.get('/blog/', (req, res) => {
  pageData = {
    title: "Blog Root",
    description: "Root Blog Page Listing Of Posts",
    reqInfo: JSON.stringify({ host: req.hostname, path: req.path, accepts: req.accepts()  , response: vData.postsList}, true, 2),
    data: vData.postsList
  };

  finishReq(req, res);
});
$_v.get('/tags/', (req, res) => {
  pageData = {
    title: "Tags Root",
    description: "Root TAGS Page Listing Of Posts",
    reqInfo: JSON.stringify({ host: req.hostname, path: req.path, accepts: req.accepts()  , response: vData.tagsList}, true, 2),
    data: vData.tagsList
  };

  finishReq(req, res);
});

$_v.get('/authors/', (req, res) => {
  pageData = {
    title: "Authors Root",
    description: "Root Authors Page Listing Of Posts",
    reqInfo: JSON.stringify({ host: req.hostname, path: req.path, accepts: req.accepts()  , response: vData.authorsList}, true, 2),
    data: vData.authorsList
  };

  finishReq(req, res);
});


$_v.get('/:path', (req, res) => {
  pageData = {
    title: "yea title",
    description: "description description description",
    reqInfo: JSON.stringify({ host: req.hostname, path: req.path, accepts: req.accepts() }, true, 2)
  };

  finishReq(req, res);
});

$_v.get('/posts/:id', (req, res) => {
  var response = vData.findPostById(req.params.id);

  pageData = {
    title: response.title,
    description: response.short_description,
    reqInfo: JSON.stringify({ host: req.hostname, path: req.path, accepts: req.accepts() }, true, 2)
  };

  finishReq(req, res);
});



$_v.get('/tags/:id', (req, res) => {
  var response = vData.findTagById(req.params.id);

  pageData = {
    title: response.title,
    description: response.short_description,
    reqInfo: JSON.stringify({ host: req.hostname, path: req.path, accepts: req.accepts() }, true, 2)
  };

  finishReq(req, res);
});

$_v.get('/authors/:id', (req, res) => {
  var response = vData.findAuthorById(req.params.id);

  pageData = {
    title: response.title,
    description: response.short_description,
    reqInfo: JSON.stringify({ host: req.hostname, path: req.path, accepts: req.accepts() }, true, 2)
  };

  finishReq(req, res);
});

const err_page_404 = (req, res) => {
  pageData = {
    title: "ERROR 404",
    description: "PAGE NOT FOUND ",
    reqInfo: JSON.stringify({ host: req.hostname, path: req.path, accepts: req.accepts() }, true, 2)
  };

  finishReq(req, res);
};

$_v.get('/*', (req, res) => {
  err_page_404(req, req);
});
