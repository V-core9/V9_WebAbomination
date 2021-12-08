module.exports = {
    v_debugger: true,
    charset: "UTF-8",
    lang: 'en',
    port: process.env.PORT || 2500,
    viewport: "width=device-width",
    compression: true,
    ContentSecurityPolicy: "script-src 'unsafe-inline'", // 'none'
    ObjectSecurityPolicy: "object-src 'unsafe-inline'" // 'none'
};
