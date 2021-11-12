var express = require('express');
const $_v = express();

const err_page_404 = (req, res ) => {
  res.send("ERROR 404");
};
const _V_ = (req, res, next) => {
  console.log("Request Was Made To : "+ req.path);
  res.send({
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
    timestamp:  Date.now(),
    userAgent: req.headers.user_agent
  });
};


$_v.use(_V_);



$_v.get('*');

$_v.listen(2000);
