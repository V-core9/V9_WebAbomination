const base_hero_01 = {
    name: "base_hero_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image: { url: "#", width: "auto", height: "auto", alt: null } }) => {
        return `<div class="section_side">
                    <h1>${section.title}</h1>
                    <h2>${section.subtitle}</h2>
                    <button action="${section.button.do}">${section.button.text}</button>
                </div>
                <div class="section_side">
                    <img src="${section.image.url}" width="${section.image.width}" height="${section.image.height}" alt="${section.image.alt}"/>
                </div>`;
    },
    css: () => {
        return `<style>
                    .base_hero_01 {
                        background: #101525;
                        color: #fff;
                        gap: 1em;
                    }
                </style>`;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[base_hero_01 :: onload]');
    },
};

module.exports = base_hero_01;
