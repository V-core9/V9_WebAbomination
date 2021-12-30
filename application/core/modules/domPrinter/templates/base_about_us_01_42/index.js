const base_about_us_01_42 = {
    name: "base_about_us_01_42",
    view(section = { title: null, subtitle: null, text: null }) {
        return `<div class="page_section ">
                    <div class="section_side">
                        <h3>${section.title}</h3>
                        <h5>${section.subtitle}</h5>
                    </div>
                    <div class="section_side inline_items">
                        <ultra>${section.text}</ultra>
                        <button action='mainNavToggle'>${section.linkText}</button>
                    </div>
                </div>`;
    },
    css() {
        return `
                .base_about_us_01_42 {
                    width: 100%;
                    margin: 5em 0;
                }

                .base_about_us_01_42 .section_side {
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    flex-direction: column;
                    gap: 1em;
                }

                .base_about_us_01_42 .section_side h3 {
                    color: #03a9f4;
                    font-size: 2em;
                    text-align: center;
                    letter-spacing: 2px;
                }

                .base_about_us_01_42 .section_side h5 {
                    font-size: 1.25em;
                    color: gray;
                    text-shadow: 0 0 5px black;
                    background: #00000030;
                    padding: 1em 2em;
                }

                .base_about_us_01_42 .section_side p {
                    max-width: 50%;
                    text-align: center;
                    line-height: 1.5em;
                    letter-spacing: 1px;
                    text-shadow: 0 0 10px #03a9f4;
                }

                ultra {
                    font-size: 5em;
                    background: #070a14;
                    padding: 0.5em;
                    color: #03a9f4;
                    font-weight: bold;
                }

                .base_about_us_01_42 .inline_items {
                    display: flex;
                    flex-direction: row;
                }
                `;
    },
    disabled: false,
    author: "-v-"
};


module.exports = base_about_us_01_42;
