

const render_head = async (data) => {
    const {page, config, bot, ip, lookup} = data;
    return `<head>
    <meta charset="${config.charset}"/>
    <meta http-equiv="Content-Security-Policy" content="${config.ContentSecurityPolicy}"/>
    <meta http-equiv="Object-Security-Policy" content="${config.ObjectSecurityPolicy}"/>
    <meta name="viewport" content="${config.viewport}"/>
    <title>${(page.title !== undefined)? page.title: ''}</title>
    <meta name="description" content="${(page.meta !== undefined)? (page.meta.description !== undefined)? page.meta.description : '' : ''}}"/>
    <link rel="icon" type="image/x-icon" href="/logo.svg"/>
    <meta name='Vc9_isBot'  content='${bot}'/>
    <meta name='Vc9_uIP' content='${ip}'/>
    <meta name='Vc9_ipLookup'  content='${JSON.stringify(lookup)}'/>
    <meta name='Vc9_Page'  content='${JSON.stringify(page)}'/>
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="/logo.svg">
    <meta name="theme-color" content="lime"/>
    <link rel="stylesheet" href="/style/css/app.css"/>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${config.gtag}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${config.gtag}');
    </script>
</head>`;
};

module.exports = render_head;
