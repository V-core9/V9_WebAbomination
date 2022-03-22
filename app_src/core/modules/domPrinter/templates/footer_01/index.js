const footer_01 = {
    name: "footer_01",
    view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image: { url: "#", width: "auto", height: "auto", alt: null } }) => {
        return `<div class="section_side">
                    <h4>Home</h4>
                    <h4>About</h4>
                    <h4>Blog</h4>
                    <h4>Contact</h4>
                    <h4>Help</h4>
                </div>
                <div class="section_side">
                    <h4><a href='/sitemap_index.xml'>Sitemap Index</a></h4>
                    <h4><a href='/pages_sitemap.xml'>Pages Sitemap</a></h4>
                    <h4><a href='/posts_sitemap.xml'>Posts Sitemap</a></h4>
                    <h4><a href='/authors_sitemap.xml'>Authors Sitemap</a></h4>
                </div>`;
    },
    css: () => {
        return `
                .footer_01 {
                    color: #fff;
                    gap: 1em;
                    padding: 5em 0;
                    background: linear-gradient(60deg, #080e18, #161f2f, #080e18);
                    box-shadow: 0 0 20px black inset;
                    flex: 1;
                    display: flex;
                    width: 100%;
                    min-height: 0!important;
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
