const html_content_elem = {
    name: "html_content_elem",
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
        return `
                .html_content_elem {
                    color: #fff;
                    gap: 1em;
                    padding: 5em 0;
                }

                .html_content_elem .section_side {
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
        console.log('[html_content_elem :: onload]');
    },
};

module.exports = html_content_elem;
