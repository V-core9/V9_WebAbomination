const render_head = async (data) => {
    return `<head>
    <meta charset="${data.config.charset}"/>
    <meta http-equiv="Content-Security-Policy" content="${data.config.ContentSecurityPolicy}"/>
    <meta http-equiv="Object-Security-Policy" content="${data.config.ObjectSecurityPolicy}"/>
    <meta name="viewport" content="${data.config.viewport}"/>
    <title>${data.page.title}</title>
    <meta name="description" content="${data.page.meta.description}"/>
    <link rel="icon" type="image/x-icon" href="/logo.svg"/>
    <meta name='Vc9_isBot'  content='${data.bot}'/>
    <meta name='Vc9_uIP' content='${data.ip}'/>
    <meta name='Vc9_ipLookup'  content='${JSON.stringify(data.lookup)}'/>
    <meta name='Vc9_Page'  content='${JSON.stringify(data.page)}'/>
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="/logo.svg">
    <meta name="theme-color" content="lime"/>
    <link rel="stylesheet" href="/style/css/app.css"/>
</head>`;
};

module.exports = render_head;
