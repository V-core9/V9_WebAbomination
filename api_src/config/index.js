
const api_root = '/api';
const api_v1 = api_root + '/v1';


module.exports = {
    api_root,
    api_v1,
    info : {
        name : 'V-core9',
        version: '00.01.02',
        codename : "prophecy",
    },
    location: "https://v-core9.com/",
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
    ContentSecurityPolicy: "default-src 'self' 'unsafe-inline' ; connect-src 'self' https://cloudflareinsights.com/cdn-cgi/rum  ; script-src 'self' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com ", 
    ObjectSecurityPolicy: `object-src 'self'` ,
    AccessControlAllowOrigin: `*`,
    StrictTransportSecurity: 'max-age=31536000; includeSubDomains; preload',
    tables: require('./tables'),
    static_dirs : [
        './public'
    ],
    gtag: "G-FNS24XQB29"
};
