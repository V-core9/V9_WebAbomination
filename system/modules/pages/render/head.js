const render_head = async (data) => { 
    return `<head>
    <meta charset="${data.config.charset}">
    <meta http-equiv="Content-Security-Policy" content="${data.config.ContentSecurityPolicy}">
    <meta http-equiv="Object-Security-Policy" content="${data.config.ObjectSecurityPolicy}">
    <meta name="viewport" content="${data.config.viewport}">
    <link rel="icon" type="image/x-icon" href="/logo.svg">
    <meta name='Vc9_Page'  content='${data.name}'>
    <script type="text/javascript" src="/js/v_app.js"></script>
</head>`;
};

module.exports = render_head;
