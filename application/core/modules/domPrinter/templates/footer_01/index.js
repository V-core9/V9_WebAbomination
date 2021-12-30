const footer_01 = {
    name: "footer_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image: { url: "#", width: "auto", height: "auto", alt: null } }) => {
        return `<div class="section_side">
                    <h1>Footer</h1>
                    <h1>Footer</h1>
                    <h1>Footer</h1>
                    <h1>Footer</h1>
                    <h1>${section.title}</h1>
                    <h2>${section.subtitle}</h2>
                    <button action="${section.button.do}">${section.button.text}</button>
                </div>
                <div class="section_side">
                    <h1>Footer</h1>
                    <h1>Footer</h1>
                    <h1>Footer</h1>
                    <h1>Footer</h1>
                    <img src="${section.image.url}" width="${section.image.width}" height="${section.image.height}" alt="${section.image.alt}"/>
                </div>`;
    },
    css: () => {
        return `
                .footer_01 {
                    color: #fff;
                    gap: 1em;
                    padding: 5em 0;
                }

                .footer_01 .section_side {
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 1em;
                }
                `;
    },
    disabled: false,
    author: "-v-",
    onload: () => {
        console.log('[footer_01 :: onload]');
    },
};

module.exports = footer_01;
