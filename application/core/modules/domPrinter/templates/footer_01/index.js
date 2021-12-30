const footer_01 = {
    name: "footer_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image: { url: "#", width: "auto", height: "auto", alt: null } }) => {
        return `<div class="section_side">
                    <h4>Footer</h4>
                    <h4>Footer</h4>
                    <h4>Footer</h4>
                    <h4>Footer</h4>
                </div>
                <div class="section_side">
                    <h4><a href='/sitemap_index.xml'>Sitemap Index</a></h4>
                    <h4><a href='/page-sitemap.xml'>Pages Sitemap</a></h4>
                    <h4><a href='/post-sitemap.xml'>Posts Sitemap</a></h4>
                    <h4><a href='/author-sitemap.xml'>Authors Sitemap</a></h4>
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
