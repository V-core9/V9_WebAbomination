const base_hero_alt_01 = {
    name: "base_hero_alt_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image: { url: "#", width: "auto", height: "auto", alt: null } }) => {
        return `
                <div class="section_side">
                    <img src="${section.image.url}" width="${section.image.width}" height="${section.image.height}" alt="${section.image.alt}"/>
                </div>
                <div class="section_side">
                    <h1>${section.title}</h1>
                    <h2>${section.subtitle}</h2>
                    <button id="mainButtonClickALT" onclick="${section.button.do}">${section.button.text}</button>
                </div>
            `;
    },
    css: () => {
        return `
                .base_hero_alt_01 {
                    background: #101525;
                    color: white;
                }
                
                .base_hero_alt_01 author {
                    background: #0000006e;
                }
                
                .base_hero_alt_01 h1 {
                    font-size: 1.65em;
                    line-height: 1em;
                    background: #b40000;
                }
                
                .base_hero_alt_01 {
                    gap: 1em;
                    position: relative;
                    margin: 0 auto;
                    align-items: stretch;
                    padding: 1em;
                }
                
                .base_hero_alt_01 .section_side {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #ffffff0d;
                    gap: 1em;
                    text-align: center;
                }
                
                .base_hero_alt_01 h2 {
                    font-size: 1.25em;
                    line-height: 1.75em;
                    font-weight: 500;
                    text-decoration: underline;
                }
                
                .base_hero_alt_01 button {
                    background: #7e1010;
                    cursor: pointer;
                    box-shadow: 0 1px 2px #00000075;
                }
                
                .base_hero_alt_01 button:hover {
                    background: #c30000;
                    box-shadow: 0 5px 5px black;
                }
                `;
    },
    disabled: false,
    author: "-v-"
};

module.exports = base_hero_alt_01;
