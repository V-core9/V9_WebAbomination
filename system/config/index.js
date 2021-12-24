const vDB = require('v_database');
const vTables = require('./tables');

module.exports = async () => {
    return await vDB.item.view(vTables.settings, 'sys_settings');
}; 


/*

{
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
    ContentSecurityPolicy: `script-src 'unsafe-inline' *.vercel.app 'self'`, 
    ObjectSecurityPolicy: `object-src 'unsafe-inline'` ,
    tables: require('./tables')
};
*/
