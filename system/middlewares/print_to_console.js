const print_to_console = (req, res, next) => {
    console.log(req.headers.host + req.url +" @ " + Date.now());
    next();
};

module.exports = print_to_console;
