const miniCake = require('../miniCake');

const vSidebar = {

    page_data: null,

    api_version: "11.0.147",

    timestamp: Date.now(),

    settings: {
        ui: true,
        ui_pos: "right",
        elem_id: "vSidebar",
        open: false
    },

    toggleUI: async () => {
        var item = document.getElementById(vSidebar.settings.elem_id);
        item.setAttribute('status', (item.getAttribute('status') == 'open') ? '' : 'open');
    },

    menu: {
        public() {
            return `<a href="/home">🚗 Home</a>
                <a href="/about">🌈 About us</a>
                <a href="/blog">📰 Blog</a>
                <a href="/authors">🤼 Authors</a>
                <a href="/statistics">📊 Statistics</a>
                <a href="/system_status">🚀 System Status</a>
                <a href="/contact">💌 Contact</a>
                <a href="/login">🔐 Login</a>
                <a href="/register">🆔 Register</a>`;
        },

        application() {
            return `<a href="/application">👨‍💻 Application</a>
                <a href="/home">🚗 Home</a>
                <a href="/about">🌈 About us</a>
                <a href="/blog">📰 Blog</a>
                <a href="/authors">🤼 Authors</a>
                <a href="/statistics">📊 Statistics</a>
                <a href="/system_status">🚀 System Status</a>
                <a href="/my_profile">🙋‍♂️ My Profile</a>
                <a action="logout">🔐 Logout</a>`;
        },
    },
    init () {
        console.log("vSidebar init");
        document.querySelector('body').innerHTML += `<div class="v_block" id="${vSidebar.settings.elem_id}" ui_pos="${vSidebar.settings.ui_pos}" status="${(vSidebar.settings.open === true ? 'open' : 'closed')}">
                                                        <div class="header">
                                                            <branding>
                                                                <img src="/logo.dark_alt.svg" alt="V-core9 SVG Logo" width="30px" height="30px"/>
                                                                <h2>Navigation</h2>
                                                            </branding>
                                                            <actions>
                                                                <button action="fullscreenToggle">💻</button>
                                                                <button action="mainNavToggle">✖</button>
                                                            </actions>
                                                        </div>
                                                        <content>
                                                            ${(miniCake.get('refreshToken') !== false) ? vSidebar.menu.application() : vSidebar.menu.public()}
                                                        </content>
                                                        </div>`;
    }

};


module.exports = vSidebar;
