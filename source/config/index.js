
module.exports = {
    info : {
        name : 'V-core9',
        version: '00.01.02',
        codename : "prophecy",
    },
    env: "production",
    hideXPoweredBy: true,
    strictRouter: true,
    cleanInstall: true,
    auto_init: true,
    bot_ssr_render : false,
    forced_ssr_render: false,
    encoding: `utf8`,
    charset: `UTF-8`,
    lang: `en`,
    port: process.env.PORT || 2500,
    viewport: `width=device-width`,
    ContentSecurityPolicy: "default-src 'self' 'unsafe-inline' ; connect-src 'self' https://cloudflareinsights.com/cdn-cgi/rum  https://www.google-analytics.com www.google-analytics.com; script-src 'self' https://www.google-analytics.com 'unsafe-inline' *.googletagmanager.com  ", 
    ObjectSecurityPolicy: `object-src 'self'` ,
    tables: require('./tables'),
    static_dirs : [
        './public'
    ],
    gtag: "G-FNS24XQB29"
};
