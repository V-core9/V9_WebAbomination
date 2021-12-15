
const vPage = {
    root: async (req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2>index</h2>');
    },
    page: async (req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2>PATH: ' + req.params.page + '</h2>');
    },
    $404: async (req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2>NOT FOUND : 404</h2><h3>PATH: ' + req.path + '</h3>');
    }
};

module.exports = vPage;
