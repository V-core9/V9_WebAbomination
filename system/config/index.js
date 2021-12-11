module.exports = {
    auto_init: true,
    bot_ssr_render : true,
    v_debugger: true,
    encoding: `utf8`,
    charset: `UTF-8`,
    lang: `en`,
    port: process.env.PORT || 2500,
    viewport: `width=device-width`,
    compression: true,
    ContentSecurityPolicy: `script-src 'unsafe-inline' *.vercel.app`, // 'none'
    ObjectSecurityPolicy: `object-src 'unsafe-inline'` // 'none'
};
