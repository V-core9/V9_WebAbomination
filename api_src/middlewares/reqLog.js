
const { reqInfoModel } = require('../models');

module.exports = async (req, res, next) => {
    var data = {
        headers: req.headers,
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
    };

    data.accepts = req.accepts();
    data.acceptsCharsets = req.acceptsCharsets();
    data.acceptsEncodings = req.acceptsEncodings();
    data.acceptsLanguages = req.acceptsLanguages();
    //data.get = req.get();
    data.is = req.is();
    data.param = req.param();
    data.range = req.range();

    reqInfoModel.new(data);
    
    next();
};
