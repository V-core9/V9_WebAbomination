const htmlPrinter = {
    a: async ({ text, href = "#", target }) => {
        return `<a href="${href}" ${(target !== undefined) ? ('target="' + target + '"') : ''}>${text}</a>`;
    },
    img: async ({ src, alt }) => {
        return `<img src="${src}" alt="${alt}">`;
    },
    p: async (text) => {
        return `<p>${text}</p>`;
    }

};

module.exports = htmlPrinter;
