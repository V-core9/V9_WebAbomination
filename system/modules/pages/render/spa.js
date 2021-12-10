
const config = require('../../../config');
const v_debugger = require('../../debugger');

module.exports = async (req, res, data) => {
    res.end(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="${config.charset}">
    <meta http-equiv="Content-Security-Policy" content="${config.ContentSecurityPolicy}">
    <meta http-equiv="Object-Security-Policy" content="${config.ObjectSecurityPolicy}">
    <meta name="viewport" content="${config.viewport}">
    <link rel="preload" href="https://v-core9tech-demo.vercel.app/assets/style/css/main_defaults.css" as="style">
    <link rel="preload" href="https://v-core9tech-demo.vercel.app/homepage.V-core9.js" as="script">
    <link href="https://v-core9tech-demo.vercel.app/assets/style/css/main_defaults.css" rel="stylesheet">
    <script src="https://v-core9tech-demo.vercel.app/homepage.V-core9.js"></script>
</head>
<body>
</body>
</html>
        `);
};
