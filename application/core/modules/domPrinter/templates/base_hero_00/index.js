const V_Logo  = require("../../../V_Logo");

const base_hero_00 = {
    name: "base_hero_00",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null } }) => {
        return `<div class="section_side">
                    <h1>${section.title}</h1>
                    <h2>${section.subtitle}</h2>
                    <button id="mainButtonClick" action="${section.button.do}">${section.button.text}</button>
                </div>
                <div class="section_side">
                    <v_logo></v_logo>
                </div>`;
    },
    css: () => {
        return `
                    .base_hero_00 {
                        align-items: center;
                        color: #fff;
                        align-items: center;
                        flex-direction: column-reverse;
                        gap: 1em;
                        padding: 1em;
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
                        font-size: 1.65em;
                        margin:  0;
                        line-height: 1.25em;
                    }
                    
                    .base_hero_00 .section_side h2 {
                        font-size: 1.05em;
                        line-height: 1.15em;
                    }

                    v_logo {
                        width: 75vw;
                        height: 75vw;
                    }

                    .base_hero_00 author {
                        color: white;
                        background: #2196f3;
                        padding: .1em .25em;
                    }

                @media screen and (min-width: 768px) {
                    .base_hero_00 {
                        flex-direction: row;
                        height: calc(100vh - 2em);
                    }

                    
                    v_logo {
                        width: 90%;
                        height: auto;
                    }
                }

                `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[base_hero_00 :: onload]');
        setTimeout(() => {
            V_Logo.printLogo('v_logo');
        }, 300);
    }
};

module.exports = base_hero_00;
