
const config = require('../../../config');
const render_head = require('./head');

module.exports = async (req, res, data) => {
    data.config = config;
    res.end(`
<!DOCTYPE html>
<html>
${await render_head(data)}
<body>
</body>
</html>
        `);
};
