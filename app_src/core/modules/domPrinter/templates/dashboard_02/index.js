const apiReq = require('../../../apiReq');
const vSidebar = require('../../../vSidebar');

const dashboard_02 = {
    name: "dashboard_02",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, data: {  } }) => {
        return `
        <root>
        <page>
            <header>
                <button class="home_btn ">
                    <icon>🌌</icon>
                    <info>Home</info>
                </button>
                <options>
                    <button class="main_menu_btn text_visible" action="${section.button.do}">
                        <icon>⏭</icon>
                        <info>${section.button.text}</info>
                    </button>
                    <button class="settings_btn">
                        <icon>⚡</icon>
                        <info>Settings</info>
                    </button>
                    <button class="exit_btn">
                        <icon>🔥</icon>
                        <info>Logout</info>
                    </button>
                </options>
            </header>
            <content>
                <hero_block>
                    <main_msg>Application Performance</main_msg>
                    <svg width="300" height="300" viewBox="0 0 100 100">
                        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#2e354c"></stop>
                            <stop offset="100%" stop-color="#5f72ad"></stop>
                        </linearGradient>
                        <circle stroke-linecap="round" cx="50" cy="50" r="45" stroke="url(#linear)" stroke-width="5"
                            fill="none" stroke-dasharray="300" stroke-dashoffset="150" stroke-mitterlimit="0"
                            transform="rotate(-90 ) translate(-100 0)"></circle>
                        <text x="25" y="65"
                            style="font-size: 45px;fill: #6073ae;font-weight: 200;stroke-width: 2px;stroke: #2e354c;">57</text>
                        <text x="70" y="65"
                            style="font-size: 25px;fill: #4a567c;font-weight: 200;stroke-width: 2px;/* stroke: gray; */">%</text>
                    </svg>

                    <options>
                        <combined_btns>
                            <button class="main_menu_btn">
                                <icon>⏭</icon>
                                <info>Menu</info>
                            </button>
                            <button class="settings_btn active">
                                <icon>⚡</icon>
                                <info>Settings</info>
                            </button>
                            <button class="exit_btn">
                                <icon>🔥</icon>
                                <info>Logout</info>
                            </button>
                        </combined_btns>

                        <button class="main_menu_btn">
                            <icon>⏭</icon>
                            <info>Menu</info>
                        </button>
                    </options>
                </hero_block>
                <app_modules>
                    <module_block status="success">
                        <h3>Maintenance</h3>
                        <icon>📦</icon>
                        <status>Automatic</status>
                        <msg>Last Run: Today</msg>
                    </module_block>

                    <module_block status="warn">
                        <h3>Performance</h3>
                        <icon>🚀</icon>
                        <status>6 optimizations found</status>
                    </module_block>

                    <module_block status="warn">
                        <h3>Clean up</h3>
                        <icon>🧹</icon>
                        <status>388MB of space to claim</status>
                    </module_block>

                    <module_block status="warn">
                        <h3>Fix Problems</h3>
                        <icon>🪓</icon>
                        <status>4 Problems Found</status>
                    </module_block>

                    <module_block>
                        <h3>All Functions</h3>
                        <icon>🧯</icon>
                        <status>47 Functions Available</status>
                    </module_block>

                    <module_block>
                        <h3>Revert Changes</h3>
                        <icon>🔁</icon>
                        <status>Undo Last Chnage</status>
                    </module_block>
                </app_modules>
            </content>
            <footer>
                <trial>
                    <msg>
                        <span class="error_color">
                            <icon>!</icon>
                            <p>Potential code-breaking problems found!</p>
                        </span>
                        <p>Potential Fixes may be available in that section of dashboard.</p>
                    </msg>
                    <button>Check Fixes</button>
                </trial>
            </footer>
        </page>
    </root>`;
    },
    css: () => {
        return `
            :root {
                --default_margin: 1em;
                --default_padding: 1em;
                --default_gap: 1em;
                --main_background_color: #101520;
                --main_text_color: #fafafa;
                --primary_color: #2196F3;
                --primary_color_alt: #607D8B;
                --primary_color_help: #9C27B0;
            }
            
            
            html, body {
                color: white;
                background: #101520;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
            
            root {
                display: flex;
                flex: 1;
                overflow: hidden;
            }

            .dashboard_02 {
                display: flex;
                flex: 1;
                width: 100%;
                min-height: 0!important;
            }
            v_page {
                padding: 0;
            }
            page {
                display: flex;
                flex-direction: column;
                background: radial-gradient(#1f2430, #191c24);
                background-size: 100% 200%;
                flex: 1;
                align-items: center;
                background-position: 0% 100%;
            }
            
            header {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                background-color: #262d3b;
            }
            page header button {
                margin: 0;
            }
            content {
                display: flex;
                flex-direction: row;
                align-items: center;
                flex: 1;
                background-color: #1f2430;
                gap: 3em;
                width: 100%;
                justify-content: center;
            }
            
            footer {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
                width: 100%;
                background-color: #1b1e28;
                padding: 1em;
            }
            
            button {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 1em;
                border: none;
                outline: none;
                background: rgb(255 255 255 / 15%);
                color: white;
            }
            
            options {
                display: flex;
                flex-direction: row;
                gap: 1em;
            }
            
            combined_btns {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border-radius: 2em;
                border: .25em solid gray;
                overflow: hidden;
            }
            
            button info {
                overflow: hidden;
                font-size: 0;
            }
            
            combined_btns button {
                padding: 1em;
                border: none;
                outline: none;
            }
            
            .text_visible info {
                font-size: 1em;
                /* gap: 1em; */
            }
            
            button.home_btn {
                background: #2e354c;
            }
            
            button.text_visible {
                gap: 1em;
            }
            
            header options button {
                background: transparent;
            }
            
            module_block {
                background: #272e3c;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: normal;
                padding: 1em;
                gap: 1.25em;
                border-radius: 1em;
                box-shadow: 0 5px 10px #00000033;
            }
            
            app_modules {
                display: grid;
                grid-template-columns: 33% 33% 33%;
                grid-row-gap: 1em;
                grid-gap: 1em;
                text-align: center;
            }
            
            module_block h3 {
                font-size: 1.5em;
                text-align: center;
                color: #bbc4d4;
                font-weight: 200;
            }
            
            module_block icon {
                font-size: 2.5em;
                padding: .5em;
                background: #232833;
                border-radius: 50%;
            }
            
            module_block status {
                color: #8195bd;
                /* background: #2d374d; */
                /* padding: .5em 1em; */
                font-size: 1.15em;
                border-radius: 2em;
            }
            
            module_block msg {
                color: #667599;
            }
            
            hero_block {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 3em;
                align-self: stretch;
            }
            
            hero_block options button {
                border-radius: 50%;
                width: 3em;
                height: 3em;
                margin: 0.3em;
                font-size: 1em;
            }
            
            hero_block options button icon {
                font-size: 1em;
            }
            
            hero_block options combined_btns button {
                border-radius: 0;
                margin: 0;
                padding: 0;
                border: none;
                height: 100%;
            }
            
            hero_block options combined_btns button.active {
                background: grey;
            }
            
            icon {
                text-align: center;
                justify-content: center;
                display: flex;
                font-size: 2em;
                line-height: 1em;
                display: flex;
            }
            
            main_msg {
                text-align: center;
                font-size: 1.5em;
                text-shadow: 0 0 5px black;
                letter-spacing: -1px;
                font-weight: 100;
                color: #8195bd;
            }
            
            trial {
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: space-evenly;
            }
            
            .error_color icon {
                font-size: 1.5em;
                color: red;
                border: 2px solid red;
                border-radius: 50%;
                width: 1em;
                height: 1em;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 1em;
            }
            
            .error_color p {
                color: red;
                text-shadow: 0 0 5px black;
                font-size: 1em;
            }
            
            circle {
                filter: drop-shadow(0px 0px 2px #3c4872);
            }
            
            footer trial button {
                border: 2px solid;
                color: #1f2430;
                padding: 0.25em 1em;
                border-radius: 2em;
                background: #2196f3;
                font-size: 1.5em;
            }
            
            footer p {
                color: white;
            }
            trial msg {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 1em;
                font-size: 20px;
            }
            
            trial msg span {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                font-size: 1em;
            }
            
            module_block.warn status {
                color: #FF5722;
            }
            
            module_block[status="warn"] status {
                color: #FF5722;
                background-color: transparent;
                text-transform: uppercase;
            }
            
            module_block[status="warn"] icon:before {
                content: "!";
                position: absolute;
                display: flex   ;
                background: transparent;
                bottom: 0;
                right: 0;
                width: 1em;
                line-height: 1em;
                height: 1em;
                font-size: 14px;
                border-radius: 50%;
                color: #FF5722;
                border: 2px solid;
                font-weight: 900;
                align-items: center;
                justify-content: center;
            }
            
            module_block[status="success"] status {
                background: #2d374d;
                padding: .5em 1em;
            }
            
            module_block[status="success"] icon:before {
                content: "✔";
                position: absolute;
                display: flex;
                background: transparent;
                bottom: 0;
                right: 0;
                width: 1em;
                line-height: 1em;
                height: 1em;
                font-size: 14px;
                border-radius: 50%;
                color: #6073ae;
                border: 2px solid;
                font-weight: 900;
                align-items: center;
                justify-content: center;
            }
            
            button:hover {
                background: #ffffff24;
            }
                `;
    },
    disabled: false,
    author: "-v-",
    onload: async () => {
        console.log('[dashboard_02 :: onload]');

        setTimeout(async () => {
            document.querySelector("#system_stats").innerHTML = JSON.stringify(await apiReq.req("/admin/system_stats", undefined, 'get'), true, 4);
        }, 500);
        
        console.log('Sidebar INIT');
        vSidebar.init();
    },
};

module.exports = dashboard_02;
