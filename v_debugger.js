module.exports = async (req, res, $_info) => {
    return `
    <script>
    const v_debugger = { 

        api_version: "${$_info.version}",

        timestamp: ${Date.now()},

        config: {
            ui: true,
            ui_pos: "right"
        },

        toggleUI () {
            var item = document.getElementById('v_debugger_block');
            if (item.getAttribute('status') == 'open') {
                item.setAttribute('status', '');
            } else {
                item.setAttribute('status', 'open');
            };
        },

        addGeoBlock() {
            document.querySelector('v_dbg_box').innerHTML += \`
            <v_block>
                    <header>
                        <ic>👨‍💻</ic>
                        <txt>Your Geo IP data</txt>
                    </header>
                    <box>
                        <item>
                            <name>IP:</name>
                            <txt>${($_info.ip !== undefined) ? $_info.ip : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>Country:</name>
                            <txt>${($_info.lookup !== null) ? $_info.lookup.country : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>Region:</name>
                            <txt>${($_info.lookup !== null) ? $_info.lookup.region : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>Eu:</name>
                            <txt>${($_info.lookup !== null) ? $_info.lookup.eu : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>Timezone:</name>
                            <txt>${($_info.lookup !== null) ? $_info.lookup.timezone : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>City:</name>
                            <txt>${($_info.lookup !== null) ? $_info.lookup.city : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>Metro:</name>
                            <txt>${($_info.lookup !== null) ? $_info.lookup.metro : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>Area:</name>
                            <txt>${($_info.lookup !== null) ? $_info.lookup.area : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>LL:</name>
                            <txt>${($_info.lookup !== null) ? $_info.lookup.ll : 'NULL'}</txt>
                        </item>
                    </box>
                    <foot>
                    </foot>
                </v_block>\`;
        },

        addIpData() {
            document.querySelector('v_dbg_box').innerHTML += \`
            <v_block>
                    <header>
                        <ic>📡</ic>
                        <txt>Your IP data</txt>
                    </header>
                    <box>
                        <item>
                            <name>IP:</name>
                            <txt>${($_info.ip !== undefined) ? $_info.ip : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>BOT:</name>
                            <txt>${($_info.bot !== null) ? $_info.bot : 'NULL'}</txt>
                        </item>
                    </box>
                    <foot>
                    </foot>
                </v_block>\`;
        },

        appInfoData() {
            document.querySelector('v_dbg_box').innerHTML += \`
            <v_block>
                    <header>
                        <ic>📡</ic>
                        <txt>Application Info</txt>
                    </header>
                    <box>
                        <item>
                            <name>API Version:</name>
                            <txt>${($_info.api_version !== undefined) ? $_info.api_version : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>Request Timestamp:</name>
                            <txt>${($_info.ts !== null) ? $_info.ts : 'NULL'}</txt>
                        </item>
                    </box>
                    <foot>
                    </foot>
                </v_block>\`;
        },

        reqHeadersInfo() {
            document.querySelector('v_dbg_box').innerHTML += \`
            <v_block>
                    <header>
                        <ic>📡</ic>
                        <txt>Request Headers</txt>
                    </header>
                    <box>
                        <item>
                            <name>User Agent:</name>
                            <txt>${($_info._req_headers[`user-agent`] !== null) ? $_info._req_headers[`user-agent`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>Accept:</name>
                            <txt>${($_info._req_headers[`accept`] !== null) ? $_info._req_headers[`accept`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>accept-encoding:</name>
                            <txt>${($_info._req_headers[`accept-encoding`] !== null) ? $_info._req_headers[`accept-encoding`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>accept-language:</name>
                            <txt>${($_info._req_headers[`accept-language`] !== null) ? $_info._req_headers[`accept-language`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>cache-control:</name>
                            <txt>${($_info._req_headers[`cache-control`] !== null) ? $_info._req_headers[`cache-control`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>cache-control:</name>
                            <txt>${($_info._req_headers[`cache-control`] !== null) ? $_info._req_headers[`cache-control`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>cdn-loop:</name>
                            <txt>${($_info._req_headers[`cdn-loop`] !== null) ? $_info._req_headers[`cdn-loop`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>cf-connecting-ip:</name>
                            <txt>${($_info._req_headers[`cf-connecting-ip`] !== null) ? $_info._req_headers[`cf-connecting-ip`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>cf-ipcountry:</name>
                            <txt>${($_info._req_headers[`cf-ipcountry`] !== null) ? $_info._req_headers[`cf-ipcountry`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>cf-ray:</name>
                            <txt>${($_info._req_headers[`cf-ray`] !== null) ? $_info._req_headers[`cf-ray`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>cf-visitor:</name>
                            <txt>${($_info._req_headers[`cf-visitor`] !== null) ? $_info._req_headers[`cf-visitor`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>cf-warp-tag-id:</name>
                            <txt>${($_info._req_headers[`cf-warp-tag-id`] !== null) ? $_info._req_headers[`cf-warp-tag-id`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>connection:</name>
                            <txt>${($_info._req_headers[`connection`] !== null) ? $_info._req_headers[`connection`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>dnt:</name>
                            <txt>${($_info._req_headers[`dnt`] !== null) ? $_info._req_headers[`dnt`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>pragma:</name>
                            <txt>${($_info._req_headers[`pragma`] !== null) ? $_info._req_headers[`pragma`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <txt>referer:</txt>
                            <txt>${($_info._req_headers[`referer`] !== null) ? $_info._req_headers[`referer`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>sec-ch-ua:</name>
                            <txt>${($_info._req_headers[`sec-ch-ua`] !== null) ? $_info._req_headers[`sec-ch-ua`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>sec-ch-ua-mobile:</name>
                            <txt>${($_info._req_headers[`sec-ch-ua-mobile`] !== null) ? $_info._req_headers[`sec-ch-ua-mobile`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>sec-ch-ua-platform:</name>
                            <txt>${($_info._req_headers[`sec-ch-ua-platform`] !== null) ? $_info._req_headers[`sec-ch-ua-platform`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>sec-fetch-dest:</name>
                            <txt>${($_info._req_headers[`sec-fetch-dest`] !== null) ? $_info._req_headers[`sec-fetch-dest`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>sec-fetch-mode:</name>
                            <txt>${($_info._req_headers[`sec-fetch-mode`] !== null) ? $_info._req_headers[`sec-fetch-mode`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>sec-fetch-site:</name>
                            <txt>${($_info._req_headers[`sec-fetch-site`] !== null) ? $_info._req_headers[`sec-fetch-site`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>sec-fetch-user:</name>
                            <txt>${($_info._req_headers[`sec-fetch-user`] !== null) ? $_info._req_headers[`sec-fetch-user`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>upgrade-insecure-requests:</name>
                            <txt>${($_info._req_headers[`upgrade-insecure-requests`] !== null) ? $_info._req_headers[`upgrade-insecure-requests`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>x-forwarded-for:</name>
                            <txt>${($_info._req_headers[`x-forwarded-for`] !== null) ? $_info._req_headers[`x-forwarded-for`] : 'NULL'}</txt>
                        </item>
                        <item>
                            <name>x-forwarded-proto:</name>
                            <txt>${($_info._req_headers[`x-forwarded-proto`] !== null) ? $_info._req_headers[`x-forwarded-proto`] : 'NULL'}</txt>
                        </item>
                    </box>
                    <foot>
                    </foot>
                </v_block>\`;
        },

        init() {
            console.log("v_debugger init");

            document.querySelector('body').innerHTML += '<div class="v_block" id="v_debugger_block" ui_pos="'+v_debugger.config.ui_pos+'" status="open"><div class="header"><h2>V FrontEnd Debugger Tool</h2></div><v_dbg_box></v_dbg_box></div>';
            
            window.onclick = () => {
                v_debugger.toggleUI();
            }

            v_debugger.appInfoData();
            v_debugger.addIpData();
            v_debugger.addGeoBlock();
            v_debugger.reqHeadersInfo();
        }

    };
    
    v_debugger.init();

    </script>
        <style>
            * {
                margin: 0;
                padding: 0;
                line-height: 1em;
            }

            body {
                overflow: hidden;
            }

            #v_debugger_block {
                position: fixed;
                min-height: 200px;
                width: 25%;
                background: #f5f0f0;
                box-shadow: 0 0 10px grey;
                transition: 0.25s ease all;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            #v_debugger_block[ui_pos='right'] {
                right: -25%;
                height: calc(100% - 1.2em);
                top: .5em;
            }

            #v_debugger_block[ui_pos='right'][status='open'] {
                right: .5em;
                top: 0.5em;
            }

            v_dbg_box {
                display: flex;
                flex-direction: column;
                overflow: auto;
            }
            
            #v_debugger_block .header {
                padding: 1em;
                background: #ebebeb;
                color: white;
                box-shadow: 0 0 5px gray;
                z-index: 25;
            }

            #v_debugger_block .header h2 {
                font-size: 1.125em;
                font-family: monospace;
                color: #545454;
            }
        </style>
    `;
};
