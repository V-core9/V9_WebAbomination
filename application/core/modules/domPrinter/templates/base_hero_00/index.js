const V_Logo  = require("../../../V_Logo");

const base_hero_00 = {
    name: "base_hero_00",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null } }) => {
        return `<div class="section_side">
                    <h1>${section.title}</h1>
                    <h2>${section.subtitle}</h2>
                    <button id="mainButtonClick" onclick="${section.button.do}">${section.button.text}</button>
                </div>
                <div class="section_side">
                    <v_logo></v_logo>
                </div>`;
    },
    css: () => {
        return `<style>
                    .base_hero_00 {
                        background: #101525;
                        color: white;
                    }
                </style>`;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[base_hero_00 :: onload]');
        setTimeout(() => {
            V_Logo.printLogo('v_logo');
        }, 250);
    }
};

module.exports = base_hero_00;
