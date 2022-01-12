const baseDom = {
    a({ text, href, target }) {
        var helpString = {
            href: (href !== undefined) ? `href="${href}"` : '',
            target: (target !== undefined) ? `target="${target}"` : '',
        };

        return `<a href="${helpString.href}" ${helpString.target}>${text}</a>`;
    },

    img({ src, alt, width, height }) {
        var helpString = {
            src: (src !== undefined) ? `src="${src}"` : '',
            alt: (alt !== undefined) ? `alt="${alt}"` : '',
            width: (width !== undefined) ? `width="${width}"` : '',
            height: (height !== undefined) ? `height="${height}"` : '',
        };

        return `<img ${helpString.src} ${helpString.alt} ${helpString.width} ${helpString.height} />`;
    },

    p(data) {
        return `<p>${data}</p>`;
    },

    h1(data) {
        return `<h1>${data}</h1>`;
    },

    h2(data) {
        return `<h2>${data}</h2>`;
    },

    h3(data) {
        return `<h3>${data}</h3>`;
    },

    h4(data) {
        return `<h4>${data}</h4>`;
    },

    h5(data) {
        return `<h5>${data}</h5>`;
    },

    h6(data) {
        return `<h6>${data}</h6>`;
    },

    ul(items) {
        return `<ul>${items}</ul>`;
    }

};

module.exports = baseDom;
