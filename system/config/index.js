
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
    forced_ssr_render: true,
    v_debugger: true,
    encoding: `utf8`,
    charset: `UTF-8`,
    lang: `en`,
    port: process.env.PORT || 2500,
    viewport: `width=device-width`,
    compression: true,
    ContentSecurityPolicy: `script-src 'self'`, 
    ObjectSecurityPolicy: `object-src 'self'` ,
    tables: require('./tables'),
    static_dirs : [
        './public'
    ]
};
