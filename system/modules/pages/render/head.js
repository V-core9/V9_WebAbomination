const render_head = async (data) => { 
    return `<head>
    <meta charset="${data.config.charset}">
    <meta http-equiv="Content-Security-Policy" content="${data.config.ContentSecurityPolicy}">
    <meta http-equiv="Object-Security-Policy" content="${data.config.ObjectSecurityPolicy}">
    <meta name="viewport" content="${data.config.viewport}">
    <link rel="icon" type="image/x-icon" href="https://v-core9tech-demo.vercel.app/assets/logo.png">
    <meta name='Vc9_Page'  content='${data.name}'>
</head>`;
};

module.exports = render_head;
