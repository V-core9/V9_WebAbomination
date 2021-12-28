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
                        align-items: center;
                        color: #fff;
                        height: calc(100vh - 2em);
                        align-items: center;
                        flex-direction: column-reverse;
                        gap: 1em;
                    }
                    .base_hero_00 .section_side {
                        display: flex;
                        flex-direction: column;
                        gap: 1em;
                        flex: 1;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                    }
                    
                    .base_hero_00 .section_side button {
                        margin: 0;
                    }

                    .base_hero_00 .section_side h1 {
                        font-size: 2em;
                    }
                    
                    .base_hero_00 .section_side h2 {
                        font-size: 1.25em;
                        line-height: 1.25em;
                    }

                    v_logo {
                        width: 100%;
                        height: 100%;
                    }
                    

                @media screen and (min-width: 768px) {
                    .base_hero_00 {
                        flex-direction: row;
                    }
                }

                </style>`;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[base_hero_00 :: onload]');
        setTimeout(() => {
            //const size = document.querySelector('v_page').getBoundingClientRect().width;
            //V_Logo.setWidth(size/2);
            //V_Logo.setHeight(size/2);
            V_Logo.printLogo('v_logo');
        }, 250);
    }
};

module.exports = base_hero_00;
