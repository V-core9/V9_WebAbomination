const apiReq = require('../../../apiReq');

const dashboard_01 = {
    name: "dashboard_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, data: {  } }) => {
        return `<div class="section_side">
                    <h1>${section.title}</h1>
                    <h2>${section.subtitle}</h2>
                    <button action="${section.button.do}">${section.button.text}</button>
                </div>
                <div class="section_side">
                    <pre id='system_stats'>${JSON.stringify(section.data)}</pre>
                </div>`;
    },
    css: () => {
        return `
                .dashboard_01 {
                    color: #fff;
                    gap: 1em;
                }

                .dashboard_01 .section_side {
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 1em;
                }
                `;
    },
    disabled: false,
    author: "-v-",
    onload: async () => {
        setTimeout(async () => {
            const stats = await apiReq("https://v-core9.com/admin/system_stats", undefined, 'get');
            document.querySelector("#system_stats").innerHTML = JSON.stringify(stats, true, 4);
        }, 500);
    },
};

module.exports = dashboard_01;
