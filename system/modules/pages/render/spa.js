
const config_load = require('../../../config');
const render_head = require('./head');

module.exports = async (req, res, data) => {

    data.config = await config_load();
    res.end(`
<!DOCTYPE html>
<html>
${await render_head(data)}
<body>
</body>
</html>
        `);
};
